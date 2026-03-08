$(document).ready(function () {
  var miniBoxesHolder = $("#ruler_1_wrap");

  var boxesTl = new TimelineMax({ repeat: 1, repeatDelay: 0, yoyo: true });
  for (n = 0; n < 12; n++) {
    miniBoxesHolder.append('<div class="ruler_box_1"> </div>');
  }
  var rulers = $(".ruler_box_1");

  anim: new TimelineLite()

    .appendMultiple([
      TweenMax.staggerFromTo(
        rulers,
        0.3,
        {
          css: {
            height: 0,
            top: 0,
            backgroundColor: "#000",
            borderColor: "red",
            rotation: 720,
            autoAlpha: 0
          }
        },
        {
          css: {
            height: 330,
            backgroundColor: "transparent",
            transformOrigin: "bottom",
            borderColor: "#777",
            rotation: 0,
            autoAlpha: 0.3
          },

          ease: Back.easeOut,
          immediateRender: true
        },
        0.1
      )
    ])

    .appendMultiple(
      [
        TweenMax.fromTo(
          $("#veyron_rear_break"),
          1.2,
          { css: { opacity: 0, right: -1000 }, immediateRender: true },
          { css: { right: 166, opacity: 1 }, ease: SlowMo.ease }
        ),

        TweenMax.fromTo(
          $("#veyron_front_break"),
          2.1,
          { css: { opacity: 0, right: -1900 }, immediateRender: true },
          { css: { right: 678, opacity: 1, delay: 1 }, ease: SlowMo.ease }
        ),

        TweenMax.fromTo(
          $("#veyron_bumper"),
          1,
          { css: { opacity: 0, right: -1100, top: -9 }, immediateRender: true },
          { css: { right: -97, top: -9, opacity: 0.7 }, ease: SlowMo.ease }
        ),
        TweenMax.fromTo(
          $("#veyron_frame"),
          2.5,
          { css: { opacity: 0, right: -1100, top: -5 }, immediateRender: true },
          {
            css: { right: -76, top: -5, opacity: 0.7 },
            ease: SlowMo.ease,
            delay: 1
          }
        ),
        TweenMax.fromTo(
          $("#veyron_siding"),
          1.2,
          {
            css: { opacity: 0, right: -1200, top: -135 },
            immediateRender: true
          },
          { css: { right: -335, top: -135, opacity: 0.7 }, ease: SlowMo.ease }
        ),
        TweenMax.fromTo(
          $("#veyron_fender"),
          1.9,
          {
            css: { opacity: 0, right: -1200, top: -158 },
            immediateRender: true
          },
          { css: { right: 274, top: -158, opacity: 0.7 }, ease: Back.easeIn }
        ),
        TweenMax.fromTo(
          $("#veyron_window"),
          2.4,
          {
            css: { opacity: 0, right: -100, top: -341 },
            immediateRender: true
          },
          { css: { right: 6, top: -341, opacity: 0.7 }, ease: Back.easeOut }
        ),

        TweenMax.staggerFromTo(
          $("#ruler_horizontal_2"),
          2,
          {
            css: {
              height: 0,
              left: 900,
              backgroundColor: "#fff",
              rotation: 400,
              autoAlpha: 0
            }
          },
          {
            css: {
              height: 1,
              width: 891,
              bottom: 85,
              left: 5,
              transformOrigin: "top",
              backgroundColor: "#777",
              rotation: 1080,
              opacity: 0.2,
              autoAlpha: 0.4
            },
            ease: Back.easeOut,
            immediateRender: true
          },
          0.1
        ),

        TweenMax.staggerFromTo(
          $("#veyron_tire"),
          2.5,
          { css: { opacity: 0, right: -2991, top: -301 } },
          {
            css: { right: -191, top: -301, opacity: 0.7 },
            ease: SlowMo.ease,
            immediateRender: true
          }
        ),
        TweenMax.staggerFromTo(
          $("#veyron_tire_2"),
          3,
          { css: { opacity: 0, right: -2558, top: -301 } },
          {
            css: { right: -558, top: -301, opacity: 0.7 },
            ease: Back.easeOut,
            immediateRender: true
          },
          0.9
        ),

        TweenMax.staggerFromTo(
          $("#veyron_head_1"),
          1,
          { css: { left: 44, top: -1579, autoAlpha: 0 } },
          {
            css: { left: 44, top: -976, autoAlpha: 0.9 },
            ease: SlowMo.ease,
            immediateRender: true
          },
          2
        )
      ],
      -2
    )

    .appendMultiple([
      TweenMax.staggerFromTo(
        $("#bugatti_veyron"),
        4,
        { css: { opacity: 0 }, immediateRender: true },
        { css: { opacity: 0.9 } },
        5
      ),
      TweenMax.staggerFromTo(
        $("#bugatti_v_tire"),
        0.1,
        { css: { opacity: 0 }, immediateRender: true },
        { css: { opacity: 1 } }
      ),

      TweenMax.staggerFromTo(
        $("#bugatti_v_tire_2"),
        0.1,
        { css: { opacity: 0 }, immediateRender: true },
        { css: { opacity: 1 } }
      ),

      TweenMax.staggerTo($("#bugatti_veyron"), 0.1, {
        css: { opacity: 0.4 },
        immediateRender: true
      })
    ])

    .appendMultiple([
      TweenMax.staggerTo($("#veyron_hold_box"), 5, {
        css: { zIndex: "77777", opacity: 1 }
      }),

      TweenMax.staggerTo($("#veyron_hold_box"), 1, { css: { opacity: 0 } }),

      TweenMax.staggerFromTo(
        $("#bugatti_v_tire"),
        5,
        { css: { rotation: "0deg" } },
        { css: { rotation: "70deg" }, immediateRender: true }
      ),

      TweenMax.staggerFromTo(
        $("#bugatti_v_tire_2"),
        5,
        { css: { rotation: "0deg" }, immediateRender: true },
        { css: { rotation: "70deg" } }
      ),

      TweenMax.staggerTo($("#veyron_hold_box"), 5, { css: { left: 7 } }),
      TweenMax.staggerTo($("#stage_2"), 5, { css: { left: 102 } }),

      TweenMax.staggerFromTo(
        rulers,
        3,
        { css: { autoAlpha: 0.3, rotation: "0deg" } },
        {
          css: { autoAlpha: 0, rotation: "4000deg" },
          ease: Back.easeOut,
          immediateRender: true
        },
        0.2
      )
    ]);
});