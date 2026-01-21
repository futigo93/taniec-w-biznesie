import { NextResponse } from "next/server";
import { Resend } from "resend";

type BetaSignupPayload = {
  name: string;
  email: string;
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Brak konfiguracji wysyłki." }, { status: 500 });
  }

  let payload: BetaSignupPayload;
  try {
    payload = (await request.json()) as BetaSignupPayload;
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane formularza." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim() ?? "";

  if (!name || !email) {
    return NextResponse.json({ error: "Uzupełnij wymagane pola." }, { status: 400 });
  }

  if (name.length > 200 || email.length > 320 || message.length > 5000) {
    return NextResponse.json({ error: "Zbyt długie dane wejściowe." }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Taniec w biznesie <onboarding@resend.dev>",
      to: ["kontakt@taniecwbiznesie.pl"],
      replyTo: email,
      subject: "Payroll beta - zgłoszenie konsultacji",
      text: [
        "Nowe zgłoszenie beta (Payroll):",
        "",
        `Imię i nazwisko: ${name}`,
        `Email: ${email}`,
        message ? `Opis: ${message}` : "Opis: (brak)",
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Nie udało się wysłać wiadomości." }, { status: 500 });
  }
}
