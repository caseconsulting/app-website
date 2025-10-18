<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn :color="color" v-bind="props"> {{ title }} </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: ['items', 'title', 'color']
}
</script>
