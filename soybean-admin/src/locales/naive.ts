import { dateEnUS, dateZhCN, dateRuRU, dateDeDE, enUS, zhCN, ruRU, deDE } from 'naive-ui';
import type { NDateLocale, NLocale } from 'naive-ui';

export const naiveLocales: Record<App.I18n.LangType, NLocale> = {
  'zh-CN': zhCN,
  'en-US': enUS,
  'ru-RU': ruRU,
  'de-DE': deDE
};

export const naiveDateLocales: Record<App.I18n.LangType, NDateLocale> = {
  'zh-CN': dateZhCN,
  'en-US': dateEnUS,
  'ru-RU': dateRuRU,
  'de-DE': dateDeDE
};
