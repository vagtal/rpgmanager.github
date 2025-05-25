import { goldenLayout, addGLClass } from './layout.js'

const menuItems = document.querySelectorAll('.floating ul li a.component-list')

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', event => {
    const id = event.target['id']
    goldenLayout.addComponent(id, undefined, id)
  })
})

document.getElementById('resetLayout').addEventListener('click', () => {
  localStorage.removeItem('goldenLayoutState')
  location.reload()
})

document.getElementById('paint').addEventListener('click', () => {
  window.open('https://kleki.com/?lang=es', '_blank').focus()
})

document.getElementById('addList').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'grid'
  document.getElementById('urlName').focus()
})

document.getElementById('cancelUrl').addEventListener('click', () => {
  document.getElementById('urlName').value = ''
  document.getElementById('url').value = ''
  document.getElementById('modal').style.display = 'none'
})

document.getElementById('saveUrl').addEventListener('click', () => {
  const name = document.getElementById('urlName').value 
  const url = document.getElementById('url').value
  if (name?.length && url.length) {
    const newName = 'dynamicClass' + name
    addGLClass(name, newName, url)
    document.getElementById('modal').style.display = 'none'
    document.getElementById('urlName').value = ''
    document.getElementById('url').value = ''
  }
})

function createSaveLayout(id) {
  document.getElementById('saveState' + id).addEventListener('click', () => {
    let state = JSON.stringify(goldenLayout.saveLayout())
    localStorage.setItem('goldenLayoutStateSaved' + id, state)
  })
}

function createLoadLayout(id) {
  document.getElementById('loadState' + id).addEventListener('click', () => {
    const savedLayout = localStorage.getItem('goldenLayoutStateSaved' + id)
    savedLayout && goldenLayout.loadLayout(JSON.parse(savedLayout))
  })
}

createSaveLayout(1)
createSaveLayout(2)
createSaveLayout(3)
createLoadLayout(1)
createLoadLayout(2)
createLoadLayout(3)

function closeMenu() {  
    document.getElementById('iconContent').removeAttribute('open')
    document.getElementById('iconStatus').removeAttribute('open')
}

document.getElementById('minimize').addEventListener('click', ()=> {  
  const iframe = document.querySelectorAll('iframe')
  iframe.forEach(ifr => {
      if (ifr.style['z-index'] === '1') {
        ifr.style.top = ifr.getAttribute('attrTop')
        ifr.style.left = ifr.getAttribute('attrLeft')
        ifr.style.width = ifr.getAttribute('attrWidth')
        ifr.style.height = ifr.getAttribute('attrHeight')
        ifr.style['z-index'] = 'auto'
      }
  })
  
  document.getElementById('maximize-bar').style.display = 'none'
})

document.addEventListener('click', () => {
    closeMenu()
})

window.addEventListener('blur', () => {
  setTimeout(() => {
    if (document.activeElement.tagName === 'IFRAME') {
      closeMenu()
    }
  }, 0)
})

