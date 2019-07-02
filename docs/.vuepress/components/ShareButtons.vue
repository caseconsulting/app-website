<template>
  <section>
    <head>
      <link href="https://netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.css" rel="stylesheet" />
    </head>
    <!-- Social Button HTML -->
    <div style="text-align: center;">
      <!-- Twitter -->
      <a :href="twitter" onclick="location.href=this.href + location;return false;" class="share-btn twitter">
        <i class="fa fa-twitter"></i>
      </a>

      <!-- Facebook -->
      <a
        href="https://www.facebook.com/sharer/sharer.php?u="
        onclick="location.href=this.href + location;return false;"
        class="share-btn facebook"
      >
        <i class="fa fa-facebook"></i>
      </a>

      <!-- LinkedIn -->
      <a
        href="https://www.linkedin.com/sharing/share-offsite/?url="
        onclick="location.href=this.href + location;return false;"
        class="share-btn linkedin"
      >
        <i class="fa fa-linkedin"></i>
      </a>

      <!-- Email -->
      <a :href="email" onclick="location.href=this.href + location;return false;" class="share-btn email">
        <i class="fa fa-envelope"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: ['pageTitle'],
  data() {
    return {
      twitter: 'http://twitter.com/share?url=<URL>&text=' + 'Case Consulting: ' + this.pageTitle + '&via=',
      email: 'mailto:?subject=' + 'Case Consulting: ' + this.pageTitle + '&body='
    };
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