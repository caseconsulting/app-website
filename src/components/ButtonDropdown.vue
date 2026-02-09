<template>
  <div>
    <v-btn :color="color ? color : 'primary'" :variant="variant">
      <slot></slot>
      <v-menu activator="parent">
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" :value="index" :to="item.link ? item.link : ''">
            <v-list-item-title>
              <v-icon v-if="item.submenu" icon="mdi-menu-left" size="x-small"></v-icon>
              <span :class="item.action ? 'text-secondary' : ''">{{ item.title }}</span>
            </v-list-item-title>
            <v-menu v-if="item.submenu" location="left" activator="parent" submenu>
              <v-list>
                <v-list-item v-for="(subitem, index) in item.submenu" :key="index" :to="subitem.link">
                  <v-list-item-title>{{ subitem.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
  </div>
</template>

<script setup>
defineProps(['items', 'variant', 'color']);
</script>

<style scoped lang="scss">
.v-list-item {
  color: rgb(var(--v-theme-primary));
}
</style>
