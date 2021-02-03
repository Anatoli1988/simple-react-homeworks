import React from "react";
import s from './Message.module.css'


type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageDataType) {
    debugger
    return (
        <div className={s.message}>
            <img src={props.avatar} alt="text"/>
            <div className={s.block}>
                <div className={s.name}>{props.name}</div>
                <div className={s.messages}>{props.message}</div>
                <div className={s.time}>{props.time}</div>

            </div>

        </div>
    );
}

export default Message;
