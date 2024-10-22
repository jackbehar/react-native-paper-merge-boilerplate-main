module.exports = {
  components: {
    categories: [
      {
        name: 'Test',
        include: [
          'src/components/Button/Button.tsx',
          'src/components/TextInput/TextInput.tsx',
        ],
      },
    ],
    webpackConfig: 'webpack.config.js',
    wrapper: 'src/components/UXPinWrapper.tsx',
  },
  name: 'React-Bootstrap-UXPin-Merge',
}
