// in this code we are fetching data from api directly to the client side through server side

//Drawback: it's very bad for SEO
"use client";

import useSWR from "swr";

const url = "https://api.quotable.io/random?tags=technology";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
    const { data, error, isLoading } = useSWR(url, fetcher);

    if (error) return <div className="h-screen bg-white">failed to load</div>;

    if (isLoading) return <div className="h-screen bg-white">loading...</div>;

    return <div className="h-screen bg-white">{data.content}</div>;
}