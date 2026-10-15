## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Deployment Guardrails

- **NEVER deploy without explicit user permission:** Never execute `npm run deploy`, `wrangler pages deploy`, or any production publishing commands unless the user explicitly and directly instructs you to deploy in their current prompt.
- **Turn Isolation:** Do NOT carry forward deployment instructions from prior turns. Treat each task as strictly local-only unless explicit deployment approval is provided for that specific turn.
- **Stop at Local Verification:** Always complete work by running local tests (`npm test`) and verifying the build (`npm run build`). Once verified, report the local status, present the changes, and wait for explicit user confirmation before deploying.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
