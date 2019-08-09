<template>
  <section>
    <head>
      <link href="https://netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.css" rel="stylesheet" />
    </head>
    <!-- Social Button HTML -->
    <div style="text-align: center;">
      <!-- Twitter -->
      <a :href="twitter()" class="share-btn twitter" target="_blank">
        <i class="fa fa-twitter"></i>
      </a>

      <!-- Facebook -->
      <a :href="facebook()" class="share-btn facebook" target="_blank">
        <i class="fa fa-facebook"></i>
      </a>

      <!-- LinkedIn -->
      <a :href="linkedIn()" class="share-btn linkedin" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-linkedin"></i>
      </a>

      <!-- Email -->
      <a :href="email()" class="share-btn email">
        <i class="fa fa-envelope"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: ['pageTitle'],
  methods: {
    getUrl() {
      return window.location.href;
    },
    twitter() {
      return (
        'http://twitter.com/share?url=<URL>&text=Case Consulting: ' +
        this.pageTitle +
        '&via=consultwithcase%0D' +
        this.getUrl()
      );
    },
    facebook() {
      return 'https://www.facebook.com/sharer/sharer.php?u=' + this.getUrl();
    },
    linkedIn() {
      return 'https://www.linkedin.com/sharing/share-offsite/?url=' + this.getUrl();
    },
    email() {
      return 'mailto:?subject=Case Consulting: ' + this.pageTitle + '&body=' + this.getUrl();
    }
  },
  mounted() {
    this.getUrl();
  }
};
</script>

<style>
.share-btn {
  display: inline-block;
  color: #ffffff;
  border: none;
  padding: 0.5em;
  width: 4em;
  opacity: 0.9;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2);
  outline: none;
  text-align: center;

  user-select: none;
  background-color: transparent;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
.share-btn:hover,
.share-btn:focus {
  color: #eeeeee;
}
.share-btn:active {
  position: relative;
  top: 2px;
  box-shadow: none;
  color: #e2e2e2;
  opacity: 1;
  outline: medium none;
  position: relative;
  top: 2px;
}
.twitter {
  background: #55acee none repeat scroll 0 0;
}
.google-plus {
  background: #dd4b39 none repeat scroll 0 0;
}
.facebook {
  background: #3b5998 none repeat scroll 0 0;
}
.stumbleupon {
  background: #eb4823 none repeat scroll 0 0;
}
.reddit {
  background: #ff5700 none repeat scroll 0 0;
}
.linkedin {
  background: #4875b4 none repeat scroll 0 0;
}
.email {
  background: #444444 none repeat scroll 0 0;
}
</style>
