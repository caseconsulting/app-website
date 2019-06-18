<template>
  <!-- Numbers Section Content -->
  <section id="numbers">
    <div class="container-fluid">
      <div class="g-pt-100 g-pb-30">
        <div class="container text-center g-pt-10">
          <div class="u-heading-v2-2--bottom g-brd-primary">
            <h2
              class="text-uppercase u-heading-v2__title g-font-weight-800 g-font-size-30 g-font-size-40--md"
            >Case by the Numbers</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4">
            <div class="pie-container">
              <h4 class="text-center">Roles</h4>
              <div>
                <canvas id="roles"></canvas>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="bar-container">
              <h4 class="text-center">Education</h4>
              <div>
                <canvas id="bar"></canvas>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="pie-container">
              <h4 class="text-center">Current Projects</h4>
              <div>
                <canvas id="technology"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
  </section>
  <!-- End Section Content -->
</template>
<script>
// import { GChart } from 'vue-google-charts';
export default {
  // data() {
  //   return {
  //     //chartsLib: null,
  //     // Array will be automatically processed with visualization.arrayToDataTable function
  //     chartData: [
  //       ['Developer', 'Systems Engineer', 'Tester', 'PM', 'DBA', 'Accounting', 'System Administrator'],
  //       [65.6, 9.4, 9.4, 6.3, 3.1, 3.1, 3.1]
  //     ]
  //   };
  // },
  // computed: {
  //   chartOptions() {
  //     if (!this.chartsLib) return null;
  //     return this.chartsLib.charts.Bar.convertOptions({
  //       //bars: 'horizontal', // Required for Material Bar Charts.
  //       backgroundColors: ['#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e74c3c', '#34495e'],
  //       legend: {
  //         display: false
  //       },
  //       pieHole: 0.4
  //     });
  //   }
  // },
  // methods: {
  //   onChartReady(chart, google) {
  //     this.chartsLib = google;
  //   }
  // },
  mounted() {
    // Chart.defaults.global.defaultFontColor = 'black';
    // var colors = ['#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e74c3c', '#34495e'];
    // var ctx1 = document.getElementById('roles').getContext('2d');
    // var myChart1 = new Chart(ctx1, {
    //   type: 'doughnut',
    //   data: {
    //     labels: ['Developer', 'Systems Engineer', 'Tester', 'PM', 'DBA', 'Accounting', 'System Administrator'],
    //     datasets: [
    //       {
    //         backgroundColor: colors,
    //         data: [65.6, 9.4, 9.4, 6.3, 3.1, 3.1, 3.1]
    //       }
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: false
    //     }
    //   }
    // });
    // myChart1.getNumberofColumns();
    // var ctx2 = document.getElementById('bar').getContext('2d');
    // var myChart2 = new Chart(ctx2, {
    //   type: 'horizontalBar',
    //   data: {
    //     datasets: [
    //       {
    //         backgroundColor: colors,
    //         data: [100, 50]
    //       }
    //     ],
    //     labels: ['Bachelors Degree', 'Masters Degree']
    //   },
    //   options: {
    //     legend: {
    //       display: false
    //     },
    //     scales: {
    //       xAxes: [
    //         {
    //           ticks: {
    //             min: 0,
    //             max: 100
    //           },
    //           gridLines: {
    //             display: false,
    //             drawBorder: false
    //           },
    //           scaleLabel: {
    //             display: true,
    //             labelString: '%'
    //           }
    //         }
    //       ],
    //       yAxes: [
    //         {
    //           gridLines: {
    //             display: false,
    //             drawBorder: false
    //           }
    //         }
    //       ]
    //     }
    //   }
    // });
    // myChart2.getNumberofColumns();
    // var ctx3 = document.getElementById('technology').getContext('2d');
    // var myChart3 = new Chart(ctx3, {
    //   type: 'doughnut',
    //   data: {
    //     labels: ['Ruby', 'Javascript', 'Java'],
    //     datasets: [
    //       {
    //         backgroundColor: colors,
    //         data: [47, 32, 21]
    //       }
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: false
    //     }
    //   }
    // });
    // myChart3.getNumberofColumns();
  }
};
</script>
