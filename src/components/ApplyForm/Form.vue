<template>
  <section id="events" class="g-theme-bg-gray-light-v1 g-py-50">
    <div class="applyForm container col-sm-8">
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
            <multiselect v-model="jobTitles" :options="options" :multiple="true" id="job"></multiselect>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input type="checkbox"> Remember me
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import Multiselect from 'vue-multiselect';

export default {
  components: {
    Multiselect
  },
  data() {
    return {
      jobTitles: null,
      options: [
        'Software Developer',
        'Project Manager',
        'System Engineer',
        'Cloud Engineer',
        'Data Scientist',
        'Quality Assurance/Tester',
        'Intern',
        'Other'
      ]
    };
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
