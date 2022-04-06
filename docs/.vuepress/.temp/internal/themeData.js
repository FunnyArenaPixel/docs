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
      "text": "游玩",
      "children": [
        {
          "text": "游玩规范",
          "children": [
            {
              "text": "玩家公约",
              "link": "/players-rule/"
            },
            {
              "text": "用户协议",
              "link": "/eula/"
            },
            {
              "text": "隐私政策",
              "link": "/privacy/"
            }
          ]
        },
        {
          "text": "玩法介绍",
          "children": [
            {
              "text": "PVP游戏",
              "link": "/games/PVP/"
            },
            {
              "text": "PVE游戏",
              "link": "/games/PVE/"
            },
            {
              "text": "小游戏",
              "link": "/games/mini/"
            },
            {
              "text": "SkyLand",
              "link": "/games/SkyLand/"
            }
          ]
        },
        {
          "text": "动态",
          "children": [
            {
              "text": "活动列表",
              "link": "/activity/"
            },
            {
              "text": "更新日志",
              "link": "/changelog/"
            }
          ]
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
          "link": "/love_sharing/"
        },
        {
          "text": "隐私权",
          "link": "/privacy/"
        }
      ]
    },
    {
      "text": "关于",
      "children": [
        {
          "text": "团队规范",
          "children": [
            {
              "text": "总纲",
              "link": "/team/main/"
            },
            {
              "text": "版权条例",
              "link": "/copyright/"
            },
            {
              "text": "运营规范",
              "link": "/team/operation"
            }
          ]
        },
        {
          "text": "招贤纳士",
          "children": [
            {
              "text": "招新计划",
              "link": "/team/recruit/plan/"
            },
            {
              "text": "招新资料",
              "link": "/team/recruit/info/"
            },
            {
              "text": "管理层",
              "link": "/team/leadership/"
            }
          ]
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
