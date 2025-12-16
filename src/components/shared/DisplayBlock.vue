<template>
  <div>
    <v-row align="center" justify="space" :class="xs && 'mb-4'">
      <v-col :order="swap ? 2 : 1" :align-self="xs && 'stretch'">
        <v-img cover :height="xs ? '100%' : height ? height : '250px'" width="98%" rounded="xl" :src="url" alt="" />
      </v-col>
      <v-col :order="swap ? 1 : 2">
        <h3 class="font-emphasis"><slot name="title"></slot></h3>
        <slot name="desc"></slot>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useDisplay } from 'vuetify';

const { xs } = useDisplay();
defineProps(['url', 'swap', 'height']);
</script>
