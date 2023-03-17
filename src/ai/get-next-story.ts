export function getNextAiStory(storySoFar) {}

export async function getAiResponse(text) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: text,
        },
      ],
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    },
  });
  const body: any = await response.json();
  const responseText = body.choices[0].message.content;
  return responseText;
}
