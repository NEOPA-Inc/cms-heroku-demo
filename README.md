CMS on Heroku
====

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/NEOPA-Inc/cms-heroku-demo)  

## 概要
Salesforceでコンテンツ管理（CMS）が簡単にできるWebアプリです。記事やニュースなどのコンテンツをSalesforceで編集すると、Heroku上で稼働するWebアプリに即座に反映されます。Salesforceのデータを用いた会員アプリやECサイトを構築する際に、簡単なCMS機能が必要となることがよくあります。このアプリはそのようなケースに簡単にCMSを導入することができます。

## 必要な環境

- Salesforce環境
- Herokuアカウント

## セットアップ方法

### 1.Salesforceの非管理パッケージをインストールする

[こちら](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t7F000005EqKj)からSalesforceにパッケージをインストールします

### 2.Herokuにアプリを作成して、`Heroku Postgres`と`Heroku connect`をプロビジョンする

```sh
$ heroku create <app name>
$ heroku addons:create heroku-postgresql:hobby-dev --app <app name>
$ heroku addons:create herokuconnect --app <app name>
```

### 3.Heroku connectを設定する  
 1.で作成したSalesforce組織に対して接続設定を行い、`information__c`をマッピングする。  
 ※接続設定時にDBのスキーマ名は`public`にする
 ※Heroku connectの設定は[こちら](https://raw.githubusercontent.com/NEOPA-Inc/cms-heroku-demo/master/cms-heroku-demo_public.json)


### 4.Herokuにデプロイする
```sh
$ heroku git:remote -a <app name>
$ git push heroku master
```

### 5.Herokuアプリにアクセスする  
Salesforceの`お知らせ`オブジェクトにコンテンツを登録すると、即座にWebアプリ側に反映されます。

## ライセンス

[Apache License 2.0](https://github.com/NEOPA-Inc/cms-heroku-demo/blob/master/LICENSE)
