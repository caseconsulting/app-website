<template>
  <div class="text-center px-2">
    <h3 class="text-secondary mb-4">Reach out if you are a...</h3>

    <v-tabs v-if="!xs" v-model="tab" color="secondary" align-tabs="center" class="mx-auto">
      <v-tab v-for="job in jobs" :key="job.title" :value="job.title">
        {{ job.title }}
      </v-tab>
    </v-tabs>

    <v-window
      v-model="tab"
      class="mt-4 mx-auto"
      show-arrows="hover"
      center-active
      style="max-width: 1000px; width: 100%"
    >
      <v-window-item v-for="job in jobs" :key="job.title" :value="job.title">
        <v-card variant="tonal" class="py-2">
          <v-row no-gutters>
            <v-col :cols="xs ? 12 : 9" class="pa-4">
              <v-card-title class="text-secondary">{{ job.title }}</v-card-title>
              <v-card-text>
                {{ job.description }}
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn variant="elevated" color="secondary" class="text-white" to="/apply-form"> Apply Now </v-btn>
              </v-card-actions>
            </v-col>
            <v-col v-if="!xs" cols="3" class="justify-center align-center d-flex pa-4">
              <v-img src="/assets/custom/img/case/nav_logo.png" alt="Job Image" width="150" />
            </v-col>
          </v-row>
        </v-card>
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

const { xs, smAndDown, mdAndUp } = useDisplay();
const tab = ref('Software Developer');
const jobs = ref([
  {
    title: 'Software Developer',
    description:
      'We are looking for a skilled Software Developer to join our dynamic team. The ideal candidate will have experience in full-stack development, proficiency in multiple programming languages, and a passion for creating innovative solutions. Responsibilities include designing, coding, and testing software applications, collaborating with cross-functional teams, and staying updated with the latest industry trends.'
  },
  {
    title: 'Project Manager',
    description:
      'We are seeking an experienced Project Manager to lead and oversee various projects within our organization. The successful candidate will be responsible for planning, executing, and closing projects, ensuring they are completed on time, within scope, and within budget. Key responsibilities include coordinating with stakeholders, managing project teams, and mitigating risks.'
  },
  {
    title: 'System Engineer',
    description:
      'We are looking for a knowledgeable System Engineer to help us implement and manage our IT infrastructure. The ideal candidate will have a strong background in system administration, network management, and cloud technologies. Responsibilities include designing and deploying scalable systems, monitoring performance, and troubleshooting issues.'
  },
  {
    title: 'Cloud Engineer',
    description:
      'We are looking for a skilled Cloud Engineer to join our team. The ideal candidate will have experience with cloud platforms, containerization, and microservices architecture. Responsibilities include designing and implementing cloud solutions, optimizing performance, and ensuring security best practices.'
  },
  {
    title: 'Data Scientist',
    description:
      'We are seeking a talented Data Scientist to analyze and interpret complex data sets to help drive informed business decisions. The ideal candidate will have experience in statistical analysis, machine learning, and data visualization. Responsibilities include collecting and processing data, building predictive models, and communicating findings to stakeholders.'
  },
  {
    title: 'QA Tester',
    description:
      'We are looking for a detail-oriented QA Tester to ensure the quality and functionality of our software products. The ideal candidate will have experience in manual and automated testing, as well as a strong understanding of software development life cycles. Responsibilities include creating test plans, executing test cases, and reporting defects.'
  }
]);
</script>
