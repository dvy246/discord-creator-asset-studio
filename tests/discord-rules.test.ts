import test from 'node:test';
import assert from 'node:assert';
import { DISCORD_RULES } from '../src/data/discord-rules.ts';

test('discord rules registry contains baseline rules', () => {
  assert.ok(Array.isArray(DISCORD_RULES), 'DISCORD_RULES should be an array');
  assert.ok(DISCORD_RULES.length >= 24, 'Should have at least 24 rules');

  const assetTypes = new Set(DISCORD_RULES.map(r => r.assetType));
  assert.ok(assetTypes.has('global-profile-banner'));
  assert.ok(assetTypes.has('server-profile-banner'));
  assert.ok(assetTypes.has('server-banner'));
  assert.ok(assetTypes.has('invite-background'));
  assert.ok(assetTypes.has('server-icon'));
  assert.ok(assetTypes.has('avatar'));
  assert.ok(assetTypes.has('role-icon'));
  assert.ok(assetTypes.has('custom-emoji'));
  assert.ok(assetTypes.has('custom-sticker'));
  assert.ok(assetTypes.has('chat-attachment'));
});

test('discord rules have valid constraints for specific items', () => {
  const emojiRuleSize = DISCORD_RULES.find(r => r.ruleId === 'custom-emoji-max-file-size');
  assert.ok(emojiRuleSize, 'Emoji file size rule must exist');
  assert.strictEqual(emojiRuleSize.value, 256, 'Emoji limit should be 256');
  assert.strictEqual(emojiRuleSize.units, 'KB', 'Emoji limit should be in KB');

  const stickerRuleSize = DISCORD_RULES.find(r => r.ruleId === 'custom-sticker-max-file-size');
  assert.ok(stickerRuleSize, 'Sticker file size rule must exist');
  assert.strictEqual(stickerRuleSize.value, 512, 'Sticker limit should be 512');
  assert.strictEqual(stickerRuleSize.units, 'KB', 'Sticker limit should be in KB');

  const inviteSizeRule = DISCORD_RULES.find(r => r.ruleId === 'invite-background-size');
  assert.ok(inviteSizeRule, 'Invite size rule must exist');
  assert.strictEqual(inviteSizeRule.value, '1920x1080');
  assert.strictEqual(inviteSizeRule.operator, 'eq');
});
