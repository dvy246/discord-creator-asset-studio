import { DISCORD_RULES } from '../src/data/discord-rules.ts';

function verifyRules() {
  let hasErrors = false;
  const now = new Date();

  const requiredFields = [
    'ruleId',
    'assetType',
    'constraint',
    'operator',
    'formats',
    'gate',
    'verifiedAt',
    'confidence',
    'reviewDueAt',
    'copyKey',
  ];

  for (const rule of DISCORD_RULES) {
    // 1. Check reviewDueAt
    const reviewDueAt = new Date(rule.reviewDueAt);
    if (reviewDueAt < now) {
      console.error(`Error: Rule ${rule.ruleId} is overdue for review! (Due: ${rule.reviewDueAt})`);
      hasErrors = true;
    }

    // 2. Check required fields
    for (const field of requiredFields) {
      if (rule[field as keyof typeof rule] === undefined) {
        console.error(`Error: Rule ${rule.ruleId} is missing required field: ${field}`);
        hasErrors = true;
      }
    }
    
    // Value can be null for constraint like file-types but it should be defined
    if (rule.value === undefined) {
      console.error(`Error: Rule ${rule.ruleId} value is undefined.`);
      hasErrors = true;
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
