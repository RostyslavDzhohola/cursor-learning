"use server";

// From 'ai' package: Utility for streaming text responses
// Docs: https://www.npmjs.com/package/ai#streamtext
import { streamText } from "ai";

// From '@ai-sdk/openai' package: OpenAI client configuration
// Docs: https://www.npmjs.com/package/@ai-sdk/openai
import { openai } from "@ai-sdk/openai";

// From 'ai/rsc' package: Creates a streamable value for React Server Components
// Docs: https://www.npmjs.com/package/ai#createstreamablevalue
import { createStreamableValue } from "ai/rsc";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function continueConversation(history: Message[]) {
  const stream = createStreamableValue();

  (async () => {
    const { textStream } = await streamText({
      model: openai("gpt-4o-mini"),
      system: "You are a helpful AI assistant.",
      messages: history
    });

    for await (const text of textStream) {
      stream.update(text);
    }

    stream.done();
  })();

  return {
    messages: history,
    newMessage: stream.value
  };
}