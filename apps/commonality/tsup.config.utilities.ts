import { Options } from 'tsup';

const config: Options = {
  entryPoints: ['src/index.ts'],
  format: ['esm'],
  platform: 'node',
  outDir: './dist/utilities',
  noExternal: [/^@commonalityco\/.*/],
  dts: {
    resolve: true,
  },
};

export default config;
