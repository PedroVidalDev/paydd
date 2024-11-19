import i18n, { InitOptions, Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'

import ptBR from 'translations/locales/pt-BR.json'

const resources: Resource = {
  pt: { translation: ptBR },
}

const options: InitOptions = {
  resources,
  compatibilityJSON: 'v3',
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
}

i18n.use(initReactI18next).init(options)

export default i18n