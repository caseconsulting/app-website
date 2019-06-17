<template>
  <section id="apply" class="g-theme-bg-gray-light-v1 g-py-50">
    <div class="applyForm container col-sm-8 col-xl-6 col-lg-8 col-xs-9">
      <div class="container text-center g-max-width-750 g-mb-20 g-pt-10 g-pb-10">
        <div class="u-heading-v2-2--bottom g-brd-primary g-mb-20">
          <h2 class="text-uppercase u-heading-v2__title g-font-weight-800 g-font-size-30 g-font-size-40--md">
            Job Application
          </h2>
        </div>
      </div>

      <form @submit.prevent="onSubmit" class="form-horizontal">
        <div class="row">
          <div class="col">
            <div class="col">
              <div class="input" :class="{ invalid: !valid.firstName }">
                <label class="control-label" for="name">*First Name:</label>
                <input type="name" class="form-control" id="firstName" v-model="firstName" placeholder="First Name" />
                <p class="invalidMsg" v-if="!valid.firstName">First name can't be blank</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="col">
              <div class="input" :class="{ invalid: !valid.lastName }">
                <label class="control-label" for="name">*Last Name:</label>
                <input type="name" class="form-control" id="lastName" v-model="lastName" placeholder="Last Name" />
                <p class="invalidMsg" v-if="!valid.lastName">Last name can't be blank</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="form-group">
          <div class="col-xl-12">
            <div class="input" :class="{ invalid: !valid.email }">
              <label class="control-label" for="email">*Email:</label>
              <input type="text" class="form-control" id="email" placeholder="Enter email" v-model="email" />
              <p class="invalidMsg" v-if="!valid.email">Please provide a valid email address.</p>
            </div>
          </div>
        </div>
        <br />
        <div class="form-group">
          <div class="col-xl-12">
            <div class="input" :class="{ invalid: !valid.jobTitles }">
              <label class="control-label" for="job">*Job Title:</label>
              <multiselect v-model="jobTitles" :options="jobOptions" :multiple="true" id="job"></multiselect>

              <div
                class="input"
                :class="{ invalid: !valid.otherJobTitle }"
                v-if="jobTitles && jobTitles.includes('Other')"
              >
                <br />
                <textarea
                  v-if="jobTitles && jobTitles.includes('Other')"
                  class="form-control"
                  rows="5"
                  placeholder="Other"
                  id="other"
                  v-model="otherJobTitle"
                >
                </textarea>
                <p class="invalidMsg" v-if="!valid.otherJobTitle">Other job title can't be blank</p>
              </div>
              <p class="invalidMsg" v-if="!valid.jobTitles">Please select at least one job title.</p>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-xl-12">
            <label class="control-label" for="job">How did you hear about us?:</label>
            <multiselect v-model="hearAboutUs" :options="hearOptions" :multiple="true" id="job"></multiselect>
            <br v-if="hearAboutUs && hearAboutUs.includes('Other')" />
            <textarea
              v-if="hearAboutUs && hearAboutUs.includes('Other')"
              class="form-control"
              rows="5"
              placeholder="Other"
              id="other"
            ></textarea>
          </div>
        </div>
        <br />
        <div>
          <div class="col-xl-12">
            <div class="input" :class="{ invalid: !valid.resume }">
              <label class="control-label" for="uploadResume">*Upload Resume</label>
              <vue-dropzone
                ref="dropzone"
                id="drop1"
                :options="dropOptions"
                @vdropzone-thumbnail="vfileAdded"
              ></vue-dropzone>
              <p class="invalidMsg" v-if="!valid.resume">Please upload a resume</p>

              <br />
              <button class="btn btn-default" @click="removeAllFiles">Remove All Files</button>

              <p v-for="file in files" :key="file">{{ file }}</p>
            </div>
          </div>
        </div>
        <br />
        <div>
          <div class="col-xl-12">
            <label class="control-label" for="comments">Comments:</label>
            <textarea class="form-control" rows="5" placeholder="Comments" v-model="comments" id="comments"></textarea>
          </div>
        </div>
        <br />
        <div>
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" style="opacity: 0.8;">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import Multiselect from 'vue-multiselect';
// import { BFormFile } from 'bootstrap-vue';
import vueDropzone from 'vue2-dropzone';
import { required, email } from 'vuelidate/lib/validators';

// function jobTitlesNotEmpty() {
//   return this.jobTitles != null && this.jobTitles.length > 0;
// }
//
// function resumeNotEmpty() {
//   return this.files.length > 0;
// }

export default {
  data() {
    return {
      valid: {
        firstName: true,
        lastName: true,
        email: true,
        jobTitles: true,
        otherJobTitle: true,
        resume: true,
        comments: true
      },
      firstName: '',
      lastName: '',
      email: '',
      jobTitles: [],
      otherJobTitle: '',
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
      files: [],
      dropOptions: {
        init: function() {
          this.on('addedfile', function(file) {
            if (!file.type.match(/image.*/)) {
              this.emit('thumbnail', file, '/assets/logo.png');
            }
          });
        },
        acceptedFiles: 'image/jpeg,application/pdf,text/plain',

        url: 'https://httpbin.org/post'
        // maxFilesize: 2,
        //maxFiles: 4,
        // thumbnailWidth: 150,
        // thumbnailHeight: 150
      },
      comments: ''
    };
  },
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
    email: {
      required,
      email
    },
    jobTitles: {
      hasJobTitle: val => {
        return val && val.length > 0;
      }
    },
    otherJobTitle: {
      required
    },
    files: {
      hasFiles: val => {
        return val && val.length > 0;
      }
    }
  },
  components: {
    Multiselect,
    // BFormFile,
    vueDropzone
  },
  methods: {
    removeAllFiles() {
      this.$refs.dropzone.removeAllFiles();
      this.files = [];
    },
    try() {
      return false;
    },
    vfileAdded(file) {
      this.files.push(file.name);
    },
    onSubmit() {
      this.$v.firstName.$touch();
      this.valid.firstName = this.$v.firstName.required;

      this.$v.lastName.$touch();
      this.valid.lastName = this.$v.lastName.required;

      this.$v.email.$touch();
      this.valid.email = this.$v.email.email && this.$v.email.required;

      this.$v.jobTitles.$touch();
      this.valid.jobTitles = this.$v.jobTitles.hasJobTitle;

      this.$v.otherJobTitle.$touch();
      this.valid.otherJobTitle = this.$v.otherJobTitle.required;

      this.$v.files.$touch();
      this.valid.resume = this.$v.files.hasFiles;
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="vue2-dropzone/dist/vue2Dropzone.min.css"></style>

<style scoped>
.input.invalid label {
  color: red;
}

.input.invalid input {
  border: 1px solid red;
  /* background-color: #ffc9aa; */
}

.invalidMsg {
  font-size: 12px;
  color: red;
}
</style>
