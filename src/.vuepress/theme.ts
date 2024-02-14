import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { MR_HOPE_AVATAR } from "./logo.js";

export default hopeTheme({
  hostname: "https://dream-oyh.github.io",

  author: {
    name: "OYH",
    email:"19859860010@163.com",
  },
  favicon: "/web_logo.jpg",
  iconAssets: "iconfont",

  logo: "/web_logo.jpg",

  repo: "https://github.com/dream-oyh/dream-oyh.github.io",
  darkmode:"switch",
  fullscreen: false,
  docsDir: "src",
  // 导航栏
  navbar,
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Repo", "Outlook","Search"],
  },

  // 侧边栏
  sidebar,

  // 页脚
  footer: "希望你能在此有所收获",
  displayFooter: true,

  // 博客相关
  blog: {
    intro: "/intro.html",
    medias: {
      BiliBili: "https://space.bilibili.com/1901628168?spm_id_from=333.1007.0.0",
      GitHub: "https://github.com/dream-oyh",
      WechatMP: "https://mp.weixin.qq.com/s/1RJsBxf1yf5aGAzjEWKtZg",
      XiaoHongShu: "https://www.xiaohongshu.com/user/profile/62fd04b7000000001200ff72"
    },
    roundAvatar:true,
    timeline:"新的内容正在产出……",
    articlePerPage:3,
    articleInfo:["Date", "Category", "Tag", "ReadingTime"],
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    comment: {
      provider: "Waline",
      serverURL: "https://blog-comments-16fvk11pk-dream-oyhs-projects.vercel.app/",
      emoji:['//unpkg.com/@waline/emojis@1.2.0/qq'],
      requiredMeta:["nick"],
      pageSize:5,

    },
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      hint:true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      tasklist:true,
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
  //   // 加密配置
//   encrypt: {
//     config: {
//       "/demo/encrypt.html": ["1234"],
//     },
//   },
});
