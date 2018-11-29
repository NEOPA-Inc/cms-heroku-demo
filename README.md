CMS on Heroku Demo app
====

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/NEOPA-Inc/cms-heroku-demo)  

## 概要
SalesforceをCMSの管理画面として利用するデモアプリです。

記事やニュースなどのWebコンテンツがHeroku上で稼働するWebサイトに即座に反映される仕組みです。
コンテンツの管理はすべてSalesforceで行います。

## 必要な環境

- Salesforce環境
- Herokuアカウント

## セットアップ方法

### Salesforceの非管理パッケージをインストールする

[こちら](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t7F000005EqKj)からSalesforceにパッケージをインストールします

### Herokuにアプリを作成して、`Heroku Postgres`と`Heroku connect`をプロビジョンする

```sh
$ heroku create <app name>
$ heroku addons:create heroku-postgresql:hobby-dev --app <app name>
$ heroku addons:create herokuconnect --app <app name>
```

### Heroku connectを設定する  
 1.で作成したSalesforce組織に対して接続設定を行い、`information__c`をマッピングする。  
 ※接続設定時にDBのスキーマ名は`public`にする
 ※Heroku connectの設定は[こちら](https://raw.githubusercontent.com/NEOPA-Inc/cms-heroku-demo/master/crm-heroku-demo_public.json)


### Herokuにデプロイする
```sh
$ heroku git:remote -a <app name>
$ git push heroku master
```

### Herokuアプリにアクセスする  
Salesforceの`お知らせ`オブジェクトにコンテンツを登録すると、即座にWebアプリ側に反映されます。

## ライセンス

[Apache License 2.0](https://github.com/NEOPA-Inc/cms-heroku-demo/blob/master/LICENSE)
