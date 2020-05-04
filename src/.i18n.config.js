import i18n from 'i18n';
import path from 'path';

i18n.configure({
  locales: ['en', 'pt-BR'],
  defaultLocale: 'en',
  queryParameter: 'lang',
  directory: path.join('./', 'Locales'),
  api: {
    '__': 'translate',
    '__n': 'translateN'
  },
});

export default i18n;