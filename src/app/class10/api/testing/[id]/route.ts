import { NextRequest, NextResponse } from "next/server";

// Dynamic Deleting
export async function DELETE(request: NextRequest, { params }: any) {
    console.log(params.id)
    return NextResponse.json({
        message: `i am DELETE`,
        id: `${params.id}`,
    })
}
