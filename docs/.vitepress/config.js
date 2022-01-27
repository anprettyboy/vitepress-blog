module.exports = {
    title: 'front-end cloud',
    description: 'front-end tech',
    base: '/',
    // theme: 'reco',
    editLinks: true,
    locales: {
        '/': {
          lang: 'zh-CN',
          title: '中文 front-end tech',
          description: '中文 description',
          selectText: '选择语言',
          // 该语言在下拉菜单中的标签
          label: '简体中文',
          ariaLabel: '多语言'
        },
        '/en': {
          lang: 'en-US',
          title: 'front-end tech',
          description: 'Vite & Vue powered static site generator.',
          selectText: 'Languages',
          label: 'English',
          ariaLabel: 'Languages'
        }
    },
    themeConfig: {
        subSidebar: 'auto',
        locales: {
            '/': {
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                label: '中文',

                nav: [
                  { text: 'zx', link: '/zh', activeMatch: '^/$|^/zh/' },
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
              },
              '/en': {
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                label: 'English',
                nav: [
                  { text: 'zx', link: '/zx', activeMatch: '^/$|^/zx/' },
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
