import test from 'node:test';
import assert from 'node:assert';
import { discordRules } from '../src/data/discord-rules.ts';

test('discord rules registry contains baseline rules', () => {
  assert.ok(Array.isArray(discordRules), 'discordRules should be an array');
  assert.ok(discordRules.length >= 8, 'Should have at least 8 rules');

  const ruleIds = discordRules.map(r => r.id);
  assert.ok(ruleIds.includes('profile-banner'));
  assert.ok(ruleIds.includes('server-banner'));
  assert.ok(ruleIds.includes('invite-splash'));
  assert.ok(ruleIds.includes('server-icon'));
  assert.ok(ruleIds.includes('avatar'));
  assert.ok(ruleIds.includes('role-icon'));
  assert.ok(ruleIds.includes('custom-emoji'));
  assert.ok(ruleIds.includes('custom-sticker'));
});

test('discord rules have valid constraints', () => {
  const emojiRule = discordRules.find(r => r.id === 'custom-emoji');
  assert.ok(emojiRule, 'Emoji rule must exist');
  assert.strictEqual(emojiRule.maxFileSizeBytes, 256 * 1024, 'Emoji limit should be 256KB');
  assert.strictEqual(emojiRule.dimensions.width, 128);
  assert.strictEqual(emojiRule.dimensions.height, 128);

  const stickerRule = discordRules.find(r => r.id === 'custom-sticker');
  assert.ok(stickerRule, 'Sticker rule must exist');
  assert.strictEqual(stickerRule.maxFileSizeBytes, 512 * 1024, 'Sticker limit should be 512KB');
  assert.strictEqual(stickerRule.dimensions.width, 320);
  assert.strictEqual(stickerRule.dimensions.height, 320);
  assert.strictEqual(stickerRule.dimensions.exact, true, 'Sticker dimensions must be exact');
});
