interface IBook {
    id: number,
    name: string,
    type: string,
    available: boolean
}

const getData = async () => {
    // Static Server Side Rendering
    const res = await fetch("https://simple-books-api.glitch.me/books/");

    // Error Handling
    if (!res.ok) {
        console.log("failed to Fetch Data");
    }
    const data = await res.json();

    return data;
}

export default async function page() {
    const data: IBook[] = await getData();
    console.log(data);
    return (
        <div className='h-full bg-white'>
            <div className="flex justify-center py-8">
                <h2 className="font-semibold text-3xl">Books Data</h2>
            </div>
            <div className=" grid grid-col-3 gap-2 p-6 ">
                {
                    data.map((items) => {
                        const name = items.name;
                        const id = items.id;
                        const type = items.type;
                        return (
                            <div className="border-black border p-6" key={id}>
                                <div>Id: {id}</div>
                                <div>Name: {name}</div>
                                <div>Type: {type}</div>
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
