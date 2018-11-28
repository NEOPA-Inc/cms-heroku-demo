CMS on Heroku Demo app
====

## 概要
SalesforceをCMSの管理画面として利用するデモアプリです。

記事やニュースなどのWebコンテンツがHeroku上で稼働するWebサイトに即座に反映される仕組みです。
コンテンツの管理はすべてSalesforceで行います。

## 必要な環境

- Salesforce環境
- Herokuアカウント

## セットアップ方法

1. Salesforceにカスタムオブジェクトを作成する

下記のURLからSalesforceにパッケージをインストールする

>組織にパッケージをインストールするには、次の URL を使用します:
https://login.salesforce.com/packaging/installPackage.apexp?p0=04t7F000005EqKj

>注: Sandbox 組織にインストールする場合は、URL の最初の部分を http://test.salesforce.com に置き換える必要があります。

2. Herokuにアプリを作成して、`Heroku Postgres`と`Heroku connect`をプロビジョンする

```sh
$ heroku create <app name>
$ heroku addons:create heroku-postgresql:hobby-dev --app <app name>
$ heroku addons:create herokuconnect --app <app name>
```

3. Heroku connectを設定する  
 1.で作成したSalesforce組織に対して、接続設定を行い、`information__c`をマッピングする。  
 ※接続設定時にDBのスキーマ名は`public`にする

4. Herokuにデプロイする
```sh
$ heroku git:remote -a <app name>
$ git push heroku master
```

5. Herokuアプリにアクセスする
Salesforceの`お知らせ`オブジェクトにコンテンツを登録すると、即座にWebアプリ側に反映されます。

## ライセンス

[Apache License 2.0](https://github.com/NEOPA-Inc/cms-heroku-demo/blob/master/LICENSE)
