module.exports = {
    // 站点配置
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'FillAmeaPixel 文档中心',

        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
      '/en/': {
        lang: 'en-US',
        title: 'Docs',
      },
    },
    head: [['link', { rel: 'icon', href: 'img/logo.png' }]],
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'img/logo.png',
      locales: {
        '/': {
          selectLanguageName: '简体中文',
          selectLanguageText: '选择语言',
          selectLanguageAriaLabel: '选择语言',
        },
        '/en/': {
          selectLanguageName: 'English',
        },
      },
      navbar: [
        {
          text: '游戏玩法',
          children: [
            {
              text: '游玩规范',
              children: [{text: '玩家公约',link: '/environment/'},{text: '博爱与共享',link: '/'},{text: '隐私权',link: '/privacy/'}],
            },
            {
              text: '规则及介绍',
              children: [{text: 'PVP游戏',link: '/environment/'},{text: 'PVE游戏',link: '/'},{text: '小游戏',link: '/privacy/'},{text: 'SkyLand',link: '/privacy/'}],
            },
            {
              text: '规则及介绍',
              children: [{text: '玩家公约',link: '/rules/',},{text: '活动列表',link: '/activity/'},{text: '更新日志',link: '/changelog/',}],
            }
          ]
        },
        {
          text: '价值观',
          children: [{text: '环境责任',link: '/environment/'},{text: '博爱与共享',link: '/love_sharing/'},{text: '隐私权',link: '/privacy/'}],
        },
        {
          text: '关于',
          children: [
            {
              text: '团队规范',
              children: [{text: '总纲',link: '/teams/'},{text: '版权条例',link: '/privacy/'},{text: '工作机会',link: '/jobs/'}],
            },
            {
              text: '团队规范',
              children: [{text: '团队总纲',link: '/teams/'},{text: '管理层',link: '/privacy/'},{text: '工作机会',link: '/jobs/'}],
            }
          ],
        },
        {
          text: '返回主站',
          link: 'https://www.fapixel.com/',
        },
      ],
    },

    plugins: [
      [
        '@vuepress/plugin-search',
        {
          locales: {
            '/en/': {
              placeholder: 'Search',
            },
            '/': {
              placeholder: '搜索文档',
            },
          },
          isSearchable: (page) => page.path !== '/',
        },
      ],
    ],
  }