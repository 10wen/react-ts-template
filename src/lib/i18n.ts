import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// 检测浏览器语言
import LanguageDetector from "i18next-browser-languagedetector";
import cn from "../assets/locales/zh-CN.json";
import hk from "../assets/locales/zh-HK.json";
import en from "../assets/locales/en-US.json";

i18next
  .use(LanguageDetector) //嗅探当前浏览器语言 zh-CN
  .use(initReactI18next) // 将 i18next 向下传递给 react-i18next
  .init({
    //初始化
    resources: {
      cn: {
        translation: cn,
      },
      hk: {
        translation: hk,
      },
      en: {
        translation: en,
      },
    }, //本地多语言数据
    lng: 'cn',
    fallbackLng: "en", //默认当前环境的语言
    detection: {
      caches: ["localStorage", "sessionStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18next;
