module.exports = {
  // head: [
  //   [
  //     'link',
  //     {
  //       rel: 'stylesheet',
  //       href: '/bootstrap/bootstrap.min.css'
  //     }
  //   ],
  //   ['script', { src: '/bootstrap/bootstrap.min.js' }]
  // ],

  // head: [
  //   [
  //     'link',
  //     {
  //       rel: 'stylesheet',
  //       href: 'bootstrap/dist/css/bootstrap.css'
  //     }
  //   ],
  //   [
  //     'link',
  //     {
  //       rel: 'stylesheet',
  //       href: 'bootstrap-vue/dist/bootstrap-vue.css'
  //     }
  //   ]
  // ],

  title: 'Case Consulting Blog',
  description: 'Just playing around',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }, { text: 'Case Cares', link: '/case-cares/' }]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '/public/'
      }
    }
  }
};
