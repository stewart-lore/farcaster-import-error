This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

open http://localhost:3000 and you will see this error:

```
 Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/farcaster-test/node_modules/.pnpm/@farcaster+frame-sdk@0.0.45_typescript@5.0.2/node_modules/@farcaster/frame-sdk/dist/sdk' imported from /farcaster-test/node_modules/.pnpm/@farcaster+frame-sdk@0.0.45_typescript@5.0.2/node_modules/@farcaster/frame-sdk/dist/index.js
    at finalizeResolution (node:internal/modules/esm/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:860:10)
    at defaultResolve (node:internal/modules/esm/resolve:984:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:685:12)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:634:25)
    at ModuleLoader.getModuleJobForRequire (node:internal/modules/esm/loader:384:53)
    at new ModuleJobSync (node:internal/modules/esm/module_job:341:34)
    at ModuleLoader.importSyncForRequire (node:internal/modules/esm/loader:357:11)
    at loadESMFromCJS (node:internal/modules/cjs/loader:1385:24)
    at Module._compile (node:internal/modules/cjs/loader:1536:5)
    at Object..js (node:internal/modules/cjs/loader:1706:10)
    at Module.load (node:internal/modules/cjs/loader:1289:32)
    at Function._load (node:internal/modules/cjs/loader:1108:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///farcaster-test/node_modules/.pnpm/@farcaster+frame-sdk@0.0.45_typescript@5.0.2/node_modules/@farcaster/frame-sdk/dist/sdk'
}
 GET / 500 in 17m
```
