// Vite 8's package.json exposes types only through its "exports" map, which
// classic Node moduleResolution (required here — this project's TypeScript,
// 4.9.5, doesn't support "bundler" resolution) cannot see, so `import ...
// from 'vite'` in vite.config.ts can't resolve on its own. This ambient
// declaration unblocks that import; skipLibCheck (see tsconfig.node.json)
// keeps other packages' own type-checking from cascading through vite's
// real (and, under this TS version, unparseable) internals.
declare module 'vite';
