module.exports = {
  title: 'Case Consulting Blog',
  description: 'Just playing around',
  themeConfig: {
    logo: '/assets/img/case/navlogo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Case Cares', link: '/case-cares/' },
      { text: 'New Hires', link: '/new-hires/' },
      { text: 'Awards', link: '/awards/' }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '/public/'
      }
    }
  }
};
