<template>
  <div>
    <Modal
      :headline="modalHeadline"
      :body="modalBody"
      closeButtonText="Ok"
      :show.sync="modalDisplay"
      @update:show="modalDisplay = $event"
    >
    </Modal>
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
            <!-- First Name Field -->
            <div class="col">
              <div class="col">
                <div class="input" :class="{ invalid: !valid.firstName }">
                  <label class="control-label" for="name">*First Name:</label>
                  <input type="name" class="form-control" id="firstName" v-model="firstName" placeholder="First Name" />
                  <p class="invalidMsg" v-if="!valid.firstName">Please enter a first name.</p>
                </div>
              </div>
            </div>

            <!-- Last Name Field -->
            <div class="col">
              <div class="col">
                <div class="input" :class="{ invalid: !valid.lastName }">
                  <label class="control-label" for="name">*Last Name:</label>
                  <input type="name" class="form-control" id="lastName" v-model="lastName" placeholder="Last Name" />
                  <p class="invalidMsg" v-if="!valid.lastName">Please enter a last name.</p>
                </div>
              </div>
            </div>
          </div>
          <br />

          <!-- Email Field -->
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

          <!-- Job Titles Field -->
          <div class="form-group">
            <div class="col-xl-12">
              <div class="input" :class="{ invalid: !valid.jobTitles }">
                <label class="control-label" for="job">*Job Title:</label>
                <v-autocomplete
                  placeholder="Select an option"
                  v-model="jobTitles"
                  :items="jobOptions"
                  bg-color="white"
                  :base-color="!valid.jobTitles ? 'red' : 'grey-darken-1'"
                  density="compact"
                  variant="outlined"
                  hide-details
                  multiple
                  chips
                  closable-chips
                  id="job"
                ></v-autocomplete>
                <p class="invalidMsg" v-if="!valid.jobTitles">Please select at least one job title.</p>

                <!-- Other Job Title Text Field -->
                <div
                  class="input"
                  :class="{ invalid: !valid.otherJobTitle }"
                  v-if="jobTitles && jobTitles.includes('Other')"
                >
                  <textarea
                    v-if="jobTitles && jobTitles.includes('Other')"
                    class="form-control"
                    rows="5"
                    placeholder="Other"
                    id="other"
                    v-model="otherJobTitle"
                  ></textarea>
                  <p class="invalidMsg" v-if="!valid.otherJobTitle">Other field cannot be blank.</p>
                </div>
              </div>
            </div>
          </div>
          <br />

          <!-- Clearance Field -->
          <div class="form-group">
            <div class="col-xl-12">
              <div class="input" :class="{ invalid: !valid.clearance }">
                <label class="control-label" for="job">*Clearance Level:</label>
                <v-autocomplete
                  placeholder="Select an option"
                  v-model="clearance"
                  :items="clearanceLevels"
                  bg-color="white"
                  :base-color="!valid.clearance ? 'red' : 'grey-darken-1'"
                  density="compact"
                  variant="outlined"
                  hide-details
                  id="job"
                ></v-autocomplete>
                <p class="invalidMsg" v-if="!valid.clearance">Please select a clearance level.</p>
              </div>
            </div>
          </div>
          <br />

          <!-- How Did You Hear About Us Field -->
          <div class="form-group">
            <div class="col-xl-12">
              <label class="control-label" for="job">How did you hear about us?:</label>
              <v-autocomplete
                placeholder="Select an option"
                v-model="hearAboutUs"
                :items="hearOptions"
                bg-color="white"
                base-color="grey-darken-1"
                density="compact"
                variant="outlined"
                hide-details
                multiple
                chips
                closable-chips
                id="job"
              ></v-autocomplete>
              <!-- Referral Text Field -->
              <div
                class="input"
                :class="{ invalid: !valid.referralHearAboutUs }"
                v-if="hearAboutUs && hearAboutUs.includes('Employee Referral')"
              >
                <br />
                <textarea
                  v-if="hearAboutUs && hearAboutUs.includes('Employee Referral')"
                  class="form-control"
                  rows="1"
                  placeholder="Employee Referral"
                  id="referral"
                  v-model="referralHearAboutUs"
                ></textarea>
                <p class="invalidMsg" v-if="!valid.referralHearAboutUs">Please list who referred you.</p>
              </div>

              <!-- Other Hear About Us Text Field -->
              <div
                class="input"
                :class="{ invalid: !valid.otherHearAboutUs }"
                v-if="hearAboutUs && hearAboutUs.includes('Other')"
              >
                <br />
                <textarea
                  class="form-control"
                  rows="5"
                  placeholder="Other"
                  id="other"
                  v-model="otherHearAboutUs"
                ></textarea>
                <p class="invalidMsg" v-if="!valid.otherHearAboutUs">Other field cannot be blank.</p>
              </div>
            </div>
          </div>
          <br />

          <!-- Resume Field -->
          <div>
            <div class="col-xl-12">
              <div class="input" :class="{ invalid: !valid.resume }">
                <label class="control-label" for="uploadResume">*Upload Resume</label>
                <v-file-input
                  v-model="files"
                  accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/rtf"
                  :rules="fileRules"
                  prepend-inner-icon="mdi-paperclip"
                  prepend-icon=""
                  bg-color="white"
                  class=""
                  color="green"
                  :base-color="!valid.resume ? 'red' : 'grey-darken-1'"
                  variant="outlined"
                  single-line
                  show-size
                >
                  <template v-slot:label>
                    <span class="text-grey-darken-1">Drop here to upload (accepted formats: pdf, doc, docx, rtf)</span>
                  </template>
                </v-file-input>
                <p class="invalidMsg" v-if="!valid.resume">Please upload a valid resume.</p>
              </div>
            </div>
          </div>
          <br />

          <!-- Comments Field -->
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

          <!-- Submit Button -->
          <div>
            <div class="col-sm-offset-2 col-sm-10">
              <button v-if="!submitEnabled" class="btn btn-success" type="button" :disabled="submitEnabled">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Submitting
              </button>
              <button v-else type="submit" :disabled="!submitEnabled" class="btn btn-success" style="opacity: 0.8">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import useValidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import Header from '../home/Header.vue';
import axios from 'axios';
import modal from '../AlertModal.vue';

// METHODS -----
// toggle apply form succesfully submitted page
function submittedRedirect() {
  this.showMe = false;
  this.$emit('switched', this.showMe);
}
// return true if all client-side validation passes
function isAllValid() {
  for (const v of Object.values(this.valid)) {
    if (!v) {
      return false;
    }
  }
  return true;
}
function validateFirstName() {
  this.v$.firstName.$touch();
  this.valid.firstName = this.v$.firstName.$errors.length === 0;
}
function validateLastName() {
  this.v$.lastName.$touch();
  this.valid.lastName = this.v$.lastName.$errors.length === 0;
}
function validateEmail() {
  this.v$.email.$touch();
  this.valid.email = this.v$.email.$errors.length === 0;
}
function validateJobTitles() {
  this.v$.jobTitles.$touch();
  this.valid.jobTitles = this.v$.jobTitles.$errors.length === 0;
  if (this.jobTitles.includes('Other')) {
    this.v$.otherJobTitle.$touch();
    this.valid.otherJobTitle = this.v$.otherJobTitle.$errors.length === 0;
  } else {
    this.valid.otherJobTitle = true;
    this.otherJobTitle = '';
  }
}
function validateClearance() {
  this.v$.clearance.$touch();
  this.valid.clearance = this.v$.clearance.$errors.length === 0;
}
function validateHearAboutUs() {
  if (this.hearAboutUs.includes('Other')) {
    this.v$.otherHearAboutUs.$touch();
    this.valid.otherHearAboutUs = this.v$.otherHearAboutUs.$errors.length === 0;
  } else {
    this.valid.otherHearAboutUs = true;
    this.otherHearAboutUs = '';
  }

  if (this.hearAboutUs.includes('Employee Referral')) {
    this.v$.referralHearAboutUs.$touch();
    this.valid.referralHearAboutUs = this.v$.referralHearAboutUs.$errors.length === 0;
  } else {
    this.valid.referralHearAboutUs = true;
    this.referralHearAboutUs = '';
  }
}
function validateResume() {
  this.v$.files.$touch();
  this.valid.resume = this.v$.files.$errors.length === 0;
}
// alert modal for duplicate intern applications via Handshake
function checkIntern(event) {
  if (event == 'Intern') {
    this.modalHeadline = 'Already applied?';
    this.modalBody = 'If you applied through Handshake, we already recieved your application.';
    this.modalDisplay = true;
  }
}
// uploads a signatured file to S3
async function uploadResumeToS3(data, file) {
  const awsFormData = new FormData();
  Object.keys(data.signature).forEach((key) => awsFormData.append(key, data.signature[key]));
  awsFormData.append('file', file);
  let resp = await axios.post(data.postEndpoint, awsFormData);
  return resp;
}
// on form submission
async function onSubmit() {
  this.submitEnabled = false; // disable submit button during form processing
  /* start client-side validation check */
  this.validateFirstName();
  this.validateLastName();
  this.validateEmail();
  this.validateJobTitles();
  this.validateClearance();
  this.validateHearAboutUs();
  this.validateResume();
  /* end client-side validation check */

  // process form to back-end if client-side validation passes
  if (this.isAllValid()) {
    try {
      // use our own naming convention
      let ext = this.files[0].name.split('.').pop();
      let customFilename = `${this.lastName}${this.firstName}Resume`;
      customFilename = customFilename.replace(/[^a-zA-Z]/gi, '');
      customFilename += `.${ext}`;

      const data = {
        firstName: this.firstName.trim(),
        lastName: this.lastName.trim(),
        email: this.email.trim(),
        jobTitles: this.jobTitles,
        clearance: this.clearance,
        otherJobTitle: this.otherJobTitle.trim(),
        hearAboutUs: this.hearAboutUs,
        referralHearAboutUs: this.referralHearAboutUs.trim(),
        otherHearAboutUs: this.otherHearAboutUs.trim(),
        comments: this.comments.trim(),
        fileNames: [customFilename]
      };

      // content upload
      const baseUrl = process.env.VUE_APP_API;
      const response = await axios.post(`${baseUrl}/apply`, data);
      const key = response.data.id;
      const file = this.files[0];
      const formData = new FormData();
      formData.append('filePath', customFilename);
      formData.append('contentType', file.type);
      let resp = await axios.post(`${baseUrl}/upload/${key}/${customFilename}`, formData);
      await this.uploadResumeToS3(resp.data, file);
      this.submittedRedirect();

      // file upload
      return response;
    } catch (err) {
      // Error submitting apply form
      console.error(err); // eslint-disable-line no-console
      this.modalHeadline = 'Error';
      this.modalBody = 'Error submitting apply form. Please try again.';
      this.modalDisplay = true;
      this.submitEnabled = true;
      return err;
    }
  }
  this.submitEnabled = true; // reenable submit button after form processing
}
//END METHODS -----
//comment
export default {
  data() {
    return {
      v$: useValidate(),
      valid: {
        firstName: true,
        lastName: true,
        email: true,
        jobTitles: true,
        clearance: true,
        otherJobTitle: true,
        resume: true,
        comments: true,
        otherHearAboutUs: true,
        referralHearAboutUs: true
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
      clearance: null,
      clearanceLevels: ['None', 'Public Trust', 'Secret', 'TS', 'TS/SCI', 'TS/SCI with CI', 'TS/SCI with FSP'],
      hearAboutUs: [],
      hearOptions: ['Website', 'LinkedIn', 'Facebook', 'Twitter', 'Indeed', 'Glassdoor', 'Employee Referral', 'Other'],
      referralHearAboutUs: '',
      otherHearAboutUs: '',
      files: [],
      fileRules: [
        (v) => {
          return !v || !v.length || v[0].size < 6000000 || 'File exceeds maximum size of 6 MB';
        }
      ],
      comments: '',
      submitEnabled: true,
      modalDisplay: false,
      modalBody: '',
      modalHeadline: ''
    };
  },
  validations() {
    return {
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
        hasJobTitle: (val) => {
          return val && val.length > 0;
        }
      },
      clearance: {
        required
      },
      otherJobTitle: {
        required
      },
      files: {
        hasFiles: (val) => {
          return val && val.length > 0;
        },
        validFileSize: (val) => {
          return val && val[0] && val[0].size < 6000000;
        }
      },
      otherHearAboutUs: {
        required
      },
      referralHearAboutUs: {
        required
      }
    };
  },
  components: {
    formHeader: Header,
    Modal: modal
  },
  methods: {
    // toggle apply form succesfully submitted page
    submittedRedirect,
    // populate data.files with dropzone process queue files
    uploadResumeToS3,
    // return true if all client-side validation passes
    isAllValid,
    validateFirstName,
    validateLastName,
    validateEmail,
    validateJobTitles,
    validateClearance,
    validateHearAboutUs,
    validateResume,
    // alerts user on intern application to prevent duplicate applications
    checkIntern,
    // on form submission
    onSubmit
  }
};
</script>

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

.v-input--error * {
  color: red !important;
}
</style>
