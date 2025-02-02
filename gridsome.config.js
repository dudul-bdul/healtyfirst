// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Healty First',
  siteDescription: 'healtyfirst.com adalah distributor resmi produk-produk herbal yang berkualitas alami aman dan bersertifikat.',

  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-M65XT9M',
        enabled: true,
        debug: true
      }
    },
    
      {
        use: '@gridsome/plugin-google-analytics',
        options: {
          id: 'UA-203785093-1'
        }
      }
    ,
  
    
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }


  
    
}
