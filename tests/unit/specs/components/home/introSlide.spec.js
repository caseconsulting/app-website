import IntroSlide from '@/components/IntroSlide.vue';
import HomeSlider from '@/data/HomeSlider.js';
import InternSlider from '@/data/InternSlider.js';
import { shallowMount } from '@vue/test-utils';

describe('IntroSlide.vue', () => {
  let wrapper;

  describe('', () => {
    beforeEach(() => {
      wrapper = shallowMount(IntroSlide);
    });

    xdescribe('WHEN on the home page', () => {
      beforeEach(() => {
        //get onto the home page
      });

      test('SHOULD return home slider', () => {
        expect(wrapper.vm.finalSlide).toEqual(HomeSlider);
      });
    });

    xdescribe('WHEN on the intern page', () => {
      beforeEach(() => {
        //get onto the intern page
      });

      test('SHOULD return intern slider', () => {
        expect(wrapper.vm.finalSlide).toEqual(InternSlider);
      });
    });

    describe('WHEN on another page', () => {
      test('SHOULD return empty slider', () => {
        expect(wrapper.vm.finalSlide).toEqual([
          {
            title: '',
            link: ''
          }
        ]);
      });
    });
  });
});
