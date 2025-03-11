# 3 курс
# Сысоева Елена Павловна
# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

# В проекте используется MVC паттерн:

Model - данные и логика приложения
View - отображение данных 
Controller - взаимодействие между Model и View

# API

Класс Api для работы с запросами:
get - обработка GET-запросов
post - обработка POST-запросов

# EventEmitter

Класс EventEmitter для обработки событий:
emit - инициирует событие
on - подписывает обработчик на событие
off - снимает обработчик с события
onAll - слушает все события
offAll - снимает все обработчики
trigger - создает коллбэк триггер

# Model:

OrderModel - представление заказа пользователя
CatalogModel - управление товарами внутри каталога
CartModel - управление товарами внутри корзины

# View:

ModalView - отображение модального окна
ProducItemtView - отображение карточки товара
ProductModalView - отображение товара в модальном окне
CatalogView - отображение каталога товаров
CartModalView - отображение корзины
OrdeModalrView - отображение заказа

# Types

IProductItem - данные о товаре:

```typescript
interface IProductItem {
      id: string,
      description: string,
      image: string,
      title: string,
      category: string,
      price: number
  }
```

IOrder - данные о заказе:

```typescript
interface IOrder {
    id: string;
    total: number,
    payment: "online" | "offline",
    deliveryAdress: string,
    items: IProductItem[],
    phone: string,
    email: string
  }
```

IProductList - список товаров:

```typescript
interface IProductList {
    totalNumber: number,
    items: IProductItem[]
}
```