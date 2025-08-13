import { OpenAITokenizer } from './openai-adapter.js';

const tokenizer = new OpenAITokenizer();

// Elements for Text → Tokens
const textInput = document.getElementById('text-input');
const tokenizeBtn = document.getElementById('tokenize-btn');
const tokenCountEl = document.getElementById('token-count');
const wordCountEl = document.getElementById('word-count');
const tokensOutput = document.getElementById('tokens-output');

// Elements for Tokens → Text
const tokensInput = document.getElementById('tokens-input');
const detokenizeBtn = document.getElementById('detokenize-btn');
const inputTokenCountEl = document.getElementById('input-token-count');
const textOutput = document.getElementById('text-output');

// Text → Tokens
tokenizeBtn.addEventListener('click', () => {
  const { tokens, tokenCount, wordCount } = tokenizer.textToTokens(textInput.value);
  tokensOutput.value = JSON.stringify(tokens);
  tokenCountEl.textContent = tokenCount;
  wordCountEl.textContent = wordCount;
});

// Tokens → Text
detokenizeBtn.addEventListener('click', () => {
  try {
    const { text, tokenCount } = tokenizer.tokensToText(tokensInput.value);
    textOutput.value = text;
    inputTokenCountEl.textContent = tokenCount;
  } catch (e) {
    alert('Invalid token array format!');
  }
});
