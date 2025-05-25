export const defaultConfig = {
  dimensions: {
    headerHeight: 35
  },
  root: {
    type: 'row',
    content: [
      {
        type: 'stack',
        content: [
          {
            title: 'Games',
            type: 'component',
            componentType: 'Games',
            componentState: { text: 'Games C' }
          },
          {
            title: 'System',
            type: 'component',
            componentType: 'System',
            componentState: { text: 'System C' }
          },
          {
            title: 'Coppermind',
            type: 'component',
            componentType: 'Coppermind',
            componentState: { text: 'Coppermind C' }
          },
          {
            title: 'SLWiki',
            type: 'component',
            componentType: 'SLWiki',
            componentState: { text: 'SLWiki C' }
          },
          
          {
            title: 'PDF',
            type: 'component',
            componentType: 'PDF',
            componentState: { text: 'PDF C' }
          },
          {
            title: 'Drive',
            type: 'component',
            componentType: 'Drive',
            componentState: { text: 'Drive C' }
          }
        ]
      },
      {
        type: 'stack',
        content: [
          {
            title: 'Spren',
            type: 'component',
            componentType: 'Spren',
            componentState: { text: 'Spren C' }
          },
          {
            title: 'Tracker',
            type: 'component',
            componentType: 'Tracker',
            componentState: { text: 'Tracker C' }
          },
          {
            title: 'RollForFantasy',
            type: 'component',
            componentType: 'RollForFantasy',
            componentState: { text: 'RollForFantasy C' }
          },
          {
            title: 'RabdRoll',
            type: 'component',
            componentType: 'RabdRoll',
            componentState: { text: 'RabdRoll C' }
          },
          {
            title: 'Sound',
            type: 'component',
            componentType: 'Sound',
            componentState: { text: 'Sound C' }
          }
        ]
      }
    ]
  }
}

/* old config
    [
      {
        type: 'stack',
        content: [
          {
            title: 'Games',
            type: 'component',
            componentType: 'Games',
            componentState: { text: 'Games C' }
          },
          {
            title: 'Cosmere',
            type: 'component',
            componentType: 'Cosmere',
            componentState: { text: 'Cosmere C' }
          },
          {
            title: 'Drive',
            type: 'component',
            componentType: 'Drive',
            componentState: { text: 'Drive C' }
          },
          {
            title: 'Coppermind',
            type: 'component',
            componentType: 'Coppermind',
            componentState: { text: 'Coppermind C' }
          },
          {
            title: 'SLWiki',
            type: 'component',
            componentType: 'SLWiki',
            componentState: { text: 'SLWiki C' }
          },
          {
            title: 'PDF',
            type: 'component',
            componentType: 'PDF',
            componentState: { text: 'PDF C' }
          }
        ]
      },
      {
        type: 'column',
        content: [
          {
            type: 'column',
            content: [
              {
                type: 'stack',
                content: [
                  {
                    title: 'RollForFantasy',
                    type: 'component',
                    componentType: 'RollForFantasy',
                    componentState: { text: 'RollForFantasy C' }
                  },
                  {
                    title: 'RabdRoll',
                    type: 'component',
                    componentType: 'RabdRoll',
                    componentState: { text: 'RabdRoll C' }
                  },
                  {
                    title: 'Youtube',
                    type: 'component',
                    componentType: 'Youtube',
                    componentState: { url: 'Youtube C' }
                  }
                ]
              },
              {
                type: 'stack',
                content: [
                  {
                    title: 'Tracker',
                    type: 'component',
                    componentType: 'Tracker',
                    componentState: { text: 'Tracker C' }
                  },
                  {
                    title: 'FantasyName',
                    type: 'component',
                    componentType: 'FantasyName',
                    componentState: { text: 'FantasyName C' }
                  },
                  {
                    title: 'Sound',
                    type: 'component',
                    componentType: 'Sound',
                    componentState: { text: 'Sound C' }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
*/