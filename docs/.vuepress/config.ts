import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
    bundler: viteBundler(),
    head: [['link', { rel: 'icon', href: 'img/logo.png' }]],
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: 'FunnyArenaPixel 文档中心',
        },
        '/en/': {
            lang: 'en-US',
            title: 'Docs',
        },
    },
    theme: defaultTheme({
        locales: {
            '/': {
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',

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

                navbar: [
                    {
                        text: '游玩',
                        children: [
                            {
                                text: '游玩规范',
                                children: [{ text: '玩家公约', link: '/players_covenant.html' }, { text: '用户协议', link: '/eula.html' }, { text: '隐私政策', link: '/privacy.html' }],
                            },
                            {
                                text: '玩法介绍',
                                children: [{ text: 'PVP游戏', link: '/games/PVP.html' }, { text: 'PVE游戏', link: '/games/PVE.html' }, { text: '小游戏', link: '/games/mini.html' }],
                            },
                            {
                                text: '动态',
                                children: [{ text: '活动列表', link: '/activity/' }, { text: '更新日志', link: '/changelog/', }],
                            }
                        ]
                    },
                    {
                        text: '价值观',
                        children: [{ text: '环境责任', link: '/environment/' }, { text: '著作权', link: '/copyright/' }, { text: '隐私权', link: '/privacy.html' }],
                    },
                    {
                        text: '关于',
                        children: [
                            {
                                text: '团队',
                                children: [{ text: '团队简介', link: '/team/' }, { text: '管理层', link: '/team/leadership.html' }],
                            },
                            {
                                text: '管理规范',
                                children: [{ text: '总纲', link: '/team/main.html' }, { text: '版权条例', link: '/copyright/' }, { text: '运营规范', link: '/team/operation.html' }],
                            },
                            {
                                text: '招贤纳士',
                                children: [{ text: '招新计划', link: '/team/recruit/plan.html' }, { text: '招新资料', link: '/team/recruit/info.html' }],
                            }
                        ],
                    },
                    {
                        text: '返回主站',
                        link: 'https://www.fapixel.com/',
                    },
                ],
                sidebar: {
                    '/': 'heading',
                    '/copyright/': [
                        {
                            text: '著作权',
                            children: ['/copyright/README.md', '/copyright/rule.md', '/copyright/assets/'],
                        },
                    ],
                }
            },
            '/en/': {
                selectLanguageName: 'English',

                navbar: [
                    {
                        text: 'Gameplay',
                        children: [
                            {
                                text: 'Guideline',
                                children: [{ text: 'Covenant of Players', link: './players_covenant/' }, { text: 'Terms of Use', link: './eula/' }, { text: 'Privacy Policy', link: './privacy/' }],
                            },
                            {
                                text: 'Introduction',
                                children: [{ text: 'PVP', link: './games/PVP/' }, { text: 'PVE', link: './games/PVE/' }, { text: 'Minigames', link: './games/mini/' }],
                            },
                            {
                                text: 'Activities',
                                children: [{ text: 'Events', link: './activity/' }, { text: 'Update log', link: './changelog/', }],
                            }
                        ]
                    },
                    {
                        text: 'Values',
                        children: [{ text: 'Copyright', link: './copyright/' }, { text: 'Environment', link: './environment/' }, { text: 'Privacy', link: './privacy/' }],
                    },
                    {
                        text: 'About us',
                        children: [
                            {
                                text: 'Team',
                                children: [{ text: 'Program of Team', link: './team/main/' }, { text: 'Copyright Guidelines', link: './copyright/' }, { text: 'Operation Guidelines', link: './team/operation' }],
                            },
                            {
                                text: 'Career Opportunities',
                                children: [{ text: 'Plan', link: './team/recruit/plan/' }, { text: 'Information', link: './team/recruit/info/' }, { text: 'Leadership', link: './team/leadership/' }],
                            }
                        ],
                    },
                    {
                        text: 'Main site',
                        link: 'https://www.fapixel.com/',
                    },
                ]
            },
        },
    }),
    plugins: [
        searchProPlugin({
            // 配置选项
        }),
    ]
})