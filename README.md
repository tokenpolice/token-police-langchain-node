# token-police-langchain

The **LangChain companion** for the [TokenPolice](https://www.npmjs.com/package/token-police) Node.js
SDK. Install it alongside `token-police` to capture tokens for LangChain apps.

```bash
npm install token-police token-police-langchain
```

That's it — there's **no API to call**. `token-police`'s `init()` detects this package automatically
and starts capturing LangChain calls:

```typescript
import * as tp from 'token-police';

tp.init({
  // apiKey: 'tp_sk_...',   // or set TOKENPOLICE_API_KEY
  firewall: 'dry_run',      // watch first; 'enforce' when your rules look right
});
// LangChain calls (OpenAI / Anthropic / Google, etc.) are now tracked & enforced.
```

Everything else — sessions, rules, blocked calls — is configured through `token-police`; see its
[README](https://www.npmjs.com/package/token-police) and the
[LangChain integration guide](https://tokenpolice.ai/docs/integrations/langchain).

## Why a separate package?

LangChain support pulls in a comparatively heavy dependency tree, so it's kept **opt-in** rather
than bundled into the base `token-police` install. Apps that don't use LangChain pay nothing;
LangChain apps add this one package and get full capture.

`token-police` (>= 1.0.0) is a peer dependency — install both.

## Supported LangChain versions

`@langchain/core` **0.3.x and 1.x** (tested with `langchain` 0.3 and `@langchain/langgraph` 1.x).
The package declares `@langchain/core >=0.3.0 <2.0.0` as an optional peer dependency, so no
package manager can fail an install on it.

On `@langchain/core` 0.3, **pnpm** may print an unmet-peer warning from a bundled dependency. It is
expected and safe — token capture works on 0.3 exactly as on 1.x. npm prints nothing.

## Requirements

- Node.js >= 20
- `token-police` >= 1.0.0

## Support

- Docs: [tokenpolice.ai/docs](https://tokenpolice.ai/docs)
- Issues: [github.com/tokenpolice/token-police-langchain-node/issues](https://github.com/tokenpolice/token-police-langchain-node/issues)
- Email: [support@tokenpolice.ai](mailto:support@tokenpolice.ai)

## License

Apache-2.0
