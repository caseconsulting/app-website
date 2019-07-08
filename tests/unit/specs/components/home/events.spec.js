import Events from '@/components/home/Events.vue';
import EventsData from '@/data/Events.js';

import { shallowMount } from '@vue/test-utils';

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

  describe('getArray', () => {
    beforeEach(() => {
      wrapper = shallowMount(Events);
    });

    describe('WHEN events is empty', () => {
      beforeEach(() => {
        wrapper.setData({ events: [] });
      });

      test('SHOULD return an empty array', () => {
        expect(wrapper.vm.getArray).toEqual([]);
      });
    });

    describe('WHEN events holds less than 5 elements', () => {
      beforeEach(() => {
        wrapper.setData({
          events: [
            { descrip: ['descrip'] },
            { descrip: ['descrip'] },
            { descrip: ['descrip'] },
            { descrip: ['descrip'] }
          ]
        });
      });

      test('SHOULD return an empty array', () => {
        expect(wrapper.vm.getArray).toEqual([]);
      });
    });

    describe('When the array has data, 5 or more elements', () => {
      beforeEach(() => {
        wrapper.setData({
          events: [
            { descrip: ['descrip'] },
            { descrip: ['descrip'] },
            { descrip: ['descrip'] },
            { descrip: ['descrip'] },
            { descrip: ['descrip5'] }
          ]
        });
      });

      test('SHOULD return the fifth element', () => {
        expect(wrapper.vm.getArray).toEqual([{ descrip: ['descrip5'] }]);
      });
    });
  });
});
