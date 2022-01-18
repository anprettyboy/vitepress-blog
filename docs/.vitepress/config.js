module.exports = {
    title: 'front-end cloud',
    description: 'front-end tech',
    base: '/',
    // theme: 'reco',
    editLinks: true,
    locales: {
        '/': {
          lang: 'en-US',
          title: 'front-end tech',
          description: 'Vite & Vue powered static site generator.'
        },
        '/zh/': {
          lang: 'zh-CN',
          title: '中文 front-end tech',
          description: '中文 description'
        }
    },
    themeConfig: {
        subSidebar: 'auto',
        locales: {
            '/': {
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                label: 'English',
                nav: [
                  { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
                  // {
                  //   text: 'Config Reference',
                  //   link: '/config/basics',
                  //   activeMatch: '^/config/'
                  // },
                  // {
                  //   text: 'Release Notes',
                  //   link: 'https://github.com/vuejs/vitepress/releases'
                  // }
                ],
              },
              '/zh/': {
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                label: '中文',

                nav: [
                  { text: 'Guide', link: '/zh/', activeMatch: '^/$|^/guide/' },
                  // {
                  //   text: 'Release Notes',
                  //   link: 'https://github.com/vuejs/vitepress/releases'
                  // }
                ],

                // sidebar: {
                //   '/guide/': getGuideSidebar(),
                //   '/config/': getConfigSidebar(),
                //   '/': getGuideSidebar()
                // }
              }
        }
        // nav: [
        //     { text: '首页', link: '/' },
        //     {
        //         text: 'Marthers 博客',
        //         items: [
        //             { text: '博客', link: 'http://huafengyijian.top' }
        //         ]
        //     }
        // ],
        // sidebar: [
        //   {
        //     title: '2021',
        //     path: '/',
        //     collapsable: false,
        //     children: [
        //       {
        //         title: '盘点2021年Javascript最受关注的项目',
        //         path: '/'
        //       }
        //     ]
        //   },
        //   {
        //     title: 'Webpack',
        //     path: '/webpack',
        //     collapsable: false,
        //     children: [
        //       {
        //         title: '优化速度相关',
        //         path: '/webpack/'
        //       }
        //     ]
        //   },
        //   {
        //     title: '微前端',
        //     path: '/micro-front-end',
        //     collapsable: false,
        //     children: [
        //       {
        //         title: 'Module Federation',
        //         path: '/micro-front-end/'
        //       }
        //     ]
        //   }
        // ],
    }
  }
