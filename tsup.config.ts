import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    'index': 'src/index.ts',
    'constants/index': 'src/constants/index.ts',
    'types/index': 'src/types/index.ts',
    'types/utils/index': 'src/types/utils/index.ts',
    'utils/index': 'src/utils/index.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  splitting: false,
  treeshake: true,
  external: ['lodash'],
})
