import 'i18next'

import ptBR from 'translations/locales/pt-BR.json'

type DefaultResources = typeof ptBR

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: {
      translation: DefaultResources
    }
  }
}