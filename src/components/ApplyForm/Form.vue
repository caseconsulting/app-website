<template>
  <div>
    <form-header></form-header>
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
                  ></textarea>
                  <p class="invalidMsg" v-if="!valid.otherJobTitle">Other field can't be blank</p>
                </div>
                <p class="invalidMsg" v-if="!valid.jobTitles">Please select at least one job title.</p>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-xl-12">
              <label class="control-label" for="job">How did you hear about us?:</label>
              <multiselect v-model="hearAboutUs" :options="hearOptions" :multiple="true" id="job"></multiselect>
              <div
                class="input"
                :class="{ invalid: !valid.otherHearAboutUs }"
                v-if="hearAboutUs && hearAboutUs.includes('Other')"
              >
                <br />
                <textarea
                  v-if="hearAboutUs && hearAboutUs.includes('Other')"
                  class="form-control"
                  rows="5"
                  placeholder="Other"
                  id="other"
                  v-model="otherHearAboutUs"
                ></textarea>
                <p class="invalidMsg" v-if="!valid.otherHearAboutUs">Other field can't be blank</p>
              </div>
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
                  :awss3="awss3"
                  @vdropzone-s3-upload-error="s3UploadError"
                  @vdropzone-s3-upload-success="s3UploadSuccess"
                  @vdropzone-queue-complete="submittedRedirect"
                ></vue-dropzone>
                <p class="invalidMsg" v-if="!valid.resume">Please upload a resume</p>
              </div>
            </div>
          </div>
          <br />
          <div>
            <div class="col-xl-12">
              <label class="control-label" for="comments">Comments:</label>
              <textarea
                class="form-control"
                rows="5"
                placeholder="Comments"
                v-model="comments"
                id="comments"
              ></textarea>
            </div>
          </div>
          <br />
          <div>
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-success" style="opacity: 0.8;">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect';
import vueDropzone from 'vue2-dropzone';
import { required, email } from 'vuelidate/lib/validators';
import Header from '../home/Header.vue';
import axios from 'axios';

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
        comments: true,
        otherHearAboutUs: true
      },
      submitted: false,
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
      hearAboutUs: [],
      hearOptions: ['Website', 'LinkedIn', 'Facebook', 'Twitter', 'Indeed', 'Glassdoor', 'Referral', 'Other'],
      otherHearAboutUs: '',
      files: [],
      uploads: [],
      dropOptions: {
        autoProcessQueue: false,
        thumbnailWidth: '150',
        thumbnailHeight: '150',
        key: '',
        init: function() {
          var myDropZone = this;
          myDropZone.on('addedfile', function(file) {
            if (file.type.match(/application.pdf/)) {
              myDropZone.emit('thumbnail', file, '/assets/custom/img/icons/pdfIcon.png');
            } else if (file.type.match(/application.msword/)) {
              myDropZone.emit('thumbnail', file, '/assets/custom/img/icons/docIcon.png');
            } else if (file.type.match(/application.vnd.openxmlformats-officedocument.wordprocessingml.document/)) {
              myDropZone.emit('thumbnail', file, '/assets/custom/img/icons/docxIcon.png');
            }

            myDropZone.getQueuedFiles().forEach(function(f) {
              if (f.name === file.name) {
                alert('Form cannot have duplicate file names');
                myDropZone.removeFile(file);
              }
            });
          });

          myDropZone.on('error', function(file, message) {
            if (file.size > 6000000) {
              // error message for max file size (6MB)
              alert('Files must be less than 6MB');
            } else if (myDropZone.getQueuedFiles().length >= 3) {
              // error message for max file number exceeded (3)
              alert('Form cannot contain more than 3 files');
            } else {
              alert(message);
            }
            myDropZone.removeFile(file);
          });
        },
        acceptedFiles:
          'image/jpeg, image/png, image/gif, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        addRemoveLinks: true,
        maxFilesize: 6,
        maxFiles: 3
      },
      awss3: {
        signingURL: file => {
          console.log('filesigning: ' + this.$refs.dropzone.key + '/' + file.upload.filename);
          return `${process.env.VUE_APP_API}/upload/` + this.$refs.dropzone.key + '/' + file.upload.filename;
        },
        headers: {},
        params: {},
        sendFileToServer: false
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
    },
    otherHearAboutUs: {
      required
    }
  },
  components: {
    Multiselect,
    vueDropzone,
    formHeader: Header
  },
  methods: {
    s3UploadError(errorMessage) {
      console.error('Error uploading:', errorMessage);
    },
    s3UploadSuccess(s3ObjectLocation) {
      console.log('Upload was successful');
      this.uploads.push(s3ObjectLocation);
    },
    submittedRedirect() {
      if (this.submitted) {
        this.showMe = false;
        this.$emit('switched', this.showMe);
      }
    },
    getFiles() {
      for (let i = 0; i < this.$refs.dropzone.getQueuedFiles().length; i++) {
        this.files.push(this.$refs.dropzone.getQueuedFiles()[i].name);
      }
    },
    try() {
      return false;
    },
    isAllValid() {
      for (const v of Object.values(this.valid)) {
        if (!v) {
          return false;
        }
      }
      return true;
    },
    async onSubmit() {
      this.$v.firstName.$touch();
      this.valid.firstName = this.$v.firstName.required;

      this.$v.lastName.$touch();
      this.valid.lastName = this.$v.lastName.required;

      this.$v.email.$touch();
      this.valid.email = this.$v.email.email && this.$v.email.required;

      this.$v.jobTitles.$touch();
      this.valid.jobTitles = this.$v.jobTitles.hasJobTitle;

      if (this.jobTitles.includes('Other')) {
        this.$v.otherJobTitle.$touch();
        this.valid.otherJobTitle = this.$v.otherJobTitle.required;
      } else {
        this.valid.otherJobTitle = true;
      }

      if (this.hearAboutUs.includes('Other')) {
        this.$v.otherHearAboutUs.$touch();
        this.valid.otherHearAboutUs = this.$v.otherHearAboutUs.required;
      } else {
        this.valid.otherHearAboutUs = true;
      }

      this.getFiles();

      this.$v.files.$touch();
      this.valid.resume = this.$v.files.hasFiles;

      if (this.isAllValid()) {
        try {
          const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            jobTitles: this.jobTitles,
            otherJobTitle: this.otherJobTitle,
            hearAboutUs: this.hearAboutUs,
            otherHearAboutUs: this.otherHearAboutUs,
            comments: this.comments,
            fileNames: this.files
          };

          this.submitted = true;

          // content upload
          const baseUrl = process.env.VUE_APP_API;
          const response = await axios.post(`${baseUrl}/apply`, data);
          console.log(response.data.id);
          console.log(response); // eslint-disable-line no-console
          this.$refs.dropzone.key = response.data.id;
          console.log('key' + this.$refs.dropzone.key);

          // file upload
          console.log(this.$refs.dropzone.getQueuedFiles());
          this.$refs.dropzone.processQueue();

          return response;
        } catch (err) {
          console.error(err); // eslint-disable-line no-console
          return err;
        }
      }
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="vue2-dropzone/dist/vue2Dropzone.min.css"></style>

<style>
.input.invalid label {
  color: red;
}

.input.invalid input {
  border: 1px solid red;
}

.invalidMsg {
  font-size: 12px;
  color: red;
}

.form-control:focus {
  border-color: #42b883;
}

.vue-dropzone > .dz-preview .dz-remove {
  border: 2px #fff solid !important;
}

.dropzone .dz-preview .dz-progress {
  opacity: 0 !important;
}
</style>
