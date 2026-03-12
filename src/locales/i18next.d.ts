import 'i18next';
import en from './en.json';
import uk from './uk.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof en;
    };
  }
}