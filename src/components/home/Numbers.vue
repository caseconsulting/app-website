<template>
  <!-- Numbers Section Content -->
  <section id="numbers">
    <div class="container-fluid">
      <div class="g-pt-100 g-pb-30">
        <div class="text-center">
          <h1
            class="text-uppercase text-center u-heading-v2__title g-font-weight-800 g-font-size-30 g-font-size-30--md g-color-white"
          >
            Case by the Numbers
          </h1>
          <div class="u-heading-v2-2--bottom g-brd-primary"></div>
        </div>
        <div class="row">
          <div class="col-xl-4">
            <div class="pie-container">
              <h4 class="text-center g-color-white">Roles</h4>
              <div>
                <canvas id="roles"></canvas>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="bar-container">
              <h4 class="text-center g-color-white">Education</h4>
              <div style="text-align:center;">
                <canvas
                  id="bar"
                  style="max-width: 450px; padding-left: 0; padding-right: 0; margin-left: auto; margin-right: auto; display: block; width: 800px;"
                ></canvas>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="pie-container">
              <h4 class="text-center g-color-white">Current Projects</h4>
              <div>
                <canvas id="technology"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </section>
  <!-- End Section Content -->
</template>
