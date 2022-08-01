import React from 'react'
import { useState } from 'react';

const Filter = () => {
    const list = ["Apple", "Mango", "Pineapple", "Banana", "Tomato", "Chesse"];
    const [filtered, setFiltered] = useState(list);
    const filterList = (e) => {
        const fList = list.filter((letter) => 
            letter.toLowerCase().includes((e.target.value).toLowerCase())
        )
        setFiltered(fList)
    } 
    return (
        <>
        <label>
            Search:
            <input type="text" onChange={filterList}></input> 
        </label>
        <div>{filtered.map((item) => <p>{item}</p>)}</div>
        </>
    )
}

export default Filter