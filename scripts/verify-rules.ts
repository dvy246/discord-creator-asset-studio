import { discordRules } from '../src/data/discord-rules.ts';

function verifyRules() {
  const now = new Date();
  let hasErrors = false;

  for (const rule of discordRules) {
    // 1. Check if required fields are missing
    if (!rule.id || !rule.name || !rule.dimensions || !rule.maxFileSizeBytes || !rule.formats || !rule.status || !rule.reviewDueAt) {
      console.error(`[Error] Rule "${rule.id || 'unknown'}" is missing required fields.`);
      hasErrors = true;
    }

    // 2. Check if dimensions are valid
    if (!rule.dimensions.width || !rule.dimensions.height) {
      console.error(`[Error] Rule "${rule.id}" has invalid dimensions.`);
      hasErrors = true;
    }

    // 3. Check if reviewDueAt has passed
    const reviewDate = new Date(rule.reviewDueAt);
    if (isNaN(reviewDate.getTime())) {
      console.error(`[Error] Rule "${rule.id}" has an invalid reviewDueAt date: ${rule.reviewDueAt}`);
      hasErrors = true;
    } else if (reviewDate < now) {
      console.error(`[Error] Rule "${rule.id}" review due date has passed (${rule.reviewDueAt}). Please verify the rule against Discord documentation and update the date.`);
      hasErrors = true;
    }
  }

  if (hasErrors) {
    console.error('\nVerification failed. Please fix the errors above.');
    process.exit(1);
  } else {
    console.log('All discord rules verified successfully.');
    process.exit(0);
  }
}

verifyRules();
