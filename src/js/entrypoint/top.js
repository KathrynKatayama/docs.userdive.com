import 'js/base.js'
import i18nextJquery from 'jquery-i18next'
import i18next from 'i18next'
import $ from 'jquery'
import options from 'js/i18next-options.js'

i18next.init({
  lng: options.lang,
  load: 'languageOnly',
  fallbackLng: 'en',
  backend: {
    loadPath: 'locales/{{lng}}/{{ns}}.json'
  }
}, (t, err) => {
  i18nextJquery.init(i18next, $, options.defaults)
  // $('.translate').localize()
})
