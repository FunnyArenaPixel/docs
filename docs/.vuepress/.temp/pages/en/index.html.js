export const data = {
  "key": "v-2d0a870d",
  "path": "/en/",
  "title": "首页",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "首页",
    "description": "页面的描述",
    "features": [
      {
        "title": "简洁至上",
        "details": "以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。"
      },
      {
        "title": "Vue 驱动",
        "details": "享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。"
      },
      {
        "title": "高性能",
        "details": "VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。"
      }
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": null,
    "contributors": []
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
