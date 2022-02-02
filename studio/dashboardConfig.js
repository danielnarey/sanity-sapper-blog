export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '61f9fe935b6d3e8815a688b7',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-wyjf2z9v',
                  apiId: '818d2d9b-2665-4358-948e-d7c90415a4bd'
                },
                {
                  buildHookId: '61f9fe940ce03189f8f26ae5',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-s96d3v17',
                  apiId: '69a8445c-5964-4a9a-bcfa-27d2e8ea05e6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danielnarey/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-s96d3v17.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
