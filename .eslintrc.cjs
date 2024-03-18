module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    // "plugin:react/recommended",
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
    // 'unused-imports'
  ],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    '@typescript-eslint/no-explicit-any': 'off' //关闭any类型警告
    // 'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    // 'unused-imports/no-unused-imports': 'error',
    // 'unused-imports/no-unused-vars': [
    //   'warn',
    //   {
    //     vars: 'all',
    //     varsIgnorePattern: '^_',
    //     args: 'after-used',
    //     argsIgnorePattern: '^_'
    //   }
    // ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
