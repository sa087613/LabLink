import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { labName, pi, department } = await req.json();

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    // Fallback template if no key is set yet, so the feature still works during dev
    return NextResponse.json({
      email: `Subject: Interest in joining ${labName}\n\nDear ${pi},\n\nI'm a Georgia Tech undergraduate interested in ${department.toLowerCase()} research, and I came across ${labName}. I'd love to learn more about current projects and whether there are opportunities for undergrads to get involved.\n\nI've attached my resume for reference. Would you be open to a short conversation?\n\nBest,\n[Your name]`,
    });
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Write a short, genuine outreach email from a Georgia Tech undergrad to a professor named ${pi}, who runs ${labName} in ${department}. The student wants to ask about undergrad research opportunities and mentions they've attached their resume. Keep it under 120 words, no over-the-top flattery.`,
        },
      ],
    }),
  });

  const data = await response.json();
  const email = data.choices?.[0]?.message?.content ?? "Couldn't generate a draft.";
  return NextResponse.json({ email });
}