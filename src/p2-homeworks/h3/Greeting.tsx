import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClassTrue = s.errorFalse;
    return (
        <div>
            <input title="ВВЕДИ ИМЯ"
                   placeholder={"Введите ИМЯ пользователя"}
                   value={name}
                   onChange={setNameCallback}
                   className={`${error ? inputClassTrue : ""} + ${s.addInput}`}/>
            <span> - {error}</span>
          {/*1.вызываем колбек addUser*/}
            <button className={s.addButton} style={{
                cursor: "pointer",
            }} onClick={addUser}>add
            </button>

            <span> {totalUsers}</span>
        </div>
    );
}

export default Greeting;
