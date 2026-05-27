import { NextResponse } from "next/server";
import { Resend } from "resend";

type FeedbackPayload = {
  name: string;
  email: string;
  school?: string;
  role: string;
  feedback: string;
  marketing?: boolean;
  regulationsAccepted?: boolean;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Brak konfiguracji wysyłki." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  let payload: FeedbackPayload;
  try {
    payload = (await request.json()) as FeedbackPayload;
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane formularza." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const school = payload.school?.trim() ?? "";
  const role = payload.role?.trim();
  const feedback = payload.feedback?.trim();
  const marketing = Boolean(payload.marketing);
  const regulationsAccepted = Boolean(payload.regulationsAccepted);

  if (!name || !email || !role || !feedback) {
    return NextResponse.json({ error: "Uzupełnij wymagane pola." }, { status: 400 });
  }
  if (!regulationsAccepted) {
    return NextResponse.json({ error: "Wymagana akceptacja regulaminu." }, { status: 400 });
  }

  if (
    name.length > 80 ||
    email.length > 320 ||
    (school && school.length > 120) ||
    role.length > 80 ||
    feedback.length > 10000
  ) {
    return NextResponse.json({ error: "Zbyt długie dane wejściowe." }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Taniec w biznesie <kontakt@taniecwbiznesie.pl>",
      to: ["kontakt@taniecwbiznesie.pl"],
      replyTo: email,
      subject: "Feedback - formularz na stronie",
      text: [
        "Nowy feedback ze strony:",
        "",
        `Imię i nazwisko / pseudonim: ${name}`,
        `Email: ${email}`,
        school ? `Szkoła: ${school}` : "Szkoła: (brak)",
        `Rola: ${role}`,
        "",
        "Feedback:",
        feedback,
        "",
        `Regulamin zaakceptowany: ${regulationsAccepted ? "tak" : "nie"}`,
        `Zgoda marketingowa: ${marketing ? "tak" : "nie"}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Nie udało się wysłać wiadomości." }, { status: 500 });
  }
}
