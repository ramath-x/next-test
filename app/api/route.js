import { NextResponse } from "next/server";

const data = {
  body: "hello",
  massage: "hello",
};
export function GET(req) {
  return NextResponse.json(data);
}

export function POST(req) {
  return NextResponse.json(data);
}
