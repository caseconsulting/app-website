module.exports = {
  title: 'Case Consulting Blog',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        id: 'bootstrap-css',
        href: '//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/assets/vendor/hamburgers/hamburgers.min.css'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/assets/vendor/unity/styles.op-lawyer.css'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/assets/css/custom.css'
      }
    ],
    /* case favicon icon */
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/assets/img/case/navLogo.png'
      }
    ]
  ],
  description: 'Case Consulting Blog',
  themeConfig: {
    logo: '/assets/img/case/navlogo.png'
    // nav: [
    //   { text: 'Blog Home', link: '/' },
    //   { text: 'Case Cares', link: '/case-cares/' },
    //   { text: 'Case News', link: '/case-news/' }
    // ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '/public/'
      }
    }
  }
};
