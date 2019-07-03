module.exports = {
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
    ],
    /* Apple-icon metadeta tag for case website desktop display */
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/assets/img/case/navLogo.png'
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
