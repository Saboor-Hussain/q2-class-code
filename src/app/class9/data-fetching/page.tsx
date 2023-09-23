
const getData = async () => {
    const res = await fetch("https://api.quotable.io/random?tags=technology", {
        method: "GET",
        // cache: "no-store"  // Server Side Rendering
        // ISR (Increament Static Regeneration)
        next:{
            revalidate: 10   // will update after every 10 seconds
        }
    });
    const data = await res.json();
    return data;

}

export default async function page() {
    const quote = await getData();
    return (
        <div className="h-screen bg-white">
            {quote.content}
        </div>
    )
}
