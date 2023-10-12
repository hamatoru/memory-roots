# アプリケーション名
Memory-Roots

# アプリケーション概要
世年月日を入力すると、人生で行われる行事までの日程が一目でわかる。

# URL
https://memory-roots.onrender.com

# テスト用アカウント
・ Basic認証ID         : huga<br>
・ Basic認証パスワード : 111<br>
・ メールアドレス      : sample@aaa.com<br>
・ パスワード          : aaa111<br>

# 利用方法
## 行事表示
1.トップページから生年月日を入力<br>
2.行事の計算ボタンを押す<br>
3.タブの切り替えによって、行事一覧を変更可能<br>

## ユーザー機能
1.トップページから新規登録を行う<br>
2.登録後、グーグルカレンダーの利用や、ユーザー名を押すことによりユーザー詳細ページに遷移する<br>

# アプリケーションを作成した背景
自分の妻に課題をヒアリングし、「子供が生まれてからの行事の管理が大変だ」という課題を抱えていることが判明した。課題を分析した結果、「子供の生年から、行事までの具体的な日がいつにあるのかがわからない」ということが真因であると仮説を立てた。<br>
同様の問題を抱えている方も多いと推測し、真因を解決するために、世年月日を入力すると、人生で行われる行事までの日程が一目でわかるアプリケーションを作成した。

# 洗い出した要件
[要件定義したシート](https://docs.google.com/spreadsheets/d/1ywLhafZv6jgLBjx8yjoqNwrP1wDCsgX9V_QW6kk-UpM/edit#gid=1785908763)

# 実装した機能についての画像やGIFおよびその説明
生年月日を入力すると、入力内容に応じた行事一覧が計算されて表示される。
[![Image from Gyazo](https://i.gyazo.com/0a8df933e17d939cac38da515a5e7b92.gif)](https://gyazo.com/0a8df933e17d939cac38da515a5e7b92)

# 実装予定の機能
現在、各行事に写真を添付できる機能を実装中。<br>
今後は、他のユーザー同士で交流できるSNSのような共有機能を実装予定。

---
# テーブル設計
## users テーブル

| Column             | Type   | Options                   |
| ------------------ | ------ | ------------------------- |
| nickname           | string | null: false               |
| email              | string | null: false, unique: true |
| encrypted_password | string | null: false               |
| profile            | string | null: false               |

### Association

- has_many :Events
- has_many :photos

## Events テーブル

| Column                | Type       | Options                        |
| ------------------    | ---------- | ------------------------------ |
| title                 | string     | null: false                    |
| user                  | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- has_one   :photo

## Photos テーブル

| Column           | Type       | Options                        |
| ---------------- | ---------- | ------------------------------ |
| user             | references | null: false, foreign_key: true |
| event            | references | null: false, foreign_key: true |

### Association

- has_one :favorite
- belongs_to :user
- belongs_to :event

## Favorites テーブル

| Column           | Type          | Options                         |
| ---------------- | ------------- | ------------------------------- |
| favorite         | string        | null: false                     |
| comment          | string        | null: false                     |

### Association

- belongs_to :photo
---

# データベース設計
[![Image from Gyazo](https://i.gyazo.com/6b352c4e69a491cae3ae49a2a4eb4988.png)](https://gyazo.com/6b352c4e69a491cae3ae49a2a4eb4988)

# 画面遷移図
[![Image from Gyazo](https://i.gyazo.com/7776855581b7a9de87bad139ed8ec6cf.png)](https://gyazo.com/7776855581b7a9de87bad139ed8ec6cf)

# 開発環境
・ フロントエンド<br>
・ バックエンド<br>
・ テスト<br>
・ テキストエディタ<br>
・ タスク管理<br>

# 工夫したポイント
・ 一目で見やすい、すっきりしたデザイン<br>
・ 人生で体験する行事を、タブ切り替えでざっくりとわけた<br>
・ ユーザー登録した人のみ、グーグルアカウントで簡単に行事管理ができる<br>