<template>
  <section id="events" class="g-theme-bg-gray-light-v1 g-py-50">
    <div class="container text-center g-max-width-750 g-mb-20 g-pt-10 g-pb-10">
      <div class="u-heading-v2-2--bottom g-brd-primary g-mb-20">
        <h2
          class="text-uppercase u-heading-v2__title g-font-weight-800 g-font-size-30 g-font-size-40--md"
        >Job Application</h2>
      </div>
    </div>

    <div class="container">
      <form class="form-horizontal" action="/action_page.php">
        <div class="form-group">
          <label class="control-label col-sm-2" for="name">First Name:</label>
          <div class="col-sm-5">
            <input type="name" class="form-control" id="firstName" placeholder="First Name">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="name">Last Name:</label>
          <div class="col-sm-5">
            <input type="name" class="form-control" id="lastName" placeholder="Last Name">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="email">Email:</label>
          <div class="col-sm-5">
            <input type="email" class="form-control" id="email" placeholder="Enter email">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="email">Email:</label>
          <div class="col-sm-5">
            <input type="email" class="form-control" id="email" placeholder="Enter email">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input type="checkbox"> Remember me
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
