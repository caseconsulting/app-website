import IntroSlide from '@/components/IntroSlide.vue';
import HomeSlider from '@/data/HomeSlider.js';
// import InternSlider from '@/data/InternSlider.js';
import { shallowMount } from '@vue/test-utils';

describe('IntroSlide.vue', () => {
  let wrapper;

  describe('', () => {
    beforeEach(() => {
      //   wrapper = shallowMount(IntroSlide);
    });

    describe('WHEN on the home page', () => {
      test('SHOULD return home slider', () => {
        // expect(wrapper.instance().finalSlide()).toEqual(HomeSlider);
      });
    });

    xdescribe('WHEN on the intern page', () => {});

    xdescribe('WHEN on another page', () => {});
  });
});
