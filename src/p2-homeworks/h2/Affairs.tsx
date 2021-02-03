import React, {useState} from "react";
import Affair from "./Affair";
import {AffairPriorityType, AffairType, FilterType} from "./HW2";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) => void |undefined
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))


    const setAll = (value: FilterType) => {
        props.setFilter(value)
    }; // need to fix
    const setHigh = (value: FilterType) => {
       props.setFilter(value)
    };
    const setMiddle = (value: FilterType) => {
        props.setFilter(value)
    };
    const setLow = (value: FilterType) => {
        props.setFilter(value)
    };

    return (
        <div>

            {mappedAffairs}

            <button onClick={() => {setAll("all")}}>All</button>
            <button onClick={() => {setHigh("high")}}>High</button>
            <button onClick={() => {setMiddle("middle")}}>Middle</button>
            <button onClick={() => {setLow("low")}}>Low</button>
        </div>
    );
}

export default Affairs;
