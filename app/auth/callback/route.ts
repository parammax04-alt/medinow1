import { NextResponse, type NextRequest } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? requestUrl.host;
  const protocol = request.headers.get("x-forwarded-proto") ?? requestUrl.protocol.replace(":", "");
  const siteOrigin = `${protocol}://${host}`;
  const code = requestUrl.searchParams.get("code");
  const requestedPath = requestUrl.searchParams.get("next") ?? "/medinow1";
  const nextPath = requestedPath.startsWith("/") && !requestedPath.startsWith("//")
    ? requestedPath
    : "/medinow1";

  if (!code) {
    return NextResponse.redirect(new URL("/login?error=confirmation", siteOrigin));
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(new URL("/login?error=confirmation", siteOrigin));
  }

  return NextResponse.redirect(new URL(nextPath, siteOrigin));
}
