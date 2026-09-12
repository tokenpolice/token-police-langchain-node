/**
 * TokenPolice — LangChain companion
 *
 * A thin, TokenPolice-branded wrapper around the OpenLLMetry LangChain
 * instrumentor. Install it alongside `token-police` to enable automatic
 * LangChain token capture:
 *
 * ```bash
 * npm install token-police token-police-langchain
 * ```
 *
 * There is no API to call — `token-police`'s `init()` auto-detects this
 * package and wires the instrumentor into its private OpenTelemetry pipeline.
 * It is kept as a separate, opt-in package so the heavier LangChain
 * instrumentation is not pulled into the base `token-police` install.
 *
 * The instrumentor is a direct dependency of THIS package, so `token-police`
 * resolves it by resolving `token-police-langchain` from the app — which works
 * even under pnpm / yarn-PnP, where the instrumentor would not hoist to the
 * app's top-level node_modules.
 */
// `LangChainInstrumentation` is the instrumentor `token-police` wires in.
// `TraceloopCallbackHandler` is re-exported so the base SDK can patch its
// `handleToolStart` to fix JS tool-span names — upstream names tool spans after
// the tool's serialization class (e.g. "DynamicStructuredTool") instead of the
// real tool name. See `patchLangChainToolNaming` in token-police.
export {
  LangChainInstrumentation,
  TraceloopCallbackHandler,
} from "@traceloop/instrumentation-langchain";
