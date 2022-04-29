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
        "text": "项目仓库",
        "link": "https://github.com/FillAmeaPixelNetWork/docs/",
        "type": "primary"
      },
      {
        "text": "返回官网",
        "link": "https://www.fapixel.com/",
        "type": "secondary"
      }
    ],
    "footer": "Copyright © 2022 FillAmeaPixel. <a href=\"/privacy.html/\" one-link-mark=\"yes\">隐私政策</a>丨<a href=\"/eula.html/\" one-link-mark=\"yes\">用户协议</a>",
    "footerHtml": true
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1650168001000,
    "contributors": [
      {
        "name": "PexEric",
        "email": "3088364720@qq.com",
        "commits": 4
      }
    ]
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
