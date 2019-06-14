<template>
  <section id="events" class="g-theme-bg-gray-light-v1 g-py-50">
    <div class="applyForm container col-sm-8 col-xl-6 col-lg-8 col-xs-9">
      <div class="container text-center g-max-width-750 g-mb-20 g-pt-10 g-pb-10">
        <div class="u-heading-v2-2--bottom g-brd-primary g-mb-20">
          <h2
            class="text-uppercase u-heading-v2__title g-font-weight-800 g-font-size-30 g-font-size-40--md"
          >Job Application</h2>
        </div>
      </div>

      <form class="form-horizontal" action="/action_page.php">
        <div class="row">
          <div class="col">
            <div class="col">
              <label class="control-label" for="name">First Name:</label>
              <input type="name" class="form-control" id="firstName" placeholder="First Name">
            </div>
          </div>
          <div class="col">
            <div class="col">
              <label class="control-label" for="name">Last Name:</label>
              <input type="name" class="form-control" id="lastName" placeholder="Last Name">
            </div>
          </div>
        </div>
        <br>
        <div class="form-group">
          <div class="col-xl-12">
            <label class="control-label" for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email">
          </div>
        </div>
        <br>
        <div class="form-group">
          <div class="col-xl-12">
            <label class="control-label" for="job">Job-Titles:</label>
            <multiselect v-model="jobTitles" :options="jobOptions" :multiple="true" id="job"></multiselect>
            <br v-if="jobTitles && jobTitles.includes('Other')">
            <textarea
              v-if="jobTitles && jobTitles.includes('Other')"
              class="form-control"
              rows="5"
              placeholder="Other"
              id="other"
            ></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="col-xl-12">
            <label class="control-label" for="job">How did you hear about us?:</label>
            <multiselect v-model="hearAboutUs" :options="hearOptions" :multiple="true" id="job"></multiselect>
            <br v-if="hearAboutUs && hearAboutUs.includes('Other')">
            <textarea
              v-if="hearAboutUs && hearAboutUs.includes('Other')"
              class="form-control"
              rows="5"
              placeholder="Other"
              id="other"
            ></textarea>
          </div>
        </div>
        <br>
        <div class="form-group">
          <div class="col-xl-12">
            <label class="control-label" for="uploadResume">Upload Resume</label>
            <b-form-file
              v-model="file"
              :state="Boolean(file)"
              placeholder="Choose a file..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
          </div>
        </div>
        <br>
        <div class="form-group">
          <div class="col-xl-12">
            <label class="control-label" for="comments">Comments:</label>
            <textarea class="form-control" rows="5" placeholder="Comments" id="comments"></textarea>
          </div>
        </div>
        <br>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import Multiselect from 'vue-multiselect';
import { BFormFile } from 'bootstrap-vue';

export default {
  components: {
    Multiselect,
    BFormFile
  },
  data() {
    return {
      jobTitles: null,
      jobOptions: [
        'Software Developer',
        'Project Manager',
        'System Engineer',
        'Cloud Engineer',
        'Data Scientist',
        'Quality Assurance/Tester',
        'Intern',
        'Other'
      ],
      hearAboutUs: null,
      hearOptions: ['Website', 'LinkedIn', 'Facebook', 'Indeed', 'Glassdoor', 'Referral', 'Other'],
      file: null
    };
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
