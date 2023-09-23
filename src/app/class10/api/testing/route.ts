// Function should be named as CRUD methods. Like GET, POST, REMOVE, PATCH

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url = request.nextUrl;

    const name = url.searchParams.get("name");
    const age = url.searchParams.get("age");
    if (url.searchParams.has("name") && url.searchParams.has("age")) {
        return NextResponse.json(
            {
                message: `Hello ${name}`,
                age: `${age}`,
                url: `http://localhost:3000/class10/api/testing?name=${name}&age=${age}`
            }
        );
    }

    else {
        return NextResponse.json(
            {
                error: "Failed to Fetch Data"
            },// to send the server status code
            {
                status: 400,
            }
        )
    }
}


export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log(body);
    return NextResponse.json({
        message: "i am POST",
    })
}

export async function PUT(request: NextRequest) {
    const body = await request.json();
    console.log(body);
    return NextResponse.json({
        message: "i am PUT",
    })
}

export async function DELETE(request: NextRequest) {
    const body = await request.json();
    console.log(body);
    return NextResponse.json({
        message: "i am DELETE",
    })
}

