import { defineConfig } from 'tsdown';

export default defineConfig({
  exports: true,
  entry: {
    index: 'src/index.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  unbundle: true,
  target: 'esnext',
  external: ['type-fest'],
});
