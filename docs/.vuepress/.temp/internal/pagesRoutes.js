import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-1e84120a","/eula.html",{"title":"FillAmeaPixel 用户协议"},["/eula","/eula.md"]],
  ["v-08eb506c","/privacy.html",{"title":"FillAmeaPixel 隐私政策"},["/privacy","/privacy.md"]],
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-2d0a870d","/en/",{"title":"首页"},["/en/index.html","/en/README.md"]],
  ["v-f5f35416","/environment/",{"title":"环境责任"},["/environment/index.html","/environment/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)