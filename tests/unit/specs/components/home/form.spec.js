import { shallowMount } from '@vue/test-utils';
import Form from '@/components/ApplyForm/Form.vue';
import Vuelidate from 'vuelidate';
import Vue from 'vue';
Vue.use(Vuelidate);

describe('Form.vue', () => {
  let wrapper;

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
  });
});
