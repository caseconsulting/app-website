module.exports = {
  meta: {
    name: 'og:image',
    content: 'https://case-blog.netlify.com/assets/img/case/logo-banner.gif'
  },
  title: 'Case Consulting Blog',
  head: [
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
    ]
  ],
  description: 'Just playing around',
  themeConfig: {
    logo: '/assets/img/case/navlogo.png'
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Case Cares', link: '/case-cares/' },
    //   { text: 'New Hires', link: '/new-hires/' },
    //   { text: 'Awards', link: '/awards/' }
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
