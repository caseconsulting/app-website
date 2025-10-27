<template>
  <div>
    <v-container class="mx-auto">
      <v-row class="flex-nowrap" justify="center">
        <v-col cols="3" md="auto" align-self="center">
          <v-img
            height="140px"
            :width="person.picWidth ? person.picWidth : '200px'"
            :src="person.image"
            cover
            alt="Picture of Person"
          />
        </v-col>
        <v-col>
          <div>
            <span class="name text-primary font-weight-bold mr-8">{{ person.name }}</span>
            <span class="d-inline-flex">
              <a :href="person.facebook" target="_blank">
                <v-icon class="fab fa-facebook-square mt-n1" size="small"></v-icon>
              </a>
              <a :href="person.twitter" target="_blank">
                <v-icon class="fab fa-twitter ml-2 mt-n1" size="x-small"></v-icon>
              </a>
              <a :href="person.linkedin" target="_blank">
                <v-icon class="fab fa-linkedin ml-2 mt-n1" size="small"></v-icon>
              </a>
            </span>
          </div>
          <div class="text-tertiary pb-4">{{ person.title }}</div>
          <div>
            {{ person.bio }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
defineProps(['person']);
</script>

<style scoped>
.name {
  font-size: 1.15rem;
}
</style>
