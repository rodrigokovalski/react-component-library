module.exports = {
    root: true, 
    parser: "@babel/eslint-parser",
    parserOptions: {
      ecmaVersion: 2021, 
      sourceType: 'module', 
      ecmaFeatures: {
        jsx: true 
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    env: {
      jest: true,
      es6: true,
      browser: true, 
      amd: true, 
      node: true 
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended'
    ],
    plugins: [
        "react"
    ],
    rules: {
      'no-unused-vars': 'off',
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      'react/jsx-uses-react': "error",   
      'react/jsx-uses-vars': "error"
    },
    ignorePatterns: [
        "**/*.spec.ts",
        "**/*.spec.tsx",
        "**/*.d.ts",
        "rollup.config.mjs",
        "**/*.stories.ts",
        "**/*.stories.tsx",        
    ] 
}