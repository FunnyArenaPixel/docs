export const data = {
  "key": "v-2d0a870d",
  "path": "/en/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroText": "FillAmeaPixel Docs",
    "heroImage": "img/logo.png",
    "tagline": null,
    "actions": [
      {
        "text": "Search",
        "link": "/",
        "type": "primary"
      },
      {
        "text": "Offical Website",
        "link": "https://www.fapixel.com/",
        "type": "secondary"
      }
    ],
    "footer": "Copyright © 2022 FillAmeaPixel. <a href=\"/en/privacy.html/\" one-link-mark=\"yes\">Privacy Policy</a>丨<a href=\"en/eula.html/\" one-link-mark=\"yes\">Terms of Use</a>",
    "footerHtml": true
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649089069000,
    "contributors": [
      {
        "name": "PexEric",
        "email": "3088364720@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "en/README.md"
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
