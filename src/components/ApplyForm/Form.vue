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
                  id="clearances"
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
              <button v-if="!submitEnabled" class="btn bg-secondary" type="button" :disabled="submitEnabled">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Submitting
              </button>
              <button v-else type="submit" :disabled="!submitEnabled" class="btn bg-secondary" style="opacity: 0.8">
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
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import axios from 'axios';
import modal from '../AlertModal.vue';
import { ref, reactive, computed } from 'vue';

export default {
  setup(props, { emit }) {
    // Reactive form data - individual refs for template compatibility
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const jobTitles = ref([]);
    const otherJobTitle = ref('');
    const clearance = ref(null);
    const hearAboutUs = ref([]);
    const referralHearAboutUs = ref('');
    const otherHearAboutUs = ref('');
    const files = ref([]);
    const comments = ref('');

    // Create reactive object for vuelidate - need to pass the actual values, not refs
    const formData = {
      firstName,
      lastName,
      email,
      jobTitles,
      otherJobTitle,
      clearance,
      hearAboutUs,
      referralHearAboutUs,
      otherHearAboutUs,
      files,
      comments
    };

    const state = reactive({
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
      clearanceLevels: ['None', 'Public Trust', 'Secret', 'TS', 'TS/SCI', 'TS/SCI with CI', 'TS/SCI with FSP'],
      hearOptions: ['Website', 'LinkedIn', 'Facebook', 'Twitter', 'Indeed', 'Glassdoor', 'Employee Referral', 'Other'],
      fileRules: [
        (v) => {
          return !v || !v.length || v[0].size < 6000000 || 'File exceeds maximum size of 6 MB';
        }
      ],
      submitEnabled: true,
      modalDisplay: false,
      modalBody: '',
      modalHeadline: ''
    });

    // Validation rules
    const validationRules = computed(() => ({
      firstName: { required },
      lastName: { required },
      email: { required, email },
      jobTitles: {
        hasJobTitle: (val) => val && val.length > 0
      },
      clearance: { required },
      otherJobTitle: { required },
      files: {
        hasFiles: (val) => {
          // Handle both array of files and single file cases
          if (Array.isArray(val)) {
            return val.length > 0;
          }
          return val != null && val !== undefined && val !== '';
        },
        validFileSize: (val) => {
          if (Array.isArray(val) && val.length > 0) {
            return val[0].size < 6000000;
          }
          if (val && val.size) {
            return val.size < 6000000;
          }
          return true; // If no file, size is valid
        }
      },
      otherHearAboutUs: { required },
      referralHearAboutUs: { required }
    }));

    // Initialize vuelidate
    const v$ = useVuelidate(validationRules, formData);

    // Methods
    const submittedRedirect = () => {
      emit('switched', false);
    };

    const isAllValid = () => {
      for (const v of Object.values(state.valid)) {
        if (!v) {
          return false;
        }
      }
      return true;
    };

    const validateFirstName = () => {
      v$.value.firstName.$touch();
      state.valid.firstName = v$.value.firstName.$errors.length === 0;
    };

    const validateLastName = () => {
      v$.value.lastName.$touch();
      state.valid.lastName = v$.value.lastName.$errors.length === 0;
    };

    const validateEmail = () => {
      v$.value.email.$touch();
      state.valid.email = v$.value.email.$errors.length === 0;
    };

    const validateJobTitles = () => {
      v$.value.jobTitles.$touch();
      state.valid.jobTitles = v$.value.jobTitles.$errors.length === 0;
      if (jobTitles.value.includes('Other')) {
        v$.value.otherJobTitle.$touch();
        state.valid.otherJobTitle = v$.value.otherJobTitle.$errors.length === 0;
      } else {
        state.valid.otherJobTitle = true;
        otherJobTitle.value = '';
      }
    };

    const validateClearance = () => {
      v$.value.clearance.$touch();
      state.valid.clearance = v$.value.clearance.$errors.length === 0;
    };

    const validateHearAboutUs = () => {
      if (hearAboutUs.value.includes('Other')) {
        v$.value.otherHearAboutUs.$touch();
        state.valid.otherHearAboutUs = v$.value.otherHearAboutUs.$errors.length === 0;
      } else {
        state.valid.otherHearAboutUs = true;
        otherHearAboutUs.value = '';
      }

      if (hearAboutUs.value.includes('Employee Referral')) {
        v$.value.referralHearAboutUs.$touch();
        state.valid.referralHearAboutUs = v$.value.referralHearAboutUs.$errors.length === 0;
      } else {
        state.valid.referralHearAboutUs = true;
        referralHearAboutUs.value = '';
      }
    };

    const validateResume = () => {
      v$.value.files.$touch();
      state.valid.resume = v$.value.files.$errors.length === 0;
    };

    const checkIntern = (event) => {
      if (event == 'Intern') {
        state.modalHeadline = 'Already applied?';
        state.modalBody = 'If you applied through Handshake, we already recieved your application.';
        state.modalDisplay = true;
      }
    };

    const uploadResumeToS3 = async (data, file) => {
      const awsFormData = new FormData();
      Object.keys(data.signature).forEach((key) => awsFormData.append(key, data.signature[key]));
      awsFormData.append('file', file);
      let resp = await axios.post(data.postEndpoint, awsFormData);
      return resp;
    };

    const onSubmit = async () => {
      state.submitEnabled = false; // disable submit button during form processing
      /* start client-side validation check */
      validateFirstName();
      validateLastName();
      validateEmail();
      validateJobTitles();
      validateClearance();
      validateHearAboutUs();
      validateResume();
      /* end client-side validation check */

      // process form to back-end if client-side validation passes
      if (isAllValid()) {
        try {
          // Handle file - v-file-input might return different structures
          let file;
          if (Array.isArray(files.value) && files.value.length > 0) {
            file = files.value[0];
          } else if (files.value && files.value.name) {
            file = files.value;
          } else {
            throw new Error('No file selected');
          }

          // use our own naming convention
          let ext = file.name.split('.').pop();
          let customFilename = `${lastName.value}${firstName.value}Resume`;
          customFilename = customFilename.replace(/[^a-zA-Z]/gi, '');
          customFilename += `.${ext}`;

          const data = {
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            email: email.value.trim(),
            jobTitles: jobTitles.value,
            clearance: clearance.value,
            otherJobTitle: otherJobTitle.value.trim(),
            hearAboutUs: hearAboutUs.value,
            referralHearAboutUs: referralHearAboutUs.value.trim(),
            otherHearAboutUs: otherHearAboutUs.value.trim(),
            comments: comments.value.trim(),
            fileNames: [customFilename]
          };

          // content upload
          const baseUrl = window.location.origin;
          const response = await axios.post(`${baseUrl}/apply`, data);
          const key = response.data.id;
          const requestFormData = new FormData();
          requestFormData.append('filePath', customFilename);
          requestFormData.append('contentType', file.type);
          let resp = await axios.post(`${baseUrl}/upload/${key}/${customFilename}`, requestFormData);
          await uploadResumeToS3(resp.data, file);
          submittedRedirect();

          // file upload
          return response;
        } catch (err) {
          // Error submitting apply form
          console.error(err); // eslint-disable-line no-console
          state.modalHeadline = 'Error';
          state.modalBody = 'Error submitting apply form. Please try again.';
          state.modalDisplay = true;
          state.submitEnabled = true;
          return err;
        }
      }
      state.submitEnabled = true; // reenable submit button after form processing
    };

    return {
      // Form data refs
      firstName,
      lastName,
      email,
      jobTitles,
      otherJobTitle,
      clearance,
      hearAboutUs,
      referralHearAboutUs,
      otherHearAboutUs,
      files,
      comments,
      // State
      ...state,
      // Validation
      v$,
      // Methods
      submittedRedirect,
      uploadResumeToS3,
      isAllValid,
      validateFirstName,
      validateLastName,
      validateEmail,
      validateJobTitles,
      validateClearance,
      validateHearAboutUs,
      validateResume,
      checkIntern,
      onSubmit
    };
  },
  components: {
    Modal: modal
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
