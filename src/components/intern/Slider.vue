<template>
 <!-- Section Content -->
      <section class="rev_slider_wrapper fullwidthbanner-container" data-alias="image-hero20">
        <!-- START REVOLUTION SLIDER 5.0.7 fullwidth mode -->
        <div id="promoSlider" class="rev_slider fullwidthabanner" style="display: none;" data-version="5.0.7">
          <ul>
            <!-- SLIDE  -->
            <li style="text-align: center;" data-index="rs-68" data-transition="zoomout" data-slotamount="default" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000" data-thumb="../../../public/assets/img-temp/promo/img1.jpg" data-rotate="0" data-saveperformance="off" data-title="Intro">
              <img src="../../../public/assets/custom/img/case/intern_edit.jpg" alt="Image description" data-bgposition="50% 10%" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg" data-no-retina>
              <!-- LAYERS -->
              <!-- LAYER NR. 1 -->
              <div id="promoSliderLayer10" class="tp-caption tp-shape tp-shapewrapper rs-parallaxlevel-0" style="z-index: 5; background-color: rgba(78, 67, 83, .4); border-color: rgba(78, 67, 83, .5);" data-x="['center','center','center','center']" data-y="['middle','middle','middle','middle']"
                data-hoffset="['0','0','0','0']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="s:300;s:300;"
                data-start="750" data-basealign="slide" data-responsive_offset="on" data-responsive="off">
              </div>
              <!-- LAYER NR. 3 -->
              <div id="promoSliderLayer1" class="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0" style="z-index: 7; white-space: nowrap; text-align: center; text-transform: uppercase;" data-x="['center','center','center','center']" data-y="['middle','middle','middle','middle']"
                data-hoffset="['0','0','0','0']" data-voffset="['-60','-60','-22','-29']" data-fontsize="['60','60','60','40']" data-lineheight="['64','64','64','44']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;"
                data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:1.5;sY:1.5;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:inherit;y:inherit;"
                data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on">
                Summer Internship
              </div>
              <!-- LAYER NR. 4 -->
              <div id="promoSliderLayer4" class="tp-caption NotGeneric-SubTitle tp-resizeme rs-parallaxlevel-0" style="z-index: 8; white-space: nowrap; text-align: center; text-transform: uppercase;" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']" data-voffset="['52','52','28','13']" data-visibility="['on','off']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power4.easeInOut;"
                data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="1000" data-splitin="none" data-splitout="none"
                data-responsive_offset="on">
              </div>
              <!-- LAYER NR. 5 -->
              <div id="promoSliderLayer7" class="tp-caption NotGeneric-CallToAction rev-btn rs-parallaxlevel-0" style="z-index: 9; font-weight: bold; white-space: nowrap; outline: none; box-shadow: none; box-sizing: border-box; text-transform: uppercase; border-width: 2px;"
                data-x="['center','center','center','center']" data-y="['middle','middle','middle','middle']" data-hoffset="['0','0','0','0']" data-voffset="['134','134','80','65']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;"
                data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;" data-style_hover="c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);cursor:pointer;" data-transform_in="y:50px;opacity:0;s:1500;e:Power4.easeInOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="1250" data-splitin="none" data-splitout="none" data-actions='[{"event":"click","action":"scrollbelow","offset":"-90px"}]' data-responsive_offset="on" data-responsive="off">Learn More
              </div>
            </li>
          </ul>
          <div class="tp-static-layers"></div>
          <div class="tp-bannertimer tp-bottom" style="visibility: hidden !important;"></div>
        </div>
      </section>
    <!-- END REVOLUTION SLIDER --></template>

    <script>
    export default {
      mounted() {
         var tpj = jQuery,
        promoSlider;
      
        if (tpj('#promoSlider').revolution == undefined) {
          revslider_showDoubleJqueryError('#promoSlider');
        } else {
          promoSlider = tpj('#promoSlider').show().revolution({
            sliderType: 'hero',
            jsFileLocation: '../../revolution/js/',
            sliderLayout: 'fullwidth',
            dottedOverlay: 'none',
            delay: 9000,
            navigation: {},
            responsiveLevels: [1240, 1024,
              778, 480
            ],
            gridwidth: [1240, 1024, 778,
              480
            ],
            gridheight: [600, 500, 400,
              300
            ],
            lazyType: 'none',
            parallax: {
              type: 'mouse',
              origo: 'slidercenter',
              speed: 2000,
              levels: [2, 3, 4, 5, 6,
                7, 12, 16, 10,
                50
              ]
            },
            shadow: 0,
            spinner: 'off',
            autoHeight: 'off',
            disableProgressBar: 'on',
            hideThumbsOnMobile: 'off',
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
              simplifyAll: 'off',
              disableFocusListener: false
            }
          });
        }
      
      $(document).on('ready', function() {
        // initialization of carousel
        $.HSCore.components.HSCarousel.init('.js-carousel');

        // initialization of header
        $.HSCore.components.HSHeader.init($('#js-header'));
        $.HSCore.helpers.HSHamburgers.init('.hamburger');

        // initialization of go to section
        $.HSCore.components.HSGoTo.init('.js-go-to');
      });

      $(window).on('load', function() {
        // initialization of HSScrollNav
        $.HSCore.components.HSScrollNav.init($('#js-scroll-nav'), {
          duration: 700
        });
      });
    
      }
    }
    </script>