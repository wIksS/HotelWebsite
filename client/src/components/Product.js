import React from 'react'

export default function Product({data, onClick}) {
    console.log(data);

    return (
        <div onClick={onClick}>
            <div>{data.body}</div>
            <hr/>
        </div>
    )
}