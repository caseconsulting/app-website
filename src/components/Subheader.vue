<template>
  <div class="text-center">
    <h2 class="subtitle text-primary font-emphasis"><slot name="title"></slot></h2>
    <v-divider thickness="6" class="bg-tertiary border-opacity-75 mt-4 mb-7 mx-auto" style="max-width: 200px" />
    <v-container class="pt-0 h5"><slot name="description"></slot></v-container>
  </div>
</template>

<style scoped>
.v-container {
  font-size: 1.25rem;
}
.subtitle {
  font-size: 2.25rem;
}
</style>
