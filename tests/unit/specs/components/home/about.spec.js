import { shallowMount } from '@vue/test-utils';
import About from '@/components/home/About.vue';

describe('About.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(About);
  });

  test('contains an about section', () => {
    expect(wrapper.html()).toContain('<section id="about">');
  });
});
