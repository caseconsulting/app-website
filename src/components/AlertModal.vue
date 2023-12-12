<template>
  <v-dialog v-model="display" dismissible max-width="290px">
    <v-card>
      <v-card-title>{{ header }}</v-card-title>
      <v-card-text>{{ message }}</v-card-text>
      <v-card-actions>
        <v-btn text color="rgb(231, 70, 60)" @click="close">{{ closePrompt }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
// |--------------------------------------------------|
// |                                                  |
// |                     METHODS                      |
// |                                                  |
// |--------------------------------------------------|

/**
 * Emits an event to change prop value to false indicating
 * modal has been closed
 */
function close() {
  this.$emit('update:show', false);
  this.display = false;
}

// |--------------------------------------------------|
// |                                                  |
// |                      EXPORT                      |
// |                                                  |
// |--------------------------------------------------|

export default {
  data: function () {
    return {
      header: this.headline,
      message: this.body,
      closePrompt: this.closeButtonText,
      display: this.show
    };
  },
  props: {
    headline: String,
    body: String,
    closeButtonText: {
      type: String,
      default: 'Close'
    },
    show: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    close
  },
  watch: {
    headline: function (val) {
      this.header = val;
    },
    body: function (val) {
      this.message = val;
    },
    closeButtonText: function (val) {
      this.closePrompt = val;
    },
    show: function (val) {
      this.display = val;
    },
    display: function (val) {
      if (val == false) {
        this.close();
      }
    }
  }
};
</script>
