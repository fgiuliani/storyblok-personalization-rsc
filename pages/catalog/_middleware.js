import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();
  const { pathname } = req.nextUrl;

  const category = pathname.replace("/catalog", "").replace("/", "");

  if (category && !req.cookies["category"]) {
    res.cookie("category", category);
  }

  return res;
}
