export default {
  widgets: [
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
                  buildHookId: '5f709650a28201240cb1e7c5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-god9oy5k',
                  apiId: 'f22deca0-5c0e-465c-bfa8-25e417d6df9a'
                },
                {
                  buildHookId: '5f709650bce561b7be03e48f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wy8jnfuv',
                  apiId: '6b869944-7041-4f3d-bc30-8b86507f27b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rashaabdulrazzak/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wy8jnfuv.netlify.app', category: 'apps'}
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
