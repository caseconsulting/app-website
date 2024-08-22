module.exports = {
  pages: {
    index: {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    intern: {
      entry: './src/pages/Intern/main.js',
      template: 'public/index.html',
      title: 'Intern',
      chunks: ['chunk-vendors', 'chunk-common', 'intern']
    },
    'apply-form': {
      entry: './src/pages/Apply/main.js',
      template: 'public/jobApplication.html',
      title: 'Apply',
      chunks: ['chunk-vendors', 'chunk-common', 'apply-form']
    }
  }
};
