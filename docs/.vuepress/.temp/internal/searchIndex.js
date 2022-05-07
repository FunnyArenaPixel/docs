export const searchIndex = [
  {
    "title": "更新日志",
    "headers": [
      {
        "level": 2,
        "title": "2022年",
        "slug": "_2022年",
        "children": [
          {
            "level": 3,
            "title": "2022年4月",
            "slug": "_2022年4月",
            "children": []
          },
          {
            "level": 3,
            "title": "2022年3月",
            "slug": "_2022年3月",
            "children": []
          }
        ]
      }
    ],
    "path": "/changelog.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "FillAmeaPixel 用户协议",
    "headers": [
      {
        "level": 2,
        "title": "1 总则",
        "slug": "_1-总则",
        "children": []
      },
      {
        "level": 2,
        "title": "2 用户权利和义务",
        "slug": "_2-用户权利和义务",
        "children": []
      },
      {
        "level": 2,
        "title": "3 免责声明",
        "slug": "_3-免责声明",
        "children": []
      },
      {
        "level": 2,
        "title": "4 其他",
        "slug": "_4-其他",
        "children": [
          {
            "level": 3,
            "title": "4.1 隐私政策",
            "slug": "_4-1-隐私政策",
            "children": []
          },
          {
            "level": 3,
            "title": "4.2 适用法律",
            "slug": "_4-2-适用法律",
            "children": []
          },
          {
            "level": 3,
            "title": "4.3 独立性",
            "slug": "_4-3-独立性",
            "children": []
          },
          {
            "level": 3,
            "title": "4.4 更新与通知",
            "slug": "_4-4-更新与通知",
            "children": []
          }
        ]
      }
    ],
    "path": "/eula.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "FillAmeaPixel 玩家公约",
    "headers": [],
    "path": "/players_covenant.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "FillAmeaPixel 隐私政策",
    "headers": [
      {
        "level": 2,
        "title": "一、个人信息的收集和使用",
        "slug": "一、个人信息的收集和使用",
        "children": [
          {
            "level": 3,
            "title": "1.1 我们收集哪些信息及如何收集",
            "slug": "_1-1-我们收集哪些信息及如何收集",
            "children": []
          },
          {
            "level": 3,
            "title": "1.2 我们将如何使用这些信息",
            "slug": "_1-2-我们将如何使用这些信息",
            "children": []
          }
        ]
      }
    ],
    "path": "/privacy.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/copyright/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "环境责任",
    "headers": [
      {
        "level": 2,
        "title": "我们的进展",
        "slug": "我们的进展",
        "children": []
      }
    ],
    "path": "/environment/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/en/",
    "pathLocale": "/en/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/copyright/assets/lobby.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
