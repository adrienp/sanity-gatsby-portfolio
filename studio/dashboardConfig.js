export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e821d06e4c794019fef36ff',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-b8mjx79d',
                  apiId: '6d9c8565-019b-45d9-9f12-797dfa93338a'
                },
                {
                  buildHookId: '5e821d0765aecf0213bf3743',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9v41vttw',
                  apiId: '84d8c0c2-87a7-4dc8-9c3b-0f6cff3ed998'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adrienp/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9v41vttw.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
