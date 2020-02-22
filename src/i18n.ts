import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources: any = {
  ru: {
    translation: {
      "Главная": "Home",
      "Контакты": "Contacts",
      "Карта Сайта": "Site map",
      "Войти": "Log in",
      "Язык": "Language",
      "Валюта": "Currency",
      "Название продукта": "Product name",
      "Пусто": "Empty",
      "Поиск": "Search",
      "Корзина": "Cart",
      "Просмотр корзины": "Show goods",
      "Купить сейчас": "Shop now",
      "Больше мощности за каждым пикселем.": "More power behind every pixel.",
      "Лёгкий. На годы вперед.": "Light. Years ahead.",
      "Ретина. Огромная и гармоничная.": "Retina. Now in colossal and ginormous.",
      "Мы всегда стремились изменить представление о том, каким должен быть настольный компьютер. Поэтому iMac объединяет в своём тонком корпусе самые продвинутые и одновременно простые в использовании технологии. Новый iMac идёт на очередной рекорд и расширяет границы возможного. Более быстрые процессоры и память, потрясающая графика и дисплей Retina с самым ярким и реалистичным изображением в истории Mac. iMac стал мощнее — во всех отношениях.":
      `The vision behind iMac has never wavered: Transform the desktop experience by fitting powerful, 
      easy-to-use technology into an elegant, all-in-one design. The new iMac takes that idea to the next level — 
      giving you even more amazing tools to do just about anything. iMac is packed with the latest processors, 
      faster memory, and phenomenal graphics. All coming to life on the brightest, most vibrant Retina display ever on a Mac. 
      It’s the total package — powered up.`,
      "Новый MacBook Pro — наш самый мощный ноутбук, созданный для тех, кто меняет мир и раздвигает границы. Впечатляющий дисплей Retina 16 дюймов, невероятно быстрый процессор, графическая карта нового поколения, самый высокий ресурс аккумулятора для MacBook Pro, новая клавиатура Magic Keyboard и вместительный накопитель — это лучший профессиональный ноутбук для самых серьёзных профессионалов.":
      `Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook 
      we’ve ever made. With an immersive 16-inch Retina display, superfast processors, next-generation graphics, 
      the largest battery capacity ever in a MacBook Pro, a new Magic Keyboard, and massive storage, it’s the 
      ultimate pro notebook for the ultimate user.`,
      "Любимый всеми Mac, в который можно легко влюбиться заново. Ещё более тонкий и лёгкий, новый MacBook Air оснащён дисплеем Retina с технологией True Tone, Touch ID, клавиатурой последнего поколения и трекпадом Force Touch. Представлен в трёх цветах — серебристом, золотом и «серый космос». Это самый экологичный Mac. Сохранив его культовый дизайн, мы использовали для корпуса только переработанный алюминий. И это невероятно удобный MacBook Air — он работает весь день без подзарядки и может справиться с любыми задачами.":
      `The most loved Mac is about to make you fall in love all over again. Available in silver, space gray, and gold, the new thinner and lighter MacBook Air features a brilliant Retina display with True Tone technology, Touch ID, the latest-generation keyboard, and a Force Touch trackpad. The iconic wedge is created from 100 percent recycled aluminum, making it the greenest Mac ever.1 And with all-day battery life, MacBook Air is your perfectly portable, do-it-all notebook.`,
      "Новые поступления": "New Arrivals",
      "Ноутбуки": "Laptops",
      "Планшеты": "Tablets",
      "Аксессуары": "Accessories",
      "Блог": "Blog",
      "Список желаемого": "My Whishlist",
      "Добро пожаловать в наш онлайн магазин": "Welcome to our online store",
      "Популярные товары": "Popular products",
      "В корзину": "In cart",
      "Добавить в избранное": "Add in favorite",
      "Добавить в сравнение": "Add to compare",
      "Новинка": "New",
      "Информация": "Information",
      "Скидки": "Discounts",
      "Новые товары": "New products",
      "Cвяжитесь с нами": "Contact with us",
      "О нас": "About us",
      "Категории": "Categories",
      "Моя учетная запись": "My profile",
      "Мои заказы": "My orders",
      "Мои платежные квитанции": "My payments",
      "Мои возвраты": "My returns",
      "Мои адресса": "My addresses",
      "Моя личная информация": "My personal information",
      "Контактная информация": "Contact information",
      "Звоните нам": "Call"
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;