# バスコレ (Bus Collection)

デモサイト：[https://bus-collect.appspot.com/](https://bus-collect.appspot.com/)

## 環境構築

### ソースコードの取得

#### git をご利用の方

```sh
# ソースコードを持ってくる
git clone https://github.com/bus-collection/bus-collection.git
# プロジェクトフォルダに移動
cd bus-collection
```

#### git をご利用でないの方

```sh
# ソースコードを持ってくる
https://github.com/bus-collection/bus-collection から zipフォルダでダウンロードする
zipフォルダを解凍
解凍したフォルダに移動
```

### アプリの起動方法

#### ローカルをご利用の方

node.js を 公式サイトからinstallしてきてください。  
[https://nodejs.org/ja/](https://nodejs.org/ja/)

```sh
# 環境構築 (一回すればok)
npm i

# ブラウザで閲覧 (コンパイルもしてます)
npm run serve
```


#### dockerをご利用の方

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
- Node.js (全てを動かす土台)
- Babel (JavaScriptとTypeScriptをトランスパイル)
- Vue.js (Viewerを綺麗に作成できるライブラリ)
- TypeScript (JavaScriptに型を付けてくれるもの)

### Vue.jsのライブラリ
- Vuex (Vue.jsのstateを管理)
- Vue Router (Vue.jsのurlを管理)

### スタイル
- Sass (CSSを拡張)

### 開発をしやすくする コードを綺麗に
- Eslint (コードの書き方を指摘)
- Prettier (コードを綺麗にする)
