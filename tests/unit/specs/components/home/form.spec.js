import { shallowMount } from '@vue/test-utils';
import Form from '@/components/ApplyForm/Form.vue';
import Vuelidate from 'vuelidate';
import Vue from 'vue';
Vue.use(Vuelidate);

describe('Form.vue', () => {
  let wrapper;

  // Validating First Name Test
  describe('validateFirstName', () => {
    beforeEach(() => {
      wrapper = shallowMount(Form);
    });

    describe('WHEN firstName box is empty', () => {
      beforeEach(() => {
        wrapper.setData({
          valid: {
            firstName: true
          },
          firstName: ''
        });
      });

      test('SHOULD fail validation', () => {
        wrapper.vm.validateFirstName();
        expect(wrapper.vm.$data.valid.firstName).toEqual(false);
      });
    });

    describe('WHEN firstName box is not empty', () => {
      beforeEach(() => {
        wrapper.setData({
          valid: {
            firstName: true
          },
          firstName: 'first'
        });
      });

      test('SHOULD pass validation', () => {
        wrapper.vm.validateFirstName();
        expect(wrapper.vm.$data.valid.firstName).toEqual(true);
      });
    });
  });

  // Validating Last Name Test
  describe('validateLastName', () => {
    beforeEach(() => {
      wrapper = shallowMount(Form);
    });

    describe('WHEN lastName box is empty', () => {
      beforeEach(() => {
        wrapper.setData({
          valid: {
            lastName: true
          },
          lastName: ''
        });
      });

      test('SHOULD fail validation', () => {
        wrapper.vm.validateLastName();
        expect(wrapper.vm.$data.valid.lastName).toEqual(false);
      });
    });

    describe('WHEN lastName box is not empty', () => {
      beforeEach(() => {
        wrapper.setData({
          valid: {
            lastName: true
          },
          lastName: 'last'
        });
      });

      test('SHOULD pass validation', () => {
        wrapper.vm.validateLastName();
        expect(wrapper.vm.$data.valid.lastName).toEqual(true);
      });
    });
  });

  // Validating Email Test
  describe('validateEmail', () => {
    beforeEach(() => {
      wrapper = shallowMount(Form);
    });

    describe('WHEN email box is empty', () => {
      beforeEach(() => {
        wrapper.setData({
          valid: {
            email: true
          },
          email: ''
        });
      });

      test('SHOULD fail validation', () => {
        wrapper.vm.validateEmail();
        expect(wrapper.vm.$data.valid.email).toEqual(false);
      });
    });

    describe('WHEN email box is not empty and a correct email is given', () => {
      beforeEach(() => {
        wrapper.setData({
          valid: {
            email: true
          },
          email: 'email@email.com'
        });
      });

      test('SHOULD pass validation', () => {
        wrapper.vm.validateEmail();
        expect(wrapper.vm.$data.valid.email).toEqual(true);
      });
    });

    describe('WHEN email box is not empty and an incorrect email is given', () => {
      beforeEach(() => {
        wrapper.setData({
          valid: {
            email: true
          },
          email: 'emailemailcom'
        });
      });

      test('SHOULD fail validation', () => {
        wrapper.vm.validateEmail();
        expect(wrapper.vm.$data.valid.email).toEqual(false);
      });
    });

    // Validating Job Titles Test
    describe('validateJobTitles', () => {
      beforeEach(() => {
        wrapper = shallowMount(Form);
      });

      describe('WHEN jobTitles box is empty', () => {
        beforeEach(() => {
          wrapper.setData({
            valid: {
              jobTitles: true,
              otherJobTitle: true
            },
            jobTitles: [],
            otherJobTitle: ''
          });
        });

        test('SHOULD fail validation', () => {
          wrapper.vm.validateJobTitles();
          expect(wrapper.vm.$data.valid.jobTitles).toEqual(false);
          expect(wrapper.vm.$data.valid.otherJobTitle).toEqual(true);
          expect(wrapper.vm.$data.otherJobTitle).toEqual('');
        });
      });

      describe('WHEN jobTitles box is not empty with no Other', () => {
        beforeEach(() => {
          wrapper.setData({
            valid: {
              jobTitles: true,
              otherJobTitle: true
            },
            jobTitles: ['Software Developer', 'Project Manager'],
            otherJobTitle: ''
          });
        });

        test('SHOULD pass validation', () => {
          wrapper.vm.validateJobTitles();
          expect(wrapper.vm.$data.valid.jobTitles).toEqual(true);
          expect(wrapper.vm.$data.valid.otherJobTitle).toEqual(true);
          expect(wrapper.vm.$data.otherJobTitle).toEqual('');
        });
      });

      describe('WHEN jobTitles box is not empty with other', () => {
        beforeEach(() => {
          wrapper.setData({
            valid: {
              jobTitles: true,
              otherJobTitle: true
            },
            jobTitles: ['Software Developer', 'Project Manager', 'Other'],
            otherJobTitle: 'Other Software'
          });
        });
        test('SHOULD pass validation', () => {
          wrapper.vm.validateJobTitles();
          expect(wrapper.vm.$data.valid.jobTitles).toEqual(true);
          expect(wrapper.vm.$data.valid.otherJobTitle).toEqual(true);
          expect(wrapper.vm.$data.otherJobTitle).toEqual('Other Software');
        });
      });
    });

    // Validating Hear About Us Test
    describe('validateHearAboutUs', () => {
      beforeEach(() => {
        wrapper = shallowMount(Form);
      });

      describe('WHEN hearAboutUs box is empty', () => {
        beforeEach(() => {
          wrapper.setData({
            valid: {
              hearAboutUs: true,
              otherHearAboutUs: true,
              referralHearAboutUs: true
            },
            hearAboutUs: [],
            otherHearAboutUs: '',
            referralHearAboutUs: ''
          });
        });

        test('SHOULD pass validation', () => {
          wrapper.vm.validateHearAboutUs();
          expect(wrapper.vm.$data.valid.hearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.valid.otherHearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.valid.referralHearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.otherHearAboutUs).toEqual('');
          expect(wrapper.vm.$data.referralHearAboutUs).toEqual('');
        });
      });

      describe('WHEN hearAboutUs box is not empty with other no referal', () => {
        beforeEach(() => {
          wrapper.setData({
            valid: {
              hearAboutUs: true,
              otherHearAboutUs: true,
              referralHearAboutUs: true
            },
            hearAboutUs: ['Twitter', 'Facebook', 'Other'],
            otherHearAboutUs: 'Other',
            referralHearAboutUs: ''
          });
        });
        test('SHOULD pass validation', () => {
          wrapper.vm.validateHearAboutUs();
          expect(wrapper.vm.$data.valid.hearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.valid.otherHearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.otherHearAboutUs).toEqual('Other');
          expect(wrapper.vm.$data.valid.referralHearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.referralHearAboutUs).toEqual('');
        });
      });

      describe('WHEN hearAboutUs box is not empty with no other no referral', () => {
        beforeEach(() => {
          wrapper.setData({
            valid: {
              hearAboutUs: true,
              otherHearAboutUs: true,
              referralHearAboutUs: true
            },
            hearAboutUs: ['Twitter', 'Facebook', 'Other'],
            otherHearAboutUs: '',
            referralHearAboutUs: ''
          });
        });
        test('SHOULD fail validation', () => {
          wrapper.vm.validateHearAboutUs();
          expect(wrapper.vm.$data.valid.hearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.valid.otherHearAboutUs).toEqual(false);
          expect(wrapper.vm.$data.otherHearAboutUs).toEqual('');
          expect(wrapper.vm.$data.valid.referralHearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.referralHearAboutUs).toEqual('');
        });
      });

      describe('WHEN hearAboutUs box is not empty with no Other no referral', () => {
        beforeEach(() => {
          wrapper.setData({
            valid: {
              hearAboutUs: true,
              otherHearAboutUs: true,
              referralHearAboutUs: true
            },
            hearAboutUs: ['Twitter', 'Facebook'],
            otherHearAboutUs: '',
            referralHearAboutUs: ''
          });
        });

        test('SHOULD pass validation', () => {
          wrapper.vm.validateHearAboutUs();
          expect(wrapper.vm.$data.valid.hearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.valid.otherHearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.otherHearAboutUs).toEqual('');
          expect(wrapper.vm.$data.valid.referralHearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.referralHearAboutUs).toEqual('');
        });
      });

      describe('WHEN hearAboutUs box is not empty with other with referal', () => {
        beforeEach(() => {
          wrapper.setData({
            valid: {
              hearAboutUs: true,
              otherHearAboutUs: true,
              referralHearAboutUs: true
            },
            hearAboutUs: ['Twitter', 'Facebook', 'Other', 'Employee Referral'],
            otherHearAboutUs: 'Other',
            referralHearAboutUs: 'employee'
          });
        });
        test('SHOULD pass validation', () => {
          wrapper.vm.validateHearAboutUs();
          expect(wrapper.vm.$data.valid.hearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.valid.otherHearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.otherHearAboutUs).toEqual('Other');
          expect(wrapper.vm.$data.valid.referralHearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.referralHearAboutUs).toEqual('employee');
        });
      });

      describe('WHEN hearAboutUs box is not empty with no other with referral', () => {
        beforeEach(() => {
          wrapper.setData({
            valid: {
              hearAboutUs: true,
              otherHearAboutUs: true,
              referralHearAboutUs: true
            },
            hearAboutUs: ['Twitter', 'Facebook', 'Other', 'Employee Referral'],
            otherHearAboutUs: '',
            referralHearAboutUs: 'employee'
          });
        });
        test('SHOULD fail validation', () => {
          wrapper.vm.validateHearAboutUs();
          expect(wrapper.vm.$data.valid.hearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.valid.otherHearAboutUs).toEqual(false);
          expect(wrapper.vm.$data.otherHearAboutUs).toEqual('');
          expect(wrapper.vm.$data.valid.referralHearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.referralHearAboutUs).toEqual('employee');
        });
      });

      describe('WHEN hearAboutUs box is not empty with no Other with referral', () => {
        beforeEach(() => {
          wrapper.setData({
            valid: {
              hearAboutUs: true,
              otherHearAboutUs: true,
              referralHearAboutUs: true
            },
            hearAboutUs: ['Twitter', 'Facebook', 'Employee Referral'],
            otherHearAboutUs: '',
            referralHearAboutUs: 'employee'
          });
        });

        test('SHOULD pass validation', () => {
          wrapper.vm.validateHearAboutUs();
          expect(wrapper.vm.$data.valid.hearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.valid.otherHearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.otherHearAboutUs).toEqual('');
          expect(wrapper.vm.$data.valid.referralHearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.referralHearAboutUs).toEqual('employee');
        });
      });

      describe('WHEN hearAboutUs box is not empty with no other with referral', () => {
        beforeEach(() => {
          wrapper.setData({
            valid: {
              hearAboutUs: true,
              otherHearAboutUs: true,
              referralHearAboutUs: true
            },
            hearAboutUs: ['Twitter', 'Facebook', 'Other', 'Employee Referral'],
            otherHearAboutUs: '',
            referralHearAboutUs: 'employee'
          });
        });
        test('SHOULD fail validation', () => {
          wrapper.vm.validateHearAboutUs();
          expect(wrapper.vm.$data.valid.hearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.valid.otherHearAboutUs).toEqual(false);
          expect(wrapper.vm.$data.otherHearAboutUs).toEqual('');
          expect(wrapper.vm.$data.valid.referralHearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.referralHearAboutUs).toEqual('employee');
        });
      });

      describe('WHEN hearAboutUs box is not empty with no Other with referral', () => {
        beforeEach(() => {
          wrapper.setData({
            valid: {
              hearAboutUs: true,
              otherHearAboutUs: true,
              referralHearAboutUs: true
            },
            hearAboutUs: ['Twitter', 'Facebook', 'Employee Referral'],
            otherHearAboutUs: '',
            referralHearAboutUs: 'employee'
          });
        });

        test('SHOULD pass validation', () => {
          wrapper.vm.validateHearAboutUs();
          expect(wrapper.vm.$data.valid.hearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.valid.otherHearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.otherHearAboutUs).toEqual('');
          expect(wrapper.vm.$data.valid.referralHearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.referralHearAboutUs).toEqual('employee');
        });
      });

      describe('WHEN hearAboutUs box is not empty with no other missing referral', () => {
        beforeEach(() => {
          wrapper.setData({
            valid: {
              hearAboutUs: true,
              otherHearAboutUs: true,
              referralHearAboutUs: true
            },
            hearAboutUs: ['Twitter', 'Facebook', 'Other', 'Employee Referral'],
            otherHearAboutUs: '',
            referralHearAboutUs: ''
          });
        });
        test('SHOULD fail validation', () => {
          wrapper.vm.validateHearAboutUs();
          expect(wrapper.vm.$data.valid.hearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.valid.otherHearAboutUs).toEqual(false);
          expect(wrapper.vm.$data.otherHearAboutUs).toEqual('');
          expect(wrapper.vm.$data.valid.referralHearAboutUs).toEqual(false);
          expect(wrapper.vm.$data.referralHearAboutUs).toEqual('');
        });
      });

      describe('WHEN hearAboutUs box is not empty with no Other missing referral', () => {
        beforeEach(() => {
          wrapper.setData({
            valid: {
              hearAboutUs: true,
              otherHearAboutUs: true,
              referralHearAboutUs: true
            },
            hearAboutUs: ['Twitter', 'Facebook', 'Employee Referral'],
            otherHearAboutUs: '',
            referralHearAboutUs: ''
          });
        });

        test('SHOULD pass validation', () => {
          wrapper.vm.validateHearAboutUs();
          expect(wrapper.vm.$data.valid.hearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.valid.otherHearAboutUs).toEqual(true);
          expect(wrapper.vm.$data.otherHearAboutUs).toEqual('');
          expect(wrapper.vm.$data.valid.referralHearAboutUs).toEqual(false);
          expect(wrapper.vm.$data.referralHearAboutUs).toEqual('');
        });
      });
    });
  });
});
