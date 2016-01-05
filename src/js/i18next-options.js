export default {
  lang: navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage),
  defaults: {
    handleName: 'localize',
    parseDefaultValueFromContent: true,
    selectorAttr: 'data-i18n',
    useOptionsAttr: false
  }
}
