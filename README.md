# nuxt-ts-todo-practice

> Nuxt.jsにTypeScriptを導入して簡単なTodoを作ってみる  
> 目的：Nuxt.jsを使ったベストな環境を模索する


## 環境セットアップ手順

[nuxt.js & TypeScriptセットアップの手順メモ](https://scrapbox.io/naotaro-studymemo/nuxt.js_&_TypeScript%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97%E3%81%AE%E6%89%8B%E9%A0%86%E3%83%A1%E3%83%A2)

## 参考記事
[【Nuxt.js】todoアプリを作成してみた①](https://qiita.com/ayapon/items/d93807e7699434279531)  
こちらの記事を参考にTodoアプリをTypeScript化しました


## 使用スタック
- Nuxt.js
- Vuex
- TypeScript
- Sass 
- Jest

## Build Setup

``` bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# Jest Test
$ yarn test

# Lint Fix
$ yarn lint

# storybook with hot reload at localhost:9001
$ yarn storybook

```

## storybook Run Error

2019/06/02現在
`yarn storybook` 実行時に `babel-preset-vue` エラーがでる。

[framework-preset-vue requires `babel-preset-vue` but does not depend on it #4475](https://github.com/storybookjs/storybook/issues/4475)

現状は、以下ファイルの `, require.resolve('babel-preset-vue')` 部分をDeleteすると実行できる。修正を待つしかない

@storybook/vue/src/server/framework-preset.vue.js  
@storybook/vue/dist/server/framework-preset.vue.js  

