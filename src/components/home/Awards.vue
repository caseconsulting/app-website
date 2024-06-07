<template>
  <!-- Awards Section Content -->
  <section id="awards" class="g-theme-bg-color-1 g-text-color-2 g-pt-10 g-pb-10">
    <div class="g-mb-100 g-mt-100">
      <div class="u-heading-v2-2--bottom text-center g-brd-primary g-mb-20 g-mt-20">
        <h2
          class="text-uppercase text-center u-heading-v2__title g-font-weight-800 g-font-size-30 g-font-size-40--md g-color-white"
        >
          Awards
        </h2>
      </div>
      <br />
      <div class="container">
        <div class="row">
          <!-- spacer column -->
          <div class="col-lg-7 col-sm-12">
            <div class="container-fluid award-container">
              <div class="row award-row">
                <div
                  :class="'col-md-5 award-overlapped-' + (index + 1)"
                  v-for="(award, index) in awardsArray.slice(0, 3)"
                  :key="index"
                >
                  <a :href="award.href" target="_blank" rel="noopener" border="0">
                    <img :src="award.src" alt class="rounded-circle img-fluid mobile-image award-shadow" />
                  </a>
                </div>
              </div>
              <div class="row award-row">
                <div
                  :class="'col-md-5 award-overlapped-' + (index + 1)"
                  v-for="(award, index) in awardsArray.slice(3, 6)"
                  :key="index"
                >
                  <a :href="award.href" target="_blank" rel="noopener" border="0">
                    <img :src="award.src" alt class="rounded-circle img-fluid mobile-image award-shadow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- spacer column -->
          <div class="col-lg-5 col-sm-12">
            <p class="g-color-white">
              The Washington Business Journal's Best Places to Work program honors Greater Washington area companies
              that score highest in annual employee engagement. For the 6th year in a row, CASE has been recognized as
              one of the best places to work among small, medium, and large companies:
              <br />
              <br />
            </p>
            <ul class="list-unstyled g-font-size-12 g-mb-30 g-mb-0--md">
              <li class="g-pos-rel g-pl-10 g-mb-15">
                <i class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-white"></i>
                <p class="list_elem g-color-white">#4 Large Company in 2022</p>
              </li>
              <li class="g-pos-rel g-pl-10 g-mb-15">
                <i class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-white"></i>
                <p class="list_elem g-color-white">#1 Medium Company in 2021</p>
              </li>
              <li class="g-pos-rel g-pl-10 g-mb-15">
                <i class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-white"></i>
                <p class="list_elem g-color-white">#2 Medium Company in 2020</p>
              </li>
              <li class="g-pos-rel g-pl-10 g-mb-15">
                <i class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-white"></i>
                <p class="list_elem g-color-white">#1 Medium Company in 2019</p>
              </li>
              <li class="g-pos-rel g-pl-10 g-mb-15">
                <i class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-white"></i>
                <p class="list_elem g-color-white">#3 Small Company in 2018</p>
              </li>
              <li class="g-pos-rel g-pl-10 g-mb-15">
                <i class="fas fa-angle-right bullet_top g-left-0 g-font-size-16 g-color-white"></i>
                <p class="list_elem g-color-white">#6 Small Company in 2017</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  </section>
  <!-- End Awards Section -->
</template>

<script>
import Img2017 from '../../../public/assets/custom/img/awards/BPTW-2017.png';
import Img2018 from '../../../public/assets/custom/img/awards/BPTW-2018.png';
import Img2019 from '../../../public/assets/custom/img/awards/BPTW-2019.png';
import Img2020 from '../../../public/assets/custom/img/awards/BPTW-2020.png';
import Img2021 from '../../../public/assets/custom/img/awards/BPTW-2021.png';
import Img2022 from '../../../public/assets/custom/img/awards/BPTW-2022.png';
export default {
  setup() {
    let awardsArray = [
      {
        href: 'https://www.bizjournals.com/washington/news/2017/05/05/these-are-the-best-places-to-work-in-greater.html',
        src: Img2017
      },
      {
        href: 'https://www.bizjournals.com/washington/news/2018/04/13/see-the-best-places-to-work-in-greater-washington.html',
        src: Img2018
      },
      {
        href: 'https://www.bizjournals.com/washington/subscriber-only/2019/05/17/best-places-to-work-medium-companies.html',
        src: Img2019
      },
      {
        href: 'https://www.bizjournals.com/washington/news/2020/05/15/best-places-to-work-honorees-covid19-response.html',
        src: Img2020
      },
      {
        href: 'https://www.bizjournals.com/washington/subscriber-only/2021/05/21/best-places-to-work-medium-companies.html',
        src: Img2021
      },
      {
        href: 'https://www.bizjournals.com/washington/subscriber-only/2022/05/13/best-places-to-work-large-companies.html',
        src: Img2022
      }
    ];

    const windowWidth = window.innerWidth;
    if (windowWidth < 767) {
      awardsArray = [awardsArray[0], awardsArray[2], awardsArray[4], awardsArray[1], awardsArray[3], awardsArray[5]];
    }
    return {
      awardsArray
    };
  }
};
</script>
