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

class Demiplane {
  constructor(container) {
    this.container = container
    console.log(container.state)
    this.rootElement = container.element
    this.rootElement.innerHTML =
      '<iframe width="100%" height="100%" src="https://app.demiplane.com/characters?login=true>'
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
            title: "Drive",
            type: "component",
            componentType: "Drive",
            componentState: { text: "Drive C" }
          },
          {
            title: "Slayers",
            type: "component",
            componentType: "Slayers",
            componentState: { text: "Slayers C" }
          },
          {
            title: "RabdRoll",
            type: "component",
            componentType: "RabdRoll",
            componentState: { text: "RabdRoll C" }
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
                    title: "Youtube",
                    type: "component",
                    componentType: "Youtube",
                    componentState: { url: "Youtube C" }
                  },
                  {
                    title: "RollForFantasy",
                    type: "component",
                    componentType: "RollForFantasy",
                    componentState: { text: "RollForFantasy C" }
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
    goldenLayout.addComponent(event.target["id"], undefined, event.target["id"])
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
goldenLayout.registerComponentConstructor("Demiplane", Demiplane)

goldenLayout.on("stateChanged", () => {
  let state = JSON.stringify(goldenLayout.saveLayout())
  localStorage.setItem("goldenLayoutState", state)
})

const savedLayout = localStorage.getItem("goldenLayoutState")
console.log(JSON.parse(savedLayout))
const config = savedLayout ? JSON.parse(savedLayout) : defaultConfig
goldenLayout.loadLayout(config)
