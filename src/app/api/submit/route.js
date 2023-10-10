import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

export async function POST(request) {
    const formData = await request.json();
    console.log(formData);
    return NextResponse.json({ message: 'Form data received successfully!' });
}
