// src/app/api/news/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const depth = url.searchParams.get("depth") || "2";

  try {
    const res = await fetch(`http://localhost:3000/api/news?depth=${depth}`);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Proxy fetch error:", error);
    return new NextResponse("Failed to fetch data", { status: 500 });
  }
}