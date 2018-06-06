module.exports = {
  // 开发环境
  development: {
    // 服务运行端口
    port: 8000,
    // 站点主标题
    title: 'react-init',
    // 站点seo关键字
    keywords: '',
    // 站点seo描述
    description: '',
    // 静态资源文件目录
    staticDirName: 'dev',
    // API代理地址
    apiHost: 'http://localhost:8001',
    // API请求地址前缀
    apiPreFix: '',
    // 网址前缀
    basename: '',
    // 统计代码
    analytics: ``
  },
  production: {
    port: 8080,
    title: 'react-init-production',
    keywords: '',
    description: '',
    staticDirName: 'dist',
    apiHost: 'http://localhost:8081',
    apiPreFix: '',
    basename: '',
    analytics: `
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_TRACKING_ID');
      </script>
    `
  }
}
