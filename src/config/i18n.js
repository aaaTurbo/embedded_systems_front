import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    language: "Eng",
                    cardsTable: {
                        tag: "Users and Cards",
                        name: "Name",
                        delete: "Delete"
                    },
                    eventsTable: {
                        tag: "Events",
                        name: "Name",
                        event: "Event",
                        dt: "DT"
                    },
                    controls: {
                        tag: "Controls"
                    },
                    addForm: {
                        tag: "Add card and user",
                        name: "Name",
                        id: "ID",
                        submit: "Submit"
                    },
                    faq: {
                        developed: "Developed by: ",
                        anton: "Semenov Anton P3314",
                        and: " and ",
                        vlad: "Andreev Vladislav P3319",
                        period: " Spring/winter 2024-2025 ITMO, Embedded systems"
                    },
                    event: {
                        entered: "Entered",
                        left: "Left"
                    },
                    app: {
                        notAuthenticated: "You are not authenticated",
                        login: "Sign in",
                        logout: "Sign out"
                    }
                }
            },
            ru: {
                translation: {
                    language: "Ru",
                    cardsTable: {
                        tag: "Пользователи и карты",
                        name: "Имя",
                        delete: "Удалить"
                    },
                    eventsTable: {
                        tag: "События",
                        name: "Имя",
                        event: "Событие",
                        dt: "ДВ"
                    },
                    controls: {
                        tag: "Управление"
                    },
                    addForm: {
                        tag: "Добавить пользователя и карту",
                        name: "Имя",
                        id: "ID",
                        submit: "Подтвердить"
                    },
                    faq: {
                        developed: "Разработали: ",
                        anton: "Семенов Антон P3314",
                        and: " и ",
                        vlad: "Андреев Владислав P3319",
                        period: " Весна/зима 2024-2025 ИТМО, Встроенные системы"
                    },
                    event: {
                        entered: "Вошел",
                        left: "Вышел"
                    },
                    app: {
                        notAuthenticated: "Вы не авторизиованы",
                        login: "Войти",
                        logout: "Выйти"
                    }
                }
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;