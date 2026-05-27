import { NextResponse } from "next/server";
import { Resend } from "resend";

type ConsultingPayload = {
  name: string;
  email: string;
  message?: string;
  regulationsAccepted?: boolean;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Brak konfiguracji wysyłki." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  let payload: ConsultingPayload;
  try {
    payload = (await request.json()) as ConsultingPayload;
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane formularza." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim() ?? "";
  const regulationsAccepted = Boolean(payload.regulationsAccepted);

  if (!name || !email) {
    return NextResponse.json({ error: "Uzupełnij wymagane pola." }, { status: 400 });
  }
  if (!regulationsAccepted) {
    return NextResponse.json({ error: "Wymagana akceptacja regulaminu." }, { status: 400 });
  }

  if (name.length > 200 || email.length > 320 || message.length > 5000) {
    return NextResponse.json({ error: "Zbyt długie dane wejściowe." }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Taniec w biznesie <kontakt@taniecwbiznesie.pl>",
      to: ["kontakt@taniecwbiznesie.pl"],
      replyTo: email,
      subject: "Consulting - prośba o kontakt",
      text: [
        "Nowe zgłoszenie konsultacji:",
        "",
        `Imię i nazwisko: ${name}`,
        `Email: ${email}`,
        message ? `Opis: ${message}` : "Opis: (brak)",
        `Regulamin zaakceptowany: ${regulationsAccepted ? "tak" : "nie"}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Nie udało się wysłać wiadomości." }, { status: 500 });
  }
}
