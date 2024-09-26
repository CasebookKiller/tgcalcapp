# [Шаблон управления базой пользователей на React c Supabase](https://github.com/jlumbroso/supabase-react-example)

В этом примере вы сможете увидеть очень распространенную ситуацию: пользователи могут зарегистрироваться с помощью волшебной ссылки, а затем обновить свою учетную запись, добавив общедоступную информацию о профиле, включая изображение профиля.

В примере демонстрируется, как использовать:

- Регистрация пользователей с использованием Supabase [Auth](https://supabase.com/auth).
- Загрузку аватаров пользователей с использованием Supabase [Storage](https://supabase.com/storage).
- Общедоступные профили, ограниченные [Политиками](https://supabase.com/docs/guides/auth#policies).
- Клиентскую часть с использованием [Create React App](https://reactjs.org/docs/create-a-new-react-app.html).
- Развертывание с использованием [GitHub Actions](https://docs.github.com/en/actions) + хостинг с использлванием [GitHub Pages](https://pages.github.com/).

_Этот пример изначально [взят из Supabase developers](https://github.com/supabase/supabase/tree/master/examples/user-management/react-user-management) и был адаптирован [**@jlumbroso**](https://github.com/jlumbroso) для компиляции с помощью GitHub Actions и развертывания на GitHub Pages, чтобы его можно было превратить в [GitHub Template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository)._

## Используемые Технологии

- Клиентская часть:
  - [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) - набор инструментов React.
  - [Supabase.js](https://supabase.com/docs/library/getting-started) для управления пользователями и синхронизации данных в режиме реального времени.
- Серверная часть:
  - [app.supabase.com](https://app.supabase.com/): размещенная база данных Postgres с restful API для использования с Supabase.js.
- Развертывание:
  - Код скомпилирован с помощью [GitHub Actions](https://docs.github.com/en/actions) с использованием непрерывной интеграции с `.github/workflows`.
  - Веб-сайт размещен на [GitHub Pages](https://pages.github.com/) в версии, доступной в ветке `gh-pages`.

## Создание своей собственной копии этого проекта

### 1. Создание своего экземпляра репозитория

Репозиторий `jlumbroso/supabase-react-example` - это шаблон, и вы можете [создать свой репозиторий](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) из него.

Обратите внимание, что исходный репозиторий будет содержать этот проект, но поскольку секретные данные еще не настроены, развертывание либо завершится полным сбоем, либо приведет к неработоспособности веб-сайта. Этого следует ожидать, и это будет устранено на следующих этапах.

### 2. Создание нового проекта Supabase

Зарегистрируйтесь в Supabase - [https://app.supabase.com](https://app.supabase.com) и создайте новый проект. Подождите пока база данных будет готова к использованию.

### 3. Запустите "User Management" Quickstart (Быстрый запуск)

Как только ваша база данных будет запущена, перейдите в `SQL Editor` вашего проекта и запустите Быстрый запуск "User Management Starter". На странице `SQL editor` прокрутите вниз, пока не увидите `User Management Starter: Sets up a public Profiles table which you can access with your API`. Нажмите на нее, затем нажмите `RUN`, чтобы выполнить этот запрос и создать новую таблицу `profiles`. Когда вы закончите, перейдите в `Table Editor` и просмотрите свою новую таблицу `profiles`.

### 4. Получите URL-адрес и Ключ

Перейдите в настройки проекта (значок шестеренки), откройте вкладку API и найдите свой URL API и ключ `anon`, они понадобятся вам на следующем шаге.


Ключ `anon` - это ваш API-ключ на стороне клиента. Он обеспечивает "анонимный доступ" к вашей базе данных до тех пор, пока пользователь не выполнит вход в систему. Как только пользователь выполнит вход, ключи будут заменены на собственный токен входа пользователя. Это обеспечивает защиту ваших данных на уровне строк. Подробнее об этом читайте [ниже](#postgres-row-level-security).

![image](https://user-images.githubusercontent.com/10214025/88916245-528c2680-d298-11ea-8a71-708f93e1ce4f.png)

**_NOTE_**: The `service_role` key has full access to your data, bypassing any security policies. These keys have to be kept secret and are meant to be used in server environments and never on a client or browser.

### 5. Configure the secrets (and environment variables)

In the previous steps, you created a Supabase project with a database, and you created a `profiles` table. You also got the URL and key for your project. These are now going to be provided as configuration to the project.

For cloud deployment: Create [encrypted secrets for your repository](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository), using the following names:

- `REACT_APP_SUPABASE_URL` for the URL of your project.
- `REACT_APP_SUPABASE_ANON_KEY` for the `anon` key of your project.

### 6. Turn on GitHub Pages

In the repository settings, go to the `Pages` section, and [select the `gh-pages` branch as the source for the GitHub Pages website](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch). This will be the branch where the compiled code will be deployed.

### 7. Trigger the first deployment

Now that the secrets are configured, the first deployment will be triggered. This will take a few minutes, and you can check the progress in the `Actions` tab of the repository.

## Local development

If you ever want to locally develop this project, you can do so by following these steps.

### 1. Clone the repository

```bash
git clone https://github.com/<your username>/<your repository name>
```

### 2. Create the `.env` file

Inside the cloned repository, create a file `.env.local` with the following:

```
REACT_APP_SUPABASE_URL=
REACT_APP_SUPABASE_ANON_KEY=
```

where you complete the values with the URL and key of your project.

### 3. Install the dependencies of the project

This step will require that you have [some recent version of Node.js locally installed](https://nodejs.org/en/).

```bash
npm install
```

### 4. Run the project

```bash
npm run start
```

then open your browser to `https://localhost:3000/` and you are ready to go 🚀.

## Supabase details

### Postgres Row level security

This project uses very high-level Authorization using Postgres' Role Level Security.
When you start a Postgres database on Supabase, we populate it with an `auth` schema, and some helper functions.
When a user logs in, they are issued a JWT with the role `authenticated` and their UUID.
We can use these details to provide fine-grained control over what each user can and cannot do.

This is a trimmed-down schema, with the policies:

```sql
-- Create a table for Public Profiles
create table profiles (
  id uuid references auth.users not null,
  updated_at timestamp with time zone,
  username text unique,
  avatar_url text,
  website text,
  primary key (id),
  unique(username),
  constraint username_length check (char_length(username) >= 3)
);
alter table profiles enable row level security;
create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );
create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );
create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );
-- Set up Realtime!
begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime;
commit;
alter publication supabase_realtime add table profiles;
-- Set up Storage!
insert into storage.buckets (id, name)
values ('avatars', 'avatars');
create policy "Avatar images are publicly accessible."
  on storage.objects for select
  using ( bucket_id = 'avatars' );
create policy "Anyone can upload an avatar."
  on storage.objects for insert
  with check ( bucket_id = 'avatars' );
```

## Авторы

- [Supabase](https://supabase.com)
- [@jlumbroso](https://www.github.com/jlumbroso)

Supabase имеет открытый исходный код. Мы будем рады, если вы присоединитесь к нам и примете участие в https://github.com/supabase/supabase

## И
[Deploy React App Using Github Actions](https://dev.to/achukka/deploy-react-app-using-github-actions-157d)
