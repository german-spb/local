# Проект облачное хранилище

## «MyCloud»


## Развёртывание проекта локально
Для развертывания проекта локально выполните следующие действия:
- Клонируйте репозиторий: 
``` 
$ git clone https://github.com/german-spb/storage.git
```
- Активируйте виртуальное окружение и устанавите зависимости: 
```
$ cd MyCloud/
$ python -m venv env 
$ source env/bin/activate (ubuntu)
(env) $ pip install -r requirements.txt
```
- Установите PostgreSQL. Создайте базу данных PostgreSQL.

- В корне проекта создать файл `.env` в котором установить переменные окружения: 
```
SECRET_KEY=секретный ключ django
DEBUG=режим отладки True или False
ALLOWED_HOSTS=допустимые хосты (например, для запуска локально укажите 127.0.0.1)
DB_NAME=имя базы данных (например: my_database)
DB_USER=имя пользователя базы данных (например: admin)
DB_PASSWORD=пароль для доступа к базе данных
DB_HOST=хост базы данных (например: localhost)
DB_PORT=порт базы данных (например: 5432)
```
- Выполнить миграции
```
(env) $ python manage.py makemigrations
(env) $ python manage.py migrate
```
- Перейти в директорию `frontend/` и установить NPM зависимости.
```
(env) $ npm install
```
- В файле `frontend/src/api/requests.js` в переменной `BASE_URL` установить url, на который будут отправлятся запросы на сервер. Например: `http://127.0.0.1:8000/api/`
Собрать бандл фронтенда
```
(env) $ npm run dev

```
- Собрать sтаtic-файлы
```
python manage.py collectstatic
```

- Запустить приложение.
```
(env) $ python manage.py runserver
```



