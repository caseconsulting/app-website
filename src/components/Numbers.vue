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