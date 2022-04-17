export const data = {
  "key": "v-ce159204",
  "path": "/changelog.html",
  "title": "更新日志",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
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
  "git": {
    "updatedTime": 1649256743000,
    "contributors": [
      {
        "name": "PexEric",
        "email": "3088364720@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "changelog.md"
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
