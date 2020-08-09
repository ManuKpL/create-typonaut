module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-env'],
  plugins: [
    '@babel/plugin-transform-typescript',
    '@babel/plugin-transform-runtime',
    ['module-resolver', { alias: { '@root': './src' } }],
  ],
};
