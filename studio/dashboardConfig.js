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
                  buildHookId: '5ceeed00e960a5962ea3c1e3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-d9opay78',
                  apiId: '4117c608-9c38-4a1f-8d61-9f30b73a82a6'
                },
                {
                  buildHookId: '5ceeed0059ed0697b4ee4fb4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wz2ixmde',
                  apiId: 'fe49091c-b400-4810-8728-c09b9a43250a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maruw4k/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wz2ixmde.netlify.com', category: 'apps'}
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
