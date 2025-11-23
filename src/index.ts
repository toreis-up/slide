export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // 静的アセット（.html, .css, .js, /assets/）は直接配信
    if (
      path.endsWith(".html") ||
      path.endsWith(".css") ||
      path.endsWith(".js") ||
      path.endsWith(".json") ||
      path.includes("/assets/") ||
      path.match(/\.\w+$/) // 拡張子あり
    ) {
      return env.ASSETS.fetch(request);
    }

    // SPA ルーティング：拡張子なしなら index.html にリライト
    const baseMatch = path.match(/^\/([^/]+)/); // ← スライドの base を抽出
    if (baseMatch) {
      const base = baseMatch[1];
      const indexUrl = new URL(`/${base}/index.html`, url.origin);
      return env.ASSETS.fetch(indexUrl);
    }

    // デフォルト
    return env.ASSETS.fetch(request);
  },
};
