import 'js/base.js'
import i18nextJquery from 'jquery-i18next'
import i18next from 'i18next'
import $ from 'jquery'

const lang = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage)
const options = {
  handleName: 'localize',
  parseDefaultValueFromContent: true,
  selectorAttr: 'data-i18n',
  useOptionsAttr: false
}

i18next.init({
  debug: true,
  lng: lang,
  load: 'languageOnly',
  fallbackLng: 'en',
  backend: {
    loadPath: 'locales/{{lng}}/{{ns}}.json'
  }
}, (t, err) => {
  i18nextJquery.init(i18next, $, options)
  // $('.translate').localize()
})
