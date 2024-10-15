$(function () {
  AOS.init();
  // radio chart
  let chartInstance = null;

  function createOrUpateChart() {
    const ctx = document.getElementById("radar-chart");
    if (!chartInstance) {
      // 새로운 인스턴스(chart)생성
      // new Chart(ctx,{type:키값, data=키값, options:키값})
      chartInstance = new Chart(ctx, {
        type: "radar",
        data: {
          labels: [
            ["밤샘작업에도", "끄떡없는 체력"],
            "강한책임감",
            ["끊임없는", " 도전정신"],
            "분위기메이커",
            ["뛰어난", " 위기대처능력"],
            "긍정끝판왕",
          ],

          datasets: [
            {
              label: "(%)",
              fill: false,
              backgroundColor: "rgba(0,0,255,0.3)",
              borderColor: "transparent",
              pointBackgroundColor: "red",
              pointBorderColor: "#000",
              // data: [90, 90, 85, 50, 85, 90],
              data: [0, 0, 0, 0, 0, 0],
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            r: {
              angleLines: {
                color: "green",
              },

              pointLabels: {
                font: {
                  size: 14
                },
              },
              suggestedMin: 10,
              suggestedMax: 110,
              grid: {
                color: "chocolate",
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 0,
                },
              },
            },
          },
        },
      });
      setTimeout(() => {
        chartInstance.data.datasets.forEach((dataset) => {
          dataset.data = [90, 90, 85, 90, 85, 90];
        });
        chartInstance.update();
      }, 1000);
    } else {
    }
  }

  // createOrUpateChart();
  // scroll reveal animation
  const sr = ScrollReveal({
    distance: "300px",
    duration: 2500,
    rest: false,
  });
  sr.reveal(".section-title,.about-info", {
    origin: "top",
    interval: 500,
  });
  sr.reveal(".about-profile", {
    origin: "left",
  });
  sr.reveal(".edu-content-box, .edu-content-box p, .edu-content-box > h4", {
    origin: "right",
    interval: 500,
  });
  sr.reveal(".about-character", {
    origin: "bottom",
    beforeReveal: function () {
      // 요소가 화면에 나타나기전 실행할 함수
      createOrUpateChart();
    },
  });
});
