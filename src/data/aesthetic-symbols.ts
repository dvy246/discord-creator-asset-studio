/**
 * aesthetic-symbols.ts — language-neutral symbol/divider/kaomoji banks for
 * the Bio Generator (and reusable by other cosmetic-text tools). These are
 * Unicode decorations that are legal in a Discord "About Me" bio and display
 * name (unlike the strict username handle). Text banks (taglines, interests,
 * templates) are localized and live in the Workspace component instead.
 */

// Decorative divider lines — click to insert as a bio separator row.
export const DIVIDERS: string[] = [
  '⋆｡°✩ ‧₊˚ ✩°｡⋆',
  '˚₊‧꒰ა ♡ ໒꒱ ‧₊˚',
  '·˚ ༘ ┊͙ ⋆｡˚',
  '⊹ ࣪ ˖ ✧ ˖ ࣪ ⊹',
  '❀◟┈┈┈┈┈┈◞❀',
  '─୨୧────୨୧─',
  '✦•·············•✦',
  '˗ˏˋ ★ ˎˊ˗',
  '╰┈➤',
  '𓆩♡𓆪',
  '⭒˚｡⋆ ⋆｡˚⭒',
  '♡̩͙ ♡̩̩̩͙ ‧₊˚',
];

// Single accent glyphs / emoji — click to insert inline.
export const SYMBOLS: string[] = [
  '♡', '☾', '☽', '✧', '✦', '⋆', '✩', '❀', '✿', '❁',
  '♬', '♫', '☕', '🌙', '⭐', '✨', '🌸', '🍓', '🎧', '🕊',
  '☁', '🦋', '⚡', '☘', '⟢', '❥', '✝', '⌘', '♠', '♢',
];

// Kaomoji faces — click to insert.
export const KAOMOJI: string[] = [
  '(◕‿◕)', '(｡♥‿♥｡)', '(ᵔᴥᵔ)', 'ʕ•ᴥ•ʔ', '(っ◔◡◔)っ',
  '(⁄ ⁄•⁄ω⁄•⁄ ⁄)', 'ヽ(・∀・)ﾉ', '(◍•ᴗ•◍)', '( ˘ ³˘)♥',
  '(*ˊᵕˋ*)', '⊂(◉‿◉)つ', '(´｡• ᵕ •｡`)', '(๑˃ᴗ˂)ﻭ',
  '٩(◕‿◕)۶', '(ノ◕ヮ◕)ノ*:･ﾟ✧', '(灬º‿º灬)',
];
