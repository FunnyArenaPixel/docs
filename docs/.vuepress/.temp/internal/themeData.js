export const themeData = {
  "logo": "img/logo.png",
  "locales": {
    "/": {
      "selectLanguageName": "简体中文",
      "selectLanguageText": "选择语言",
      "selectLanguageAriaLabel": "选择语言"
    },
    "/en/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [
    {
      "text": "游戏玩法",
      "children": [
        {
          "text": "规则及介绍",
          "link": "/games/"
        },
        {
          "text": "玩家公约",
          "link": "/rules/"
        },
        {
          "text": "活动列表",
          "link": "/activity/"
        },
        {
          "text": "更新日志",
          "link": "/changelog/"
        }
      ]
    },
    {
      "text": "价值观",
      "children": [
        {
          "text": "环境责任",
          "link": "/environment/"
        },
        {
          "text": "博爱与共享",
          "link": "/"
        },
        {
          "text": "隐私权",
          "link": "/privacy/"
        }
      ]
    },
    {
      "text": "条款",
      "children": [
        {
          "text": "Foo",
          "link": "/foo/"
        },
        "/group/bar.md"
      ]
    },
    {
      "text": "关于",
      "children": [
        {
          "text": "团队总纲",
          "link": "/environment/"
        },
        {
          "text": "管理层",
          "link": "/privacy/"
        },
        {
          "text": "工作机会",
          "link": "/jobs/"
        }
      ]
    },
    {
      "text": "返回主站",
      "link": "https://www.fapixel.com/"
    }
  ],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
