const completed = () => {
  const elements = document.getElementsByTagName('table')
  for (let i = 0; i < elements.length; i++) {
    elements[i].className += 'mdl-data-table mdl-js data-table'
  }
  window.removeEventListener('load', completed)
  document.removeEventListener('DOMContentLoaded', completed)
}

document.addEventListener('DOMContentLoaded', completed)
window.addEventListener('load', completed)
