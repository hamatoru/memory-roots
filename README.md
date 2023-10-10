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

