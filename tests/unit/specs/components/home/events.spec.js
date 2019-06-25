import Events from '@/components/home/Events.vue';
import EventsData from '@/data/Events.js';

import { shallowMount /*, createLocalVue*/ } from '@vue/test-utils';
// const localVue = createLocalVue();

describe('Events.vue', () => {
  let wrapper;

  describe('WHEN testing static component', () => {
    beforeEach(() => {
      wrapper = shallowMount(Events);
    });

    test('contains an events html section', () => {
      expect(wrapper.html()).toContain('<section id="events"');
    });

    test('sets the data to be the data inside the Events.js file', () => {
      expect(typeof Events.data).toBe('function');
      const defaultData = Events.data();
      expect(defaultData.events).toBe(EventsData);
    });

    test('has a getArray function in computed', () => {
      expect(typeof Events.computed.getArray).toBe('function');
    });
  });

  //   describe('getArray', () => {
  //     let events;
  //     let origEvents;

  //     describe('WHEN events is empty', () => {
  //       beforeEach(() => {
  //         events = [];
  //         wrapper = shallowMount(Events, {
  //           localVue
  //         });
  //         origEvents = Events.data().events;
  //         wrapper.setData({ events });
  //       });

  //       afterEach(() => wrapper.setData({ events: origEvents }));

  //       test('SHOULD return an empty array', () => {
  //         expect(wrapper.vm.getArray).toEqual([]);
  //       });
  //     });

  // describe('WHEN events holds less than 5 elements', () => {
  //   beforeEach(() => {
  //     events = [1, 2, 3, 4];
  //     wrapper = shallowMount(Events, {
  //       localVue
  //     });
  //     origEvents = Events.data().events;
  //     wrapper.setData({ events });
  //   });

  //   afterEach(() => wrapper.setData({ events: origEvents }));

  //   test('SHOULD return an empty array', () => {
  //     expect(wrapper.vm.getArray).toEqual([]);
  //   });
  // });

  // test('When the array has data, 5 or more elements', () => {
  //   wrapper.setData({ events: [1, 2, 3, 4, 5] });
  //   expect(wrapper.vm.getArray).toEqual([5]);
  // });
  //   });
});
