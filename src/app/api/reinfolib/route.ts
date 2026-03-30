import { NextRequest, NextResponse } from "next/server";

const ALLOWED = [
  "XKT014","XKT015","XKT016","XKT017","XKT018","XKT019",
  "XKT020","XKT021","XKT022","XKT023","XKT024","XKT025",
  "XKT026","XKT027","XKT028","XKT029","XKT030","XKT031",
  "XGT001","XST001"
];

export async function GET(request: NextRequest) {
  const sp = new URL(request.url).searchParams;
  const apiId = sp.get("apiId");
  const z = sp.get("z");
  const x = sp.get("x");
  const y = sp.get("y");

  if (!apiId || !z || !x || !y)
    return NextResponse.json({ error: "missing params" }, { status: 400 });
  if (!ALLOWED.includes(apiId))
    return NextResponse.json({ error: "invalid apiId" }, { status: 400 });

  const key = process.env.REINFOLIB_API_KEY;
  if (!key)
    return NextResponse.json({ error: "REINFOLIB_API_KEY not set" }, { status: 500 });

  const url = `https://www.reinfolib.mlit.go.jp/ex-api/external/${apiId}?response_format=geojson&z=${z}&x=${x}&y=${y}`;

  try {
    const r = await fetch(url, {
      headers: { "Ocp-Apim-Subscription-Key": key }
    });
    if (!r.ok)
      return NextResponse.json({ error: `API ${r.status}` }, { status: r.status });

    const data = await r.json();
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (e) {
    return NextResponse.json({ error: "fetch failed" }, { status: 502 });
  }
}
