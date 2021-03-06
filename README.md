# 天気予報アプリケーション

React(Hooks)+TypeScriptの基礎学習のために、天気予報を表示する WEB アプリケーションを作成。

## デモ

![デモ](./demo01.png)

## 機能概要

- ページ表示時に現在地を取得
- 位置情報に基づき、現在・1 週間・24 時間（グラフ）の天気とマップを表示
- 任意の地域を検索可能

## API・ライブラリ
- 位置情報
  - [位置情報 API(Geolocation API)](https://developer.mozilla.org/ja/docs/Web/API/Geolocation_API)
- 天気情報
  - OpenWeather - [One Call API](https://openweathermap.org/api/one-call-api)
- マップ
  - OpenStreetMap
  - [React Leaflet](https://react-leaflet.js.org/)
- ジオコーディング、リバースジオコーディング
  - [Nominatim API](https://nominatim.org/release-docs/latest/api/Overview/)
- グラフ描画
  - [Recharts](https://recharts.org/en-US/)

## 使い方

1. このリポジトリをローカルへクローンします。

```bash
$ git clone https://github.com/IshigureTomoki/weather-app
```

2. 該当ディレクトリへ移動します。

```bash
$ cd weather-app
```

3. dependencies をインストールします。

```bash
$ yarn
```

4. アプリケーションを起動します。

```bash
$ yarn start
```
