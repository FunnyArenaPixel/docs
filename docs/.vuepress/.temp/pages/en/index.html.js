export const data = {
  "key": "v-2d0a870d",
  "path": "/en/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroText": "FunnyArenaPixel Docs",
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
    "footer": "Copyright © 2024 FunnyArenaPixel. <a href=\"/en/privacy.html/\" one-link-mark=\"yes\">Privacy Policy</a> | <a href=\"en/eula.html/\" one-link-mark=\"yes\">Terms of Use</a>",
    "footerHtml": true
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1705936573000,
    "contributors": [
      {
        "name": "PexEric",
        "email": "3088364720@qq.com",
        "commits": 2
      },
      {
        "name": "PexEric",
        "email": "suoerix@gmail.com",
        "commits": 1
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
