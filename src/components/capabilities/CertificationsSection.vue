<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" class="justify-center align-center">
        <h3 class="text-secondary mb-5">Certified Excellence</h3>
        Our commitment to excellence drives us to support continuous learning. Our team holds an extensive portfolio of
        industry certifications, demonstrating our expertise across diverse technologies and methodologies.
      </v-col>
      <v-col cols="12" md="6" class="justify-center align-center">
        <v-pie
          animation
          :legend="{ position: xs ? 'bottom' : 'right' }"
          :palette="['#8A3648', '#415464', '#534D5D', '#5a8a96', '#a64d5f']"
          tooltip
          reveal
          gap="2"
          inner-cut="70"
          hide-slice
          rounded="1"
          :items="items"
        >
          <template v-slot:center>
            <div class="text-center">
              <v-icon class="opacity-60" icon="mdi-shield-check" size="54"></v-icon>
            </div>
          </template>
        </v-pie>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
const { xs } = useDisplay();

const items = ref([
  { key: 1, title: 'AWS Certified Solutions Architect', value: 13 },
  { key: 2, title: 'Certified Scrum Master', value: 10 },
  { key: 3, title: 'AWS Certified Cloud Practitioner', value: 9 },
  { key: 4, title: 'Security+ (CompTia)', value: 8 }
]);
</script>
