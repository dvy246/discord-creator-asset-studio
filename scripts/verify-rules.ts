import { DISCORD_RULES } from '../src/data/discord-rules.ts';

function verifyRules() {
  let hasErrors = false;
  const now = new Date();

  const requiredFields = [
    'ruleId',
    'assetType',
    'constraint',
    'operator',
    'value',
    'units',
    'formats',
    'gate',
    'sourceUrl',
    'quotedSourceNote',
    'verifiedAt',
    'confidence',
    'reviewDueAt',
    'copyKey',
  ];

  for (const rule of DISCORD_RULES) {
    // 1. Check reviewDueAt
    if (!rule.reviewDueAt) {
      console.error(`Error: Rule ${rule.ruleId} is missing reviewDueAt!`);
      hasErrors = true;
    } else {
      const reviewDueAt = new Date(rule.reviewDueAt);
      if (isNaN(reviewDueAt.getTime()) || reviewDueAt < now) {
        console.error(`Error: Rule ${rule.ruleId} is overdue for review or invalid date! (Due: ${rule.reviewDueAt})`);
        hasErrors = true;
      }
    }

    // 2. Check required fields
    for (const field of requiredFields) {
      if (!(field in rule) || rule[field as keyof typeof rule] === undefined) {
        console.error(`Error: Rule ${rule.ruleId} is missing required field: ${field}`);
        hasErrors = true;
      }
    }
  }

  if (hasErrors) {
    console.error('Validation failed. Some rules are invalid or overdue.');
    process.exit(1);
  } else {
    console.log(`Successfully verified ${DISCORD_RULES.length} Discord rules.`);
    process.exit(0);
  }
}

verifyRules();
