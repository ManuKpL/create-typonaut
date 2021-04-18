module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-env'],
  plugins: [
    '@babel/plugin-transform-typescript',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    ['module-resolver', { alias: { '@src': './src' } }],
  ],
};
