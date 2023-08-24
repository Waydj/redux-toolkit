# Веб-приложение для продажи самолетов

Это приложение представляет собой платформу для продажи и просмотра информации о самолетах. Оно разработано с использованием технологий Express, MongoDB, React и Redux Toolkit.

## Основные особенности

- Серверная часть: Вся бизнес-логика и взаимодействие с базой данных реализованы с использованием фреймворка Express и базы данных MongoDB. REST API предоставляет возможность выполнять запросы на получение списка всех самолетов, получение информации о конкретном самолете и создание новых объявлений о продаже.

- Клиентская часть: Интерфейс приложения построен на базе библиотеки React, а для управления состоянием используется библиотека Redux Toolkit. Пользователи могут просматривать список доступных самолетов, просматривать детали каждого самолета и создавать новые объявления.

- Маршрутизация: Для обеспечения плавной навигации по приложению используется React Router. Это позволяет пользователям легко перемещаться между страницами списка самолетов, страницей деталей самолета и страницей создания нового объявления.

## Запуск проекта

1. Убедитесь, что у вас установлен Node.js и npm.
2. Склонируйте этот репозиторий на свой локальный компьютер.
3. Перейдите в корневую папку проекта и выполните команду `npm install`, чтобы установить зависимости.
4. Выполните команду `npm run dev` с использованием пакета Concurrently, чтобы одновременно запустить серверную и клиентскую части приложения.