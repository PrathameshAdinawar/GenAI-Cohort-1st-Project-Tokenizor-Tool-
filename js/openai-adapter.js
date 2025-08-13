import { encode, decode } from 'gpt-tokenizer';

export class OpenAITokenizer {
  textToTokens(text) {
    const tokens = encode(text);
    return {
      tokens,
      tokenCount: tokens.length,
      wordCount: text.trim() === '' ? 0 : text.trim().split(/\s+/).length
    };
  }

  tokensToText(tokensInput) {
    const arr = Array.isArray(tokensInput)
      ? tokensInput
      : JSON.parse(tokensInput);
    return {
      text: decode(arr),
      tokenCount: arr.length
    };
  }
}
