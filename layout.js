import { GoldenLayout } from './esm/index.js'
import { defaultConfig } from './config.js'

let isReloading = false
window.addEventListener('beforeunload', () => {
  isReloading = true
})

let iframes = {}

function createClass(url) {
    return class {
        constructor(container, state) {
            this.container = container
            this.id = state?.id || `pdf-${Math.random().toString(36).slice(2)}`
            this.src = state?.src || url

            container.setState({ id: this.id, src: this.src })

            if (!iframes[this.id]) {
                const iframe = document.createElement('iframe')
                iframe.width = "100%";
                iframe.height = "100%";
                iframe.frameBorder = "0";
                iframe.style.position = 'absolute'
                iframe.allowFullscreen = true;
                iframe.src = this.src
                iframes[this.id] = iframe
                document.body.appendChild(iframe)
            }
            
            this.iframe = iframes[this.id]

            this.updatePosition()
            this.showOnlyActive()

            container.on('resize', () => {
                this.updatePosition()
            })

            container.on('shown', () => {
                this.updatePosition()
                this.showOnlyActive()
            })

            container.on('hide', () => {
                this.iframe.style.display = 'none'
            })

            container.on('destroy', () => {
                const name = this.container._componentType
                if (name.includes('dynamicClass') && !isReloading) {
                    dynamicClasses = dynamicClasses.filter(clss => clss.name !== name)
                    localStorage.setItem('classes', JSON.stringify(dynamicClasses))
                }
            })

            this.resizeWithContainerAutomatically = true
        }
        updatePosition() {
            const containerRect = this.container.element.getBoundingClientRect()

            this.iframe.style.left = `${containerRect.left}px`
            this.iframe.style.top = `${containerRect.top}px`
            this.iframe.style.width = `${containerRect.width}px`
            this.iframe.style.height = `${containerRect.height}px`
            this.iframe.setAttribute('attrLeft', `${containerRect.left}px`)
            this.iframe.setAttribute('attrTop', `${containerRect.top}px`)
            this.iframe.setAttribute('attrWidth', `${containerRect.width}px`)
            this.iframe.setAttribute('attrHeight', `${containerRect.height}px`)
        }
        showOnlyActive() {
            this.iframe.style.display = 'block'
        }
    }
}

class PDF {
  constructor(container) {
    this.container = container
    this.rootElement = container.element
    this.rootElement.innerHTML = `
      <div style='height: 100%; display: flex; flex-direction: column;'>
        <input type='file' id='pdf-file' accept='application/pdf' style='padding: 4px' />
        <iframe id='pdf-frame' style='flex: 1; border: none;'></iframe>
      </div>
    `

    const input = this.rootElement.querySelector('#pdf-file')
    const iframe = this.rootElement.querySelector('#pdf-frame')

    input.addEventListener('change', function (e) {
      const file = e.target.files[0]
      if (!file) return

      const blob = new Blob([file], { type: 'application/pdf' })
      const blobUrl = URL.createObjectURL(blob)
      iframe.src = `pdfjs/web/viewer.html?file=${encodeURIComponent(blobUrl)}`
    })
  }
}

export function addGLClass(name, className, url) {
    localStorage.setItem('classes', JSON.stringify([...dynamicClasses, {name: className, url}]))
    goldenLayout.registerComponentConstructor(className, createClass(url))
    goldenLayout.addComponent(className, undefined, name)
}

let dynamicClasses = localStorage.getItem('classes') ? JSON.parse(localStorage.getItem('classes')) : []
const Youtube = createClass('https://vagtal.github.io/notion-playlist-plugin.github.io/')
const Tracker = createClass('https://vagtal.github.io/notion-init-tracker-plugin.github.io/')
const Coppermind = createClass('https://es.coppermind.net/wiki/Categor%C3%ADa:Cosmere')
const RollForFantasy = createClass('https://rollforfantasy.com/')
const FantasyName = createClass('https://www.fantasynamegenerators.com/')
const RabdRoll = createClass('https://www.randroll.com/30-days-gen-sites/')
const Drive = createClass('http://127.0.0.1:9090/')
const Slayers = createClass('https://vagtal.notion.site/ebd/a342d25996d14aad89ba274026e69062')
const Cosmere = createClass('https://vagtal.notion.site/ebd/1c6993e94c35809489d7f3b8bd51fe47')
const Sound = createClass('https://app.syrinscape.com/#/?soundset=3&element=1565315')
const Games = createClass('https://vagtal.notion.site/ebd/1db993e94c3580c0a7d4f19f76b1126a')
const Spren = createClass('https://vagtal.notion.site/ebd/1c6993e94c35807489faed009bad5103')
const System = createClass('https://vagtal.notion.site/ebd/1d8993e94c3580b5a163c287fd4b5a15')
const SLWiki = createClass('https://stormlightarchive.fandom.com/wiki/Stormlight_Archive_Wiki')

export const goldenLayout = new GoldenLayout(document.getElementById('golden-layout'))

goldenLayout.registerComponentConstructor('Youtube', Youtube)
goldenLayout.registerComponentConstructor('Tracker', Tracker)
goldenLayout.registerComponentConstructor('Slayers', Slayers)
goldenLayout.registerComponentConstructor('Drive', Drive)
goldenLayout.registerComponentConstructor('RollForFantasy', RollForFantasy)
goldenLayout.registerComponentConstructor('FantasyName', FantasyName)
goldenLayout.registerComponentConstructor('RabdRoll', RabdRoll)
goldenLayout.registerComponentConstructor('Coppermind', Coppermind)
goldenLayout.registerComponentConstructor('SLWiki', SLWiki)
goldenLayout.registerComponentConstructor('Cosmere', Cosmere)
goldenLayout.registerComponentConstructor('Sound', Sound)
goldenLayout.registerComponentConstructor('Games', Games)
goldenLayout.registerComponentConstructor('Spren', Spren)
goldenLayout.registerComponentConstructor('System', System)
goldenLayout.registerComponentConstructor('PDF', PDF)
dynamicClasses.forEach(cls => {
  goldenLayout.registerComponentConstructor(cls.name, createClass(cls.url))
})

goldenLayout.on('stateChanged', () => {
  let state = JSON.stringify(goldenLayout.saveLayout())
  localStorage.setItem('goldenLayoutState', state)
})

goldenLayout.on('tabCloseRequested', function (component, a) {
  console.log('Se pidió cerrar una pestaña:', component, a)
})

goldenLayout.on('stackCreated', (stack) => {
    console.log(stack)
  const bar = stack.origin
  const headerControls = bar.header.controlsContainerElement
  const popoutButton = headerControls.querySelector('.lm_popout')
  const maximiseButton = headerControls.querySelector('.lm_maximise')

  if (maximiseButton) {
    const newButton = maximiseButton.cloneNode(true)
    newButton.title = 'Maximizar'
    newButton.innerText = '🗖'

    maximiseButton.remove()
    headerControls.insertBefore(newButton, headerControls.firstChild)

    newButton.addEventListener('click', (e) => {
        e.stopPropagation()
        e.preventDefault()

        const container = bar.getActiveContentItem().container
        const iframe = iframes[container.state.id]

        if (iframe) {
            const titleBar = document.getElementById('maximize-bar')
            titleBar.querySelector('span').innerHTML= container?.componentType
            titleBar.style.display = 'flex'
            iframe.style.left = 0
            iframe.style.top = `35px`
            iframe.style.width = '100%'
            iframe.style.height = '100%'
            iframe.style['z-index'] = '1'
        } else {
            alert('No se encontró ningún iframe con URL para abrir')
        }
    })
  }

    if (popoutButton) {
        const newButton = popoutButton.cloneNode(true)
        newButton.title = 'Abrir en nueva ventana'
        newButton.innerText = '↗'

        popoutButton.remove()
        headerControls.insertBefore(newButton, headerControls.firstChild)

        newButton.addEventListener('click', (e) => {
            e.stopPropagation()
            e.preventDefault()

            const container = bar.getActiveContentItem().container
            const iframe = iframes[container.state.id]
            console.log(container)
            if (iframe && iframe.src) {
                window.open(iframe.src, '_blank')
            } else {
                alert('No se encontró ningún iframe con URL para abrir')
            }
        })
    }
})

const savedLayout = localStorage.getItem('goldenLayoutState')
console.log('Layout:', JSON.parse(savedLayout))
const config = savedLayout ? JSON.parse(savedLayout) : defaultConfig
goldenLayout.loadLayout(config)

setInterval(() => {
  let state = JSON.stringify(goldenLayout.saveLayout())
  localStorage.setItem('goldenLayoutState', state)
}, 10000)
