import { shallowMount } from '@vue/test-utils';
import About from '@/components/home/About.vue';

describe('About.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(About);
  });

  test('contains an about html section', () => {
    expect(wrapper.html()).toContain('<section id="about">');
  });

  test('contains 3 headers with correct names', () => {
    expect(wrapper.text()).toContain('Work that Matters');
    expect(wrapper.text()).toContain('Clients that care');
    expect(wrapper.text()).toContain('Leaders that captivate');
  });
});
