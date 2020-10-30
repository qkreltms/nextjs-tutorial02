const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
  }

  return {
    async rewrites() {
      return [
        {
          source: "/test/:id",
          destination: "/api/preview/:id",
        },
      ];
    },
    reactStrictMode: true,
    // basePath: "/",
    generateBuildId: async () => {
      // You can, for example, get the latest git commit hash here
      return 'your=build=id'
    },
  };
};

// redirects와 rewrites의 차이 정확히...?
// 대략 rewrites는 "/"에는 적용할 수 없고
// source url을 아예 대체하는 역할인것 같다.
// redirects는 말그대로 해당 url에 접근하면 다른 목적지로 안내한다.
// 그래서 어떤걸 써도 상관없다...???

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: "/test/:id",
//         destination: "/api/preview/:id",
//       },
//     ];
//   },
// };
