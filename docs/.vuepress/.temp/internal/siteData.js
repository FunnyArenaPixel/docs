export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "img/logo.png"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "zh-CN",
      "title": "FillAmeaPixel 文档中心",
      "editLinkText": "在 GitHub 上编辑此页",
      "lastUpdatedText": "上次更新",
      "contributorsText": "贡献者",
      "tip": "提示",
      "warning": "注意",
      "danger": "警告",
      "notFound": [
        "这里什么都没有",
        "我们怎么到这来了？",
        "这是一个 404 页面",
        "看起来我们进入了错误的链接"
      ],
      "backToHome": "返回首页",
      "openInNewWindow": "在新窗口打开",
      "toggleDarkMode": "切换夜间模式",
      "toggleSidebar": "切换侧边栏"
    },
    "/en/": {
      "lang": "en-US",
      "title": "Docs"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
