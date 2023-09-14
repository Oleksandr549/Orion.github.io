(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  if (
    (null !== document.querySelector("#chart") &&
      Highcharts.chart("chart", {
        chart: {
          type: "spline",
          backgroundColor: "transparent",
          spacing: [0, 0, 0, 0],
          margin: [0, 0, 0, 0],
        },
        series: [
          {
            name: "",
            data: [
              { x: 1, y: 3 },
              { x: 2, y: 8 },
              { x: 3, y: 6 },
              { x: 4, y: 12 },
              { x: 5, y: 10 },
            ],
            lineWidth: 2,
            marker: { enabled: !1 },
            color: "#991bfa",
          },
          {
            name: "",
            data: [
              { x: 1, y: 8 },
              { x: 2, y: 4 },
              { x: 3, y: 10 },
              { x: 4, y: 6 },
              { x: 5, y: 14 },
            ],
            lineWidth: 2,
            marker: { enabled: !1 },
            color: "#01f1e3",
          },
        ],
        legend: { enabled: !1 },
        title: { text: null },
        xAxis: { visible: !1 },
        yAxis: { visible: !1 },
        credits: { enabled: !1 },
        exporting: { enabled: !1 },
      }),
    null !== document.querySelector(".count") &&
      setTimeout(() => {
        $(".count").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              { Counter: $(this).text() },
              {
                duration: 4e3,
                easing: "swing",
                step: function (e) {
                  $(this).text(Math.ceil(e));
                },
              }
            );
        });
      }, 1e3),
    null !== document.querySelector(".header"))
  ) {
    const t = document.querySelector(".header");
    function n() {
      t.classList.add("is-active"), clearTimeout(n);
    }
    setTimeout(n, 100),
      setTimeout(() => {
        let e = new IntersectionObserver(
            function (e) {
              e.forEach((e) => {
                e.isIntersecting && e.target.classList.add("is-active");
              });
            },
            { threshold: [0.5] }
          ),
          t = document.querySelectorAll(".element-animation");
        for (let n of t) e.observe(n);
      }, 1e3);
  }

  if (null !== document.querySelector("#myearth")) {
    var myearth = new Earth("myearth", {
      location: { lat: 22.5, lng: 20 },
      mapLandColor: "#7C7B8B",
      mapSeaColor: "#6F6C83",
      light: "sun",
      lightIntensity: 2,
      lightColor: "#ceb3f3",
      sunDirection: { x: 0.6, y: 2 },
      quality: 6,
      shininess: 0,
      lightAmbience: 0.2,
      autoRotate: true,
    });
    myearth.addPoints({
      points: [
        { location: { lat: 12.5, lng: 18.7 }, scale: 1.5, offset: 0.25 },
        { location: { lat: 19.3, lng: 10.2 }, scale: 1.3 },
        { location: { lat: 14.9, lng: 15.1 }, scale: 1.3, opacity: 0.5 },
      ],
      color: "#16E0B5",
      opacity: 0.75,
    });
  }
  (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    });
})();
