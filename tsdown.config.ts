import { defineConfig } from 'tsdown';

export default defineConfig({
  // Do not let tsdown rewrite `exports` on build: with ESM-only output it emits a
  // string entry for "." and omits `types`, which breaks TS under `moduleResolution`
  exports: false,
  entry: {
    index: 'src/index.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  unbundle: true,
  target: 'esnext',
  external: ['lodash', 'type-fest'],
});
