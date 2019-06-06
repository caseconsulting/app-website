<template>
  <div>
    <!-- Header -->
    <header
      id="js-header"
      class="u-header u-header--sticky-top u-header--change-appearance g-z-index-9999"
      data-header-fix-moment="100"
    >
      <div
        class="u-header__section g-bg-white g-transition-0_3 g-py-6 g-py-18--md"
        data-header-fix-moment-exclude="g-py-18--md"
        data-header-fix-moment-classes="u-shadow-v18 g-py-13--md"
      >
        <nav class="navbar navbar-expand-lg g-py-0">
          <div class="container-fluid g-pos-rel">
            <!-- Logo -->
            <a href="./index.html" class="navbar-brand u-header__logo" data-type="static">
              <img
                class="u-header__logo-img u-header__logo-img--main g-width-110"
                src="../../../public/assets/custom/img/case/logo-banner.gif"
                alt="Case Consulting, Inc."
              >
            </a>
            <!-- End Logo -->
            <!-- Navigation -->
            <div class="collapse navbar-collapse align-items-center flex-sm-row" id="navBar">
              <ul
                id="js-scroll-nav"
                class="navbar-nav text-uppercase g-font-weight-700 g-font-size-11 g-pt-20 g-pt-5--lg ml-auto"
              >
                <li class="g-mr-30--lg g-mb-7 g-mb-0--lg active">
                  <a href="/" class="nav-link p-0">Home</a>
                </li>
                <!-- <router-link tag="li" to="/" class="g-mr-30--lg g-mb-7 g-mb-0--lg" active-class="active">
                <a class="nav-link p-0">Home</a>
                </router-link>-->
                <li class="nav-item g-mr-15--lg g-mb-7 g-mb-0--lg active">
                  <a href="#overview" class="nav-link p-0">About</a>
                </li>
                <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                  <a href="#requirements" class="nav-link p-0">Requirements</a>
                </li>
                <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                  <a href="#faq" class="nav-link p-0">FAQ</a>
                </li>
                <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                  <a href="#Testimonial" class="nav-link p-0">Testimonials</a>
                </li>
                <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                  <a href="#contact" class="nav-link p-0">Contact</a>
                </li>
              </ul>
              <a class="navbar-brand u-header__log">
                <img
                  src="../../../public/assets/custom/img/awards/2018_BPTW_logo_C1.png"
                  alt="Best places to work 2018 logo"
                  class="nav-pad"
                >
              </a>
            </div>
            <!-- End Navigation -->
            <!-- Responsive Toggle Button -->
            <button
              class="navbar-toggler btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-20 g-right-0"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded="false"
              aria-controls="navBar"
              data-toggle="collapse"
              data-target="#navBar"
            >
              <span class="hamburger hamburger--slider">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </span>
            </button>
            <!-- End Responsive Toggle Button -->
          </div>
        </nav>
      </div>
    </header>

    <!-- Section Content -->
  <intern-slider></intern-slider>
  <intern-about></intern-about>
  <intern-requirements></intern-requirements>
    

    <!-- FAQ Section Content -->
    <section id="faq">
      <div class="container-fluid">
        <div class="g-pt-100 g-pb-30">
          <div class="container text-center g-max-width-750 g-mb-20 g-pt-10">
            <div class="u-heading-v2-2--bottom g-brd-primary g-mb-20">
              <h2
                class="text-uppercase u-heading-v2__title g-font-weight-800 g-font-size-30 g-font-size-40--md"
              >At-A-Glance</h2>
            </div>
          </div>
          <br>
          <div class="container">
            <div class="row">
              <div class="col-sm-10 offset-sm-1 g-mb-40">
                <div class="media">
                  <div class="d-flex g-mt-25 g-mr-40">
                    <span class="d-block g-color-primary g-font-size-48 g-line-height-1"></span>
                  </div>
                  <div class="media-body align-self-center">
                    <h3 class="h5 text-uppercase g-font-weight-800">Who?</h3>
                    <ul class="list-unstyled g-font-size-12 g-mb-30 g-mb-0--md">
                      <li class="g-pos-rel g-pl-10 g-mb-15">
                        <i
                          class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-primary"
                        ></i>
                        <p class="list_elem">
                          Are you a Computer Science or Computer Engineering Junior who enjoys learning and
                          working with current development technologies? Are you interested in experiencing
                          what it means to be a professional application developer? If yes, then this
                          internship is for you!
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10 offset-sm-1 g-mb-40">
                <div class="media">
                  <div class="d-flex g-mt-25 g-mr-40">
                    <span class="d-block g-color-primary g-font-size-48 g-line-height-1"></span>
                  </div>
                  <div class="media-body align-self-center">
                    <h3 class="h5 text-uppercase g-font-weight-800">What?</h3>
                    <ul class="list-unstyled g-font-size-12 g-mb-30 g-mb-0--md">
                      <li class="g-pos-rel g-pl-10 g-mb-15">
                        <i
                          class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-primary"
                        ></i>
                        <p class="list_elem">
                          During your internship at Case Consulting you will be guided by our team of
                          software professionals and previous interns to apply cutting edge software
                          development tools and practices to a real software product. Throughout the
                          program, you will use many software engineering best practices such as
                          agile/scrum, pair programming, automated testing, and test-driven development.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10 offset-sm-1 g-mb-40">
                <div class="media">
                  <div class="d-flex g-mt-25 g-mr-40">
                    <span class="d-block g-color-primary g-font-size-48 g-line-height-1"></span>
                  </div>
                  <div class="media-body align-self-center">
                    <h3 class="h5 text-uppercase g-font-weight-800">When?</h3>
                    <ul class="list-unstyled g-font-size-12 g-mb-30 g-mb-0--md">
                      <li class="g-pos-rel g-pl-10 g-mb-15">
                        <i
                          class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-primary"
                        ></i>
                        <p class="list_elem">Summer 2019</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10 offset-sm-1 g-mb-40">
                <div class="media">
                  <div class="d-flex g-mt-25 g-mr-40">
                    <span class="d-block g-color-primary g-font-size-48 g-line-height-1"></span>
                  </div>
                  <div class="media-body align-self-center">
                    <h3 class="h5 text-uppercase g-font-weight-800">Where?</h3>
                    <ul class="list-unstyled g-font-size-12 g-mb-30 g-mb-0--md">
                      <li class="g-pos-rel g-pl-10 g-mb-15">
                        <i
                          class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-primary"
                        ></i>
                        <p
                          class="list_elem"
                        >The internship is located at our shared office space in Reston, VA.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10 offset-sm-1 g-mb-40">
                <div class="media">
                  <div class="d-flex g-mt-25 g-mr-40">
                    <span class="d-block g-color-primary g-font-size-48 g-line-height-1"></span>
                  </div>
                  <div class="media-body align-self-center">
                    <h3 class="h5 text-uppercase g-font-weight-800">Why?</h3>
                    <ul class="list-unstyled g-font-size-12 g-mb-30 g-mb-0--md">
                      <li class="g-pos-rel g-pl-10 g-mb-15">
                        <i
                          class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-primary"
                        ></i>
                        <p class="list_elem">
                          Work with cutting edge technologies like JavaScript, Node/Express, Vue, Amazon
                          Web Services, and Bootstrap. Gain professional experience working in a simulated
                          customer environment using industry best practices on a self-organizing team,
                          apply for a security clearance, and work for a top notch tech company.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10 offset-sm-1 g-mb-40">
                <div class="media">
                  <div class="d-flex g-mt-25 g-mr-40">
                    <span class="d-block g-color-primary g-font-size-48 g-line-height-1"></span>
                  </div>
                  <div class="media-body align-self-center">
                    <h3 class="h5 text-uppercase g-font-weight-800">How?</h3>
                    <ul class="list-unstyled g-font-size-12 g-mb-30 g-mb-0--md">
                      <li class="g-pos-rel g-pl-10 g-mb-15">
                        <i
                          class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-primary"
                        ></i>
                        <p class="list_elem">Apply today!</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="container text-center g-max-width-750 g-mb-20 g-pt-10">
                <div class="u-heading-v2-2--bottom g-brd-primary g-mb-20">
                  <h3
                    class="text-uppercase u-heading-v2__title g-font-weight-800 g-font-size-30 g-font-size-40--md"
                  >Frequently Asked Questions</h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10 offset-sm-1 g-mb-40">
                <div class="media">
                  <div class="d-flex g-mt-25 g-mr-40">
                    <span class="d-block g-color-primary g-font-size-48 g-line-height-1"></span>
                  </div>
                  <div class="media-body align-self-center">
                    <h3 class="h5 text-uppercase g-font-weight-800">What is a government contractor?</h3>
                    <ul class="list-unstyled g-font-size-12 g-mb-30 g-mb-0--md">
                      <li class="g-pos-rel g-pl-10 g-mb-15">
                        <i
                          class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-primary"
                        ></i>
                        <p class="list_elem">
                          Government Contractors are people who work for a private or public company on
                          contracts setup to deliver solutions to the Government. These companies either
                          win prime contracts themselves or partner with companies to work as a
                          subcontractor. As a contractor you will work at a Government facility with
                          other contractors and Government employees.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10 offset-sm-1 g-mb-40">
                <div class="media">
                  <div class="d-flex g-mt-25 g-mr-40">
                    <span class="d-block g-color-primary g-font-size-48 g-line-height-1"></span>
                  </div>
                  <div class="media-body align-self-center">
                    <h3
                      class="h5 text-uppercase g-font-weight-800"
                    >Why do I need a security clearance?</h3>
                    <ul class="list-unstyled g-font-size-12 g-mb-30 g-mb-0--md">
                      <li class="g-pos-rel g-pl-10 g-mb-15">
                        <i
                          class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-primary"
                        ></i>
                        <p class="list_elem">
                          A security clearance grants you the ability to work on some of the most exciting
                          projects out there. You will work to solve very complicated and unique problems
                          helping people around the world. In addition to the exciting work, a clearance
                          provides you with an asset that improves job security and your demand to the market.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10 offset-sm-1 g-mb-40">
                <div class="media">
                  <div class="d-flex g-mt-25 g-mr-40">
                    <span class="d-block g-color-primary g-font-size-48 g-line-height-1"></span>
                  </div>
                  <div class="media-body align-self-center">
                    <h3
                      class="h5 text-uppercase g-font-weight-800"
                    >Why is there a 1 year commitment?</h3>
                    <ul class="list-unstyled g-font-size-12 g-mb-30 g-mb-0--md">
                      <li class="g-pos-rel g-pl-10 g-mb-15">
                        <i
                          class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-primary"
                        ></i>
                        <p class="list_elem">
                          At the end of the internship this question will be obsolete because we take pride in
                          the experience our internship provides and are confidant you will want to work with
                          us going forward. A commitment to Case Consulting is necessary to submit you for a
                          U.S. Government security clearance. As a company we invest heavily in our interns
                          and take the program very seriously. Everyone involved gives a lot of time and
                          effort, working to ensure the program is not an average internship experience,
                          but rather true development of the skills required to succeed as a software engineer
                          in the real world.
                        </p>
                        <p class="list_elem">
                          Before the completion of a successful internship you can expect to receive an offer
                          for full time employment with Case Consulting, including your minimum starting
                          salary and benefits. We understand that this is a big commitment, but we believe
                          you will love our culture as much as we do and will want to stay well past any
                          specified commitment time period.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10 offset-sm-1 g-mb-40">
                <div class="media">
                  <div class="d-flex g-mt-25 g-mr-40">
                    <span class="d-block g-color-primary g-font-size-48 g-line-height-1"></span>
                  </div>
                  <div class="media-body align-self-center">
                    <h3 class="h5 text-uppercase g-font-weight-800">Where is your full-time work?</h3>
                    <ul class="list-unstyled g-font-size-12 g-mb-30 g-mb-0--md">
                      <li class="g-pos-rel g-pl-10 g-mb-15">
                        <i
                          class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-primary"
                        ></i>
                        <p class="list_elem">
                          Case Consulting has quite a few projects to place college new hires on when they
                          start full time. Our goal is to find one that best fits your skill-sets and to
                          place you on a team with other Case Consulting employees. Most of Case
                          Consulting’s work is located in the Northern Virginia area to include Tyson’s,
                          McLean, Bethesda, Reston, Herndon, and Chantilly.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
    </section>

    <section id="Testimonial" class="testimonial">
      <div class="g-pt-100 g-pb-30">
        <div class="container text-center g-max-width-750 g-mb-20 g-pt-10">
          <div class="u-heading-v2-2--bottom g-brd-primary g-mb-20">
            <h2
              class="text-uppercase u-heading-v2__title g-font-weight-800 g-font-size-30 g-font-size-40--md g-color-white"
            >Testimonials</h2>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-2" style="text-align:center">
                <img
                  src="https://res.cloudinary.com/consultwithcase/image/upload/v1535720007/website/interns/fahad.jpg"
                  class="rounded-circle potrait"
                >
              </div>
              <div class="col-md-10">
                <p class="g-color-white">
                  "Case Consulting is an awesome company that has its hands in a lot of interesting technology. At this internship, I learned what it meant to be professional in the field, I learned full-stack technologies such as NodeJS and industry standards such as
                  OAuth. We also got opportunities to explore the Amazon ecosystem and deployed an application into the real world that will be used by real people. The Case internship is a rewarding opportunity that is centered around great mentors that
                  will do everything to help you succeed." - Fahad Ashraf, 2017/2018 Intern
                </p>
              </div>
            </div>
            <div class="row" style="margin-top:100px;">
              <div class="col-md-10 order-md-1 order-2">
                <p class="g-color-white">
                  "The Case internship gave me an amazing insight into what I was getting myself into when I said I wanted to be a software developer. The company is a big family which was a major factor in my decision to come on. I learned real-world programming languages
                  and used tech that I found interesting every day I was there." - Jacob Boisseau, 2017/2018 Intern
                </p>
              </div>
              <div class="col-md-2 order-md-2" style="text-align:center">
                <img
                  src="https://res.cloudinary.com/consultwithcase/image/upload/c_crop,g_custom/c_scale,w_160/v1535719942/website/interns/jacob.jpg"
                  class="rounded-circle potrait"
                  style="text-align:center"
                >
              </div>
            </div>
            <div class="row" style="margin-top:100px;">
              <div class="col-md-2" style="text-align:center">
                <img
                  src="https://res.cloudinary.com/consultwithcase/image/upload/v1535719942/website/interns/andrew.gif"
                  class="rounded-circle potrait"
                >
              </div>
              <div class="col-md-10">
                <p class="g-color-white">
                  "After completing this internship, I feel as though I went from a programmer who only wanted to stay in the backend to a full stack developer who can switch between the frontend and backend depending on the needs of the team. Through the internship you
                  will learn how to be an agile developer, while working with cutting edge web technologies such as Vue, Node.js, AWS services, and Express." - Andrew Cooper, 2018 Intern
                </p>
              </div>
            </div>
            <div class="row" style="margin-top:100px;">
              <div class="col-md-10 order-md-1 order-2">
                <p class="g-color-white">
                  "Working at Case Consulting was a great opportunity for me to learn and experience what being a software developer is like in the real world. While I was at my internship, I was able to work in an encouraging, friendly environment where we designed a
                  website and an expense app that would be used by the company's employees. In doing so, I was able to work with new technologies and agile programming that is used by employees in the company. This internship helped me get a good view of
                  what being a software developer is like, as well as, helping me grow in the profession." - Sam Peake, 2018 Intern
                </p>
              </div>
              <div class="col-md-2 order-md-2" style="text-align:center">
                <img
                  src="https://res.cloudinary.com/consultwithcase/image/upload/c_crop,g_custom/c_scale,w_160/v1535719942/website/interns/sam.jpg"
                  class="rounded-circle potrait"
                  style="text-align:center"
                >
              </div>
            </div>
            <div class="row" style="margin-top:100px;">
              <div class="col-md-2" style="text-align:center">
                <img
                  src="https://res.cloudinary.com/consultwithcase/image/upload/c_scale,w_160/v1536585437/website/interns/joe.gif"
                  class="rounded-circle potrait"
                >
              </div>
              <div class="col-md-10">
                <p class="g-color-white">
                  "My summer internship with Case Consulting provided me with a solid foundation for full-stack web application development that was lacking from my college education. Having the opportunity to work in an Agile environment with bleeding-edge technologies
                  and experiencing how a software company operates has really prepared me for my career after graduation. Working in a collaborative team of other interns helped me to realize my own strengths as a developer, and we had an awesome time building
                  an application that we are really proud of, under the guidance of the knowledgeable and approachable senior developers at Case. I would eagerly recommend an internship with Case to anyone with a desire to learn AWS, JavaScript, or web
                  application development, without hesitation." - Joseph Thompson, 2018 Intern
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Section Content -->
    <contact></contact>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import About from "./About.vue";
import Requirements from "./Requirements.vue";
import Contact from "../home/Contact.vue";

export default {
  components: {
    "intern-slider": Slider,
    "intern-about": About,
    "intern-requirements": Requirements,
    contact: Contact
  }
};
</script>

