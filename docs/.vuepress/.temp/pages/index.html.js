export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroText": "FillAmeaPixel 文档中心",
    "heroImage": "img/logo.png",
    "tagline": null,
    "actions": [
      {
        "text": "搜索文档",
        "link": "/zh/guide/getting-started.html",
        "type": "primary"
      },
      {
        "text": "返回官网",
        "link": "https://www.fapixel.com/",
        "type": "secondary"
      }
    ],
    "footer": "Copyright © 2022 FillAmeaPixel. <a href=\"/privacy/\" one-link-mark=\"yes\">隐私政策</a>丨<a href=\"/eula/\" one-link-mark=\"yes\">用户协议</a>",
    "footerHtml": true
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
