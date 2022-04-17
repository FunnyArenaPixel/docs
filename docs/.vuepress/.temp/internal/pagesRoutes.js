import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-ce159204","/changelog.html",{"title":"更新日志"},["/changelog","/changelog.md"]],
  ["v-1e84120a","/eula.html",{"title":"FillAmeaPixel 用户协议"},["/eula","/eula.md"]],
  ["v-788856df","/players_covenant.html",{"title":"FillAmeaPixel 玩家公约"},["/players_covenant","/players_covenant.md"]],
  ["v-08eb506c","/privacy.html",{"title":"FillAmeaPixel 隐私政策"},["/privacy","/privacy.md"]],
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-640155fe","/copyright/",{"title":""},["/copyright/index.html","/copyright/README.md"]],
  ["v-f5f35416","/environment/",{"title":"环境责任"},["/environment/index.html","/environment/README.md"]],
  ["v-2d0a870d","/en/",{"title":""},["/en/index.html","/en/README.md"]],
  ["v-a052b424","/copyright/assets/lobby.html",{"title":""},["/copyright/assets/lobby","/copyright/assets/lobby.md"]],
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
