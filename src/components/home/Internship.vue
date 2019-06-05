<template>
  <div>
    <!-- Internship Section Content -->
    <section id="intern" class="g-text-color-2 no-column-space intern-background">
      <div class="container-fluid">
        <div class="container text-center g-max-width-750 g-mb-20 g-pt-70">
          <div class="u-heading-v2-2--bottom g-brd-primary g-mb-20">
            <h2
              class="text-uppercase u-heading-v2__title g-font-weight-800 g-font-size-30 g-font-size-40--md g-color-white"
            >Summer Internship</h2>
          </div>
          <p class="g-color-white">
            Summer Internships take place from May to August in the
            Make Offices in Reston, Virginia, within the metropolitan
            area of Washington, D.C. The interns will design and
            implement software applications as part of a collaborative
            team of interns and professional software developers. The
            intern will gain experience in full stack development
            using modern web technologies, including Amazon Web
            Services (AWS). Interns will also learn best practices in
            version control systems using GitHub, and will incorporate
            Agile methodologies for self-organization and regular
            delivery of code for production. The intern will develop
            communication skills with customers to produce useful
            software for the client.
          </p>
        </div>
        <div class="container g-pb-30">
          <row>
            <div class="text-center">
              <!-- <a href="./intern.html" type="button" class="btn" role="button"> Learn More </a> -->
              <router-link tag="button" to="/intern" active-class="active" exact>
                <a>Learn More</a>
              </router-link>
            </div>
          </row>
        </div>
      </div>
    </section>
    <!-- End Section Content -->
  </div>
</template>
