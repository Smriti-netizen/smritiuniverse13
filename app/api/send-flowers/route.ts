import { NextResponse } from "next/server";
import { Resend } from "resend";

const DEFAULT_MESSAGE = "Someone sent you flowers! 🌸";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.FLOWERS_FROM_EMAIL ?? "onboarding@resend.dev";
  const toEmail = process.env.FLOWERS_TO_EMAIL ?? "smritioffi@gmail.com";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured yet." },
      { status: 503 },
    );
  }

  let message: string | undefined;

  try {
    const body = (await request.json()) as { message?: string };
    message = body.message?.trim() || DEFAULT_MESSAGE;
  } catch {
    message = DEFAULT_MESSAGE;
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: "🌸 Someone sent you flowers!",
      text: message,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send flowers." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Send flowers error:", error);
    return NextResponse.json(
      { error: "Failed to send flowers." },
      { status: 500 },
    );
  }
}
