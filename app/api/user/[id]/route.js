import { NextResponse } from "next/server";
export async function GET(request, { params }) {
  const id = params.id; // 'a', 'b', or 'c'
  return NextResponse.json({ id });
}
