import zhCN from './langs/zh-cn';
import enUS from './langs/en-us';
import ruRU from './langs/ru-ru';
import deDE from './langs/de-de';

const locales: Record<App.I18n.LangType, App.I18n.Schema> = {
  'zh-CN': zhCN,
  'en-US': enUS,
  'ru-RU': ruRU,
  'de-DE': deDE
};

export default locales;
