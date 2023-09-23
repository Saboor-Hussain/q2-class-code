import React, { Key } from 'react'

type Books = [
    {
        id: number,
        name: string,
    }
]

const getData = async () => {
    const res = await fetch("https://simple-books-api.glitch.me/books");
    const data = await res.json();

    return data;
}

export default async function page() {
    const data = await getData();
    console.log(data);
    return (
        <div className='h-screen bg-white'>
            {
                data.map((items:any) => {
                    const price = items.price;
                    const name = items.name;
                    const id = items.id;
                    console.log(price)
                    return (
                        <div key={id}>
                            <div>{id}</div>
                            <div>{name}</div>
                            <div>{price}</div>
                            <br />
                        </div>
                    )
                })
            }
        </div>
    )
}
