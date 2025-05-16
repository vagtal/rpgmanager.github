import { GoldenLayout } from './esm/index.js';

let isReloading = false;
window.addEventListener('beforeunload', () => {
  isReloading = true;
});

function createClass(url) {
  return class {
    constructor(container) {
      this.container = container
      container.on('destroy', () => {
        const name = this.container._componentType
        if (name.includes('dynamicClass') && !isReloading) {
          dynamicClasses = dynamicClasses.filter(clss => clss.name !== name)
          localStorage.setItem('classes', JSON.stringify(dynamicClasses))
        }
      });
      this.rootElement = container.element
      this.rootElement.innerHTML = `<iframe width="100%" height="100%" frameborder="0" allowfullscreen src="${url}">`
      this.resizeWithContainerAutomatically = true
    }
  };
}

let dynamicClasses = localStorage.getItem("classes") ? JSON.parse(localStorage.getItem("classes")) : []
const Youtube = createClass('https://vagtal.github.io/notion-playlist-plugin.github.io/')
const Tracker = createClass('https://vagtal.github.io/notion-init-tracker-plugin.github.io/')
const Coppermind = createClass('https://coppermind.net/wiki/Category:Stormlight_Archive')
const RollForFantasy = createClass('https://rollforfantasy.com/')
const FantasyName = createClass('https://www.fantasynamegenerators.com/')
const RabdRoll = createClass('https://www.randroll.com/30-days-gen-sites/')
const Drive = createClass('http://127.0.0.1:9090/')
const Slayers = createClass('https://vagtal.notion.site/ebd/a342d25996d14aad89ba274026e69062')
const Cosmere = createClass('https://vagtal.notion.site/ebd/1c6993e94c35809489d7f3b8bd51fe47')
const Games = createClass('https://vagtal.notion.site/ebd/1db993e94c3580c0a7d4f19f76b1126a')
const SLWiki = createClass('https://stormlightarchive.fandom.com/wiki/Stormlight_Archive_Wiki')

const defaultConfig = {
  dimensions: {
    headerHeight: 35
  },
  root: {
    type: "row",
    content: [
      {
        type: "stack",
        content: [
          {
            title: "Games",
            type: "component",
            componentType: "Games",
            componentState: { text: "Games C" }
          },
          {
            title: "Cosmere",
            type: "component",
            componentType: "Cosmere",
            componentState: { text: "Cosmere C" }
          },
          {
            title: "Drive",
            type: "component",
            componentType: "Drive",
            componentState: { text: "Drive C" }
          },
          {
            title: "Coppermind",
            type: "component",
            componentType: "Coppermind",
            componentState: { text: "Coppermind C" }
          },
          {
            title: "SLWiki",
            type: "component",
            componentType: "SLWiki",
            componentState: { text: "SLWiki C" }
          }
        ]
      },
      {
        type: "column",
        content: [
          {
            type: "column",
            content: [
              {
                type: "stack",
                content: [
                  {
                    title: "RollForFantasy",
                    type: "component",
                    componentType: "RollForFantasy",
                    componentState: { text: "RollForFantasy C" }
                  },
                  {
                    title: "RabdRoll",
                    type: "component",
                    componentType: "RabdRoll",
                    componentState: { text: "RabdRoll C" }
                  },
                  {
                    title: "Youtube",
                    type: "component",
                    componentType: "Youtube",
                    componentState: { url: "Youtube C" }
                  }
                ]
              },
              {
                type: "stack",
                content: [
                  {
                    title: "Tracker",
                    type: "component",
                    componentType: "Tracker",
                    componentState: { text: "Tracker C" }
                  },
                  {
                    title: "FantasyName",
                    type: "component",
                    componentType: "FantasyName",
                    componentState: { text: "FantasyName C" }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}

const menuItems = document.querySelectorAll(".floating ul li a.component-list")

menuItems.forEach(menuItem => {
  menuItem.addEventListener("click", event => {
    const id = event.target["id"]
    goldenLayout.addComponent(id, undefined, id)
    document.getElementById('iconContent').removeAttribute("open")
  })
})

document.getElementById("resetLayout").addEventListener("click", event => {
  localStorage.removeItem("goldenLayoutState")
  location.reload()
})

document.getElementById("paint").addEventListener("click", event => {
  window.open("https://kleki.com/?lang=es", '_blank').focus();
})

document.getElementById("addList").addEventListener("click", event => {
  document.getElementById("modal").style.display = 'grid'
  document.getElementById('iconContent').removeAttribute("open")
  document.getElementById("urlName").focus()
})

document.getElementById("cancelUrl").addEventListener("click", event => {
  document.getElementById("urlName").value = ''
  document.getElementById("url").value = ''
  document.getElementById("modal").style.display = 'none'
})

document.getElementById("saveUrl").addEventListener("click", event => {
  const name = document.getElementById("urlName").value 
  const url = document.getElementById("url").value
  if (name?.length && url.length) {
    const newName = 'dynamicClass' + name
    localStorage.setItem('classes', JSON.stringify([...dynamicClasses, {name: newName, url}]))
    goldenLayout.registerComponentConstructor(newName, createClass(url))
    goldenLayout.addComponent(newName, undefined, name)
    document.getElementById("modal").style.display = 'none'
    document.getElementById("urlName").value = ''
    document.getElementById("url").value = ''
  }
})

document.getElementById("saveState1").addEventListener("click", event => {
  let state = JSON.stringify(goldenLayout.saveLayout())
  localStorage.setItem("goldenLayoutStateSaved1", state)
  document.getElementById('iconStatus').removeAttribute("open")
})

document.getElementById("loadState1").addEventListener("click", event => {
  const savedLayout = localStorage.getItem("goldenLayoutStateSaved1")
  savedLayout && goldenLayout.loadLayout(JSON.parse(savedLayout))
  document.getElementById('iconStatus').removeAttribute("open")
})

document.getElementById("saveState2").addEventListener("click", event => {
  let state = JSON.stringify(goldenLayout.saveLayout())
  localStorage.setItem("goldenLayoutStateSaved2", state)
  document.getElementById('iconStatus').removeAttribute("open")
})

document.getElementById("loadState2").addEventListener("click", event => {
  const savedLayout = localStorage.getItem("goldenLayoutStateSaved2")
  savedLayout && goldenLayout.loadLayout(JSON.parse(savedLayout))
  document.getElementById('iconStatus').removeAttribute("open")
})

document.getElementById("saveState3").addEventListener("click", event => {
  let state = JSON.stringify(goldenLayout.saveLayout())
  localStorage.setItem("goldenLayoutStateSaved3", state)
  document.getElementById('iconStatus').removeAttribute("open")
})

document.getElementById("loadState3").addEventListener("click", event => {
  const savedLayout = localStorage.getItem("goldenLayoutStateSaved3")
  savedLayout && goldenLayout.loadLayout(JSON.parse(savedLayout))
  document.getElementById('iconStatus').removeAttribute("open")
})

const goldenLayout = new GoldenLayout(document.getElementById("golden-layout"))

goldenLayout.registerComponentConstructor("Youtube", Youtube)
goldenLayout.registerComponentConstructor("Tracker", Tracker)
goldenLayout.registerComponentConstructor("Slayers", Slayers)
goldenLayout.registerComponentConstructor("Drive", Drive)
goldenLayout.registerComponentConstructor("RollForFantasy", RollForFantasy)
goldenLayout.registerComponentConstructor("FantasyName", FantasyName)
goldenLayout.registerComponentConstructor("RabdRoll", RabdRoll)
goldenLayout.registerComponentConstructor("Coppermind", Coppermind)
goldenLayout.registerComponentConstructor("SLWiki", SLWiki)
goldenLayout.registerComponentConstructor("Cosmere", Cosmere)
goldenLayout.registerComponentConstructor("Games", Games)
dynamicClasses.forEach(cls => {
  goldenLayout.registerComponentConstructor(cls.name, createClass(cls.url))
})

goldenLayout.on("stateChanged", () => {
  let state = JSON.stringify(goldenLayout.saveLayout())
  localStorage.setItem("goldenLayoutState", state)
})

goldenLayout.on('tabCloseRequested', function (component, a) {
  console.log('Se pidió cerrar una pestaña:', component, a);
});

const savedLayout = localStorage.getItem("goldenLayoutState")
console.log(JSON.parse(savedLayout))
const config = savedLayout ? JSON.parse(savedLayout) : defaultConfig
goldenLayout.loadLayout(config)

setInterval(() => {
  let state = JSON.stringify(goldenLayout.saveLayout())
  localStorage.setItem("goldenLayoutState", state)
}, 10000)
