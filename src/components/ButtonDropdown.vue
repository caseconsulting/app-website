<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">
          <slot></slot>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index" :to="item.link">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
defineProps(['items', 'title']);
</script>

<style scoped lang="scss">
.v-list-item {
  color: rgb(var(--v-theme-primary)) !important;
}
</style>
