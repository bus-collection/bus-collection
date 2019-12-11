# バスコレ (Bus Collection)

## 環境構築

### ローカルを利用する方

node.js を 公式サイトからinstallしてきてください。

```sh
# 環境構築 (一回すればok)
npm i

# ブラウザで閲覧
npm run serve
```


### dockerをご利用の方

```sh
# コンテナの起動 (時間がとてもかかります)
make up # または docker-compose up -d

# shell
make bash # または docker-compose exec bus_collection sh

# 環境構築 (一回すればok)
npm i

# ブラウザで閲覧
npm run serve

# 終了
make down # または docker-compose down
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
