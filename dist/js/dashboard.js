/*====== Add Page Modal ========= */
const closeBtn = document.querySelector(".closeBtn");
const closeModal = document.querySelector(".closeModal");
const modal = document.querySelector("#page-modal");
const modalbtn = document.querySelector(".add-page");

// open modal
modalbtn.addEventListener("click", function(e) {
  modal.style.display = "block";
  e.preventDefault();
});

// close modal
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

closeModal.addEventListener("click", function(e) {
  modal.style.display = "none";
  e.preventDefault();
});

// close by clicking outside the box,
// modal is the grey area outside the box
window.addEventListener("click", function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

/*===== Bar Chart ======*/
// chart options
const optionsBar = {
  chart: {
    height: 350,
    // width: "500px",
    type: "bar",
    background: "#f7f7f7",
    foreColor: "#333"
  },
  colors: ["#4caf50"],
  series: [
    {
      name: "Customers",
      data: [
        65,
        35,
        52,
        53,
        37,
        24,
        21,
        57,
        55,
        93,
        63,
        48,
        39,
        54,
        35,
        19,
        47,
        41,
        39,
        58,
        68,
        49
      ]
    }
  ],
  xaxis: {
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan",
      "08 Jan",
      "09 Jan",
      "10 Jan",
      "11 Jan",
      "12 Jan",
      "13 Jan",
      "14 Jan",
      "15 Jan",
      "16 Jan",
      "17 Jan",
      "18 Jan",
      "19 Jan",
      "20 Jan",
      "21 Jan",
      "22 Jan"
    ]
  },
  title: {
    text: "Customers for January 2019",
    align: "left"
  }
};
// init chart
const chart = new ApexCharts(document.querySelector("#bar-chart"), optionsBar);

// render chart
chart.render();

/* ======= Synced Charts  =======*/
Apex = {
  chart: {
    height: 180,
    // width: "500px",
    background: "#f7f7f7",
    foreColor: "#333"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "straight"
  },
  toolbar: {
    tools: {
      selection: false
    }
  },
  markers: {
    size: 6,
    hover: {
      size: 10
    }
  },
  tooltip: {
    followCursor: false,
    theme: "dark",
    x: {
      show: false
    },
    marker: {
      show: false
    },
    y: {
      title: {
        formatter: function() {
          return "";
        }
      }
    }
  },
  grid: {
    clipMarkers: false
  },
  yaxis: {
    tickAmount: 2
  },
  xaxis: {
    type: "datetime"
  },
  responsive: [
    {
      breakpoint: 350,
      options: {
        chart: {
          width: 310
        }
      }
    },
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 350
        }
      }
    }
  ]
};

var optionsLine1 = {
  chart: {
    id: "fb",
    group: "social",
    type: "line"
  },
  colors: ["#008FFB"],
  series: [
    {
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
        min: 10,
        max: 60
      })
    }
  ],
  title: {
    text: "Sales",
    align: "left"
  }
};

var chartLine1 = new ApexCharts(
  document.querySelector("#chart-line"),
  optionsLine1
);

chartLine1.render();

var optionsline2 = {
  chart: {
    id: "tw",
    group: "social",
    type: "line"
  },
  colors: ["#546E7A"],
  series: [
    {
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
        min: 10,
        max: 30
      })
    }
  ],
  title: {
    text: "Expences",
    align: "left"
  }
};

var chartline2 = new ApexCharts(
  document.querySelector("#chart-line2"),
  optionsline2
);

chartline2.render();

var optionsArea = {
  chart: {
    id: "yt",
    group: "social",
    type: "area"
  },
  colors: ["#00E396"],
  series: [
    {
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
        min: 10,
        max: 60
      })
    }
  ],
  title: {
    text: "Profits",
    align: "left"
  }
};

var chartArea = new ApexCharts(
  document.querySelector("#chart-area"),
  optionsArea
);

chartArea.render();

/*
  // this function will generate output in this format
  // data = [
      [timestamp, 23],
      [timestamp, 33],
      [timestamp, 12]
      ...
  ]
*/
function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

/*========= Donut Chart ========= */
// chart options
var optionsDonut = {
  chart: {
    type: "donut",
    height: 350,
    background: "#f7f7f7",
    foreColor: "#333"
  },
  series: [20, 35, 41, 17, 40],
  labels: [
    "IT Service & support",
    "Web & Custom Development",
    "Hosted & Managed Services",
    "Cloud Storage",
    "Network & IT Infrastructure "
  ],
  dataLabels: {
    enabled: true,
    formatter: function(val) {
      return Math.floor(val) + "%";
    }
  },
  // title: {
  //   text: "Monthly Department Sales",
  //   align: "left"
  // },
  responsive: [
    {
      breakpoint: 580,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: "bottom"
        }
      }
    }
  ]
};

//  init chart
const donut = new ApexCharts(
  document.querySelector("#donut-chart"),
  optionsDonut
);

// render chart
donut.render();
