import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";
import {spawn} from "child_process";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(''); // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setError('')
        setName(e.currentTarget.value); // need to fix
    };


    const totalUsers = users.length;
    //2. Вызывается колбек, в нем производим проверку на пустое значение поля Input.
    //*вызываем addUserCallback и передаем введеное имя в инпуте
    const addUser = () => {
        if (name !== "") {
            addUserCallback(name); //создает объект
            alert(`Hello ${name}!!!`);
            setName('')//затираем значение инпута
        } else return setError('Invalid NAME');
    };




    let listUsers = users.map((y:UserType ) => <div>{y.name}</div>)
    return (<div>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
            {listUsers}
        </div>
    )
        ;
}

export default GreetingContainer;
