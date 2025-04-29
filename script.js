import { GoldenLayout } from './esm/index.js';

class Youtube {
  constructor(container) {
    this.container = container
    console.log(container.state)
    this.rootElement = container.element
    this.rootElement.innerHTML =
      '<iframe width="100%" height="100%" src="https://vagtal.github.io/notion-playlist-plugin.github.io/">'
    this.resizeWithContainerAutomatically = true
  }
}

class Tracker {
  constructor(container) {
    this.container = container
    console.log(container.state)
    this.rootElement = container.element
    this.rootElement.innerHTML =
      '<iframe width="100%" height="100%" src="https://vagtal.github.io/notion-init-tracker-plugin.github.io/">'
    this.resizeWithContainerAutomatically = true
  }
}

class Coppermind {
  constructor(container) {
    this.container = container
    console.log(container.state)
    this.rootElement = container.element
    this.rootElement.innerHTML =
      '<iframe width="100%" height="100%" src="https://coppermind.net/wiki/Category:Stormlight_Archive">'
    this.resizeWithContainerAutomatically = true
  }
}

class TabletopAudio {
  constructor(container) {
    this.container = container
    console.log(container.state)
    this.rootElement = container.element
    this.rootElement.innerHTML =
      '<iframe width="100%" height="100%" src="https://tabletopaudio.com/">'
    this.resizeWithContainerAutomatically = true
  }
}

class RollForFantasy {
  constructor(container) {
    this.container = container
    console.log(container.state)
    this.rootElement = container.element
    this.rootElement.innerHTML =
      '<iframe width="100%" height="100%" src="https://rollforfantasy.com/">'
    this.resizeWithContainerAutomatically = true
  }
}

class Donjon {
  constructor(container) {
    this.container = container
    console.log(container.state)
    this.rootElement = container.element
    this.rootElement.innerHTML =
      '<iframe width="100%" height="100%" src="https://donjon.bin.sh/site_index.html">'
    this.resizeWithContainerAutomatically = true
  }
}

class RoleGenerator {
  constructor(container) {
    this.container = container
    console.log(container.state)
    this.rootElement = container.element
    this.rootElement.innerHTML =
      '<iframe width="100%" height="100%" src="https://www.rolegenerator.com/">'
    this.resizeWithContainerAutomatically = true
  }
}

class FantasyName {
  constructor(container) {
    this.container = container
    console.log(container.state)
    this.rootElement = container.element
    this.rootElement.innerHTML =
      '<iframe width="100%" height="100%" src="https://www.fantasynamegenerators.com/">'
    this.resizeWithContainerAutomatically = true
  }
}

class RabdRoll {
  constructor(container) {
    this.container = container
    console.log(container.state)
    this.rootElement = container.element
    this.rootElement.innerHTML =
      '<iframe width="100%" height="100%" src="https://www.randroll.com/30-days-gen-sites/">'
    this.resizeWithContainerAutomatically = true
  }
}

class Slayers {
  constructor(container) {
    this.container = container
    console.log(container.state)
    this.rootElement = container.element
    this.rootElement.innerHTML =
      '<iframe src="https://vagtal.notion.site/ebd/a342d25996d14aad89ba274026e69062" width="100%" height="100%" frameborder="0" allowfullscreen />'
    this.resizeWithContainerAutomatically = true
  }
}

class Drive {
  constructor(container) {
    this.container = container
    console.log(container.state)
    this.rootElement = container.element
    this.rootElement.innerHTML =
      '<iframe id="myIframe" width="100%" height="100%" src="http://127.0.0.1:9090/">'
    this.resizeWithContainerAutomatically = true
  }

}

class Cosmere {
  constructor(container) {
    this.container = container
    console.log(container.state)
    this.rootElement = container.element
    this.rootElement.innerHTML =
      '<iframe id="myIframe" width="100%" height="100%" src="https://vagtal.notion.site/ebd/1c6993e94c35809489d7f3b8bd51fe47">'
    this.resizeWithContainerAutomatically = true
  }
}

class Games {
  constructor(container) {
    this.container = container
    console.log(container.state)
    this.rootElement = container.element
    this.rootElement.innerHTML =
      '<iframe id="myIframe" width="100%" height="100%" src="https://vagtal.notion.site/ebd/1db993e94c3580c0a7d4f19f76b1126a">'
    this.resizeWithContainerAutomatically = true
  }
}


class SLWiki {
  constructor(container) {
    this.container = container
    console.log(container.state)
    this.rootElement = container.element
    this.rootElement.innerHTML =
      '<iframe id="myIframe" width="100%" height="100%" src="https://stormlightarchive.fandom.com/wiki/Stormlight_Archive_Wiki">'
    this.resizeWithContainerAutomatically = true
  }
}

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
  })
})

document.getElementById("resetLayout").addEventListener("click", event => {
  localStorage.removeItem("goldenLayoutState")
  location.reload()
})

document.getElementById("saveState1").addEventListener("click", event => {
  let state = JSON.stringify(goldenLayout.saveLayout())
  localStorage.setItem("goldenLayoutStateSaved1", state)
})

document.getElementById("loadState1").addEventListener("click", event => {
  const savedLayout = localStorage.getItem("goldenLayoutStateSaved1")
  savedLayout && goldenLayout.loadLayout(JSON.parse(savedLayout))
})

document.getElementById("saveState2").addEventListener("click", event => {
  let state = JSON.stringify(goldenLayout.saveLayout())
  localStorage.setItem("goldenLayoutStateSaved2", state)
})

document.getElementById("loadState2").addEventListener("click", event => {
  const savedLayout = localStorage.getItem("goldenLayoutStateSaved2")
  savedLayout && goldenLayout.loadLayout(JSON.parse(savedLayout))
})

document.getElementById("saveState3").addEventListener("click", event => {
  let state = JSON.stringify(goldenLayout.saveLayout())
  localStorage.setItem("goldenLayoutStateSaved3", state)
})

document.getElementById("loadState3").addEventListener("click", event => {
  const savedLayout = localStorage.getItem("goldenLayoutStateSaved3")
  savedLayout && goldenLayout.loadLayout(JSON.parse(savedLayout))
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

goldenLayout.on("stateChanged", () => {
  let state = JSON.stringify(goldenLayout.saveLayout())
  localStorage.setItem("goldenLayoutState", state)
})

const savedLayout = localStorage.getItem("goldenLayoutState")
console.log(JSON.parse(savedLayout))
const config = savedLayout ? JSON.parse(savedLayout) : defaultConfig
goldenLayout.loadLayout(config)
