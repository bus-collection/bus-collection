# バスコレ (Bus Collection)

## 環境構築

### ローカルをご利用の方

node.js を 公式サイトからinstallしてきてください。  
[https://nodejs.org/ja/](https://nodejs.org/ja/)

```sh
# 環境構築 (一回すればok)
npm i

# ブラウザで閲覧 (コンパイルもしてます)
npm run serve
```


### dockerをご利用の方

docker を 公式サイトからinstallしてきてください。  
[https://www.docker.com/](https://www.docker.com/)

```sh
# コンテナの起動 (時間がとてもかかります)
make up # または docker-compose up -d

# shell
make bash # または docker-compose exec bus_collection sh

# 環境構築 (一回すればok)
npm i

# ブラウザで閲覧 (コンパイルもしてます)
npm run serve

# 終了
make down # または docker-compose down
```

## ビルド

```sh
npm run build
```

## デプロイ
デプロイ先はGAE

```sh
make deploy
```

## 環境について

### 土台となるもの
- Node.js
- Babel
- Vue.js
- TypeScript

### Vue.jsのライブラリ
- Vuex
- Vue Router

### スタイル
- Sass

### 開発をしやすくする コードを綺麗に
- Eslint
- Prettier
