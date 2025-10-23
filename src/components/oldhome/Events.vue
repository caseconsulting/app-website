<template>
  <!-- Events Section Content -->
  <section id="events" class="g-theme-bg-gray-light-v1 g-py-50">
    <div class="container text-center g-max-width-750 g-mb-20 g-pt-10 g-pb-10">
      <div class="u-heading-v2-2--bottom g-brd-primary g-mb-20">
        <h2 class="text-uppercase u-heading-v2__title g-font-weight-800 g-font-size-30 g-font-size-40--md">Events</h2>
      </div>
    </div>

    <div class="col-sm-10 offset-sm-1">
      <div class="card-deck g-mx-20 g-my-20">
        <div v-for="event in events.slice(0, 4)" :key="event.id" class="card">
          <img class="event-images" :src="event.iconLink" :alt="event.title" />
          <div class="card-body">
            <h4 class="card-title">
              <a :href="event.driveLink" target="_blank" rel="noopener">{{ event.title }}</a>
            </h4>
            <p class="card-text">{{ event.descrip[0] }}</p>
          </div>
        </div>

        <div v-for="event in getArray" :key="event.id" class="collapsedEvent collapse">
          <div class="card">
            <img class="event-images" :src="event.iconLink" :alt="event.title" />
            <div class="card-body">
              <h4 class="card-title">
                <a :href="event.driveLink" target="_blank" rel="noopener">{{ event.title }}</a>
              </h4>
              <p class="card-text">{{ event.descrip[0] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <a
        href="#collapseEvents"
        class="btn btn-primary btn-lg"
        data-toggle="collapse"
        data-target=".collapsedEvent"
        aria-controls="collapseEvents"
        aria-expanded="false"
      >
        <span class="collapsed">
          <i class="fas fa-chevron-down"></i>
        </span>
        <span class="expanded">
          <i class="fas fa-chevron-up"></i>
        </span>
      </a>
    </div>
    <!-- Row End -->
  </section>
  <!-- End Section Content -->
</template>

<script>
import EventsData from '../../data/Events.js';
export default {
  data: function () {
    return {
      events: EventsData
    };
  },
  computed: {
    getArray() {
      const arr = this.events.filter((item, index) => {
        return index >= 4; //will return the array from the fifth value
      });
      return arr;
    }
  }
};
</script>
