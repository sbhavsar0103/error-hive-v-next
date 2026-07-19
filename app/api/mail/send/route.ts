import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const isProd = process.env.NEXT_PUBLIC_IS_PROD === "true";
    const baseUrl = isProd 
      ? "https://api.error-hive.com/api/v1" 
      : "http://10.58.84.29:8000/api/v1";

    const response = await fetch(`${baseUrl}/mail/send`, {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
