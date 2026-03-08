import { NextRequest, NextResponse } from "next/server";

const BROWSERLESS_API_KEY = process.env.BROWSERLESS_API_KEY;

export async function POST(req: NextRequest) {
  const { url } = await req.json();

  // Basic validation
  if (
    typeof url !== "string" ||
    !/^https?:\/\/[a-zA-Z0-9.\-_]+(\:[0-9]+)?(\/|$)/.test(url)
  ) {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }
  if (!BROWSERLESS_API_KEY) {
    return NextResponse.json({ error: "Screenshot service not configured" }, { status: 503 });
  }

  try {
    // Browserless screenshot API (https://www.browserless.io/docs/screenshot)
    const apiUrl = "https://chrome.browserless.io/screenshot";
    const screenshotRes = await fetch(`${apiUrl}?token=${BROWSERLESS_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    if (!screenshotRes.ok) {
      return NextResponse.json(
        { error: "Failed to capture screenshot" },
        { status: 500 }
      );
    }

    // Get buffer and convert to base64
    const buf = Buffer.from(await screenshotRes.arrayBuffer());
    const imageUrl = `data:image/png;base64,${buf.toString("base64")}`;
    return NextResponse.json({ imageUrl });
  } catch (err) {
    return NextResponse.json({ error: "Service error" }, { status: 500 });
  }
}