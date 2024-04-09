$(document).ready(() => {

  var isSpinning = false,
    oldData = JSON.parse(localStorage.getItem('sd')),
    screenDiameter = Math.min(window.innerWidth, window.innerHeight),
    scale = 0.75,
    w = screenDiameter * scale,
    h = screenDiameter * scale,
    r = screenDiameter * scale / 2,
    sw = 10, //stroke width
    rotation = 0,
    oldRotation = oldData?.rotation || 0,
    picked = 100000,
    oldPick = oldData?.oldPick || [],
    padding = { top: 0, right: 0, bottom: 0, left: 0 },
    color = d3.scale.category20();//category20c()
  //randomNumbers = getRandomNumbers();

  var data = [
    { "label": "Special Award", "value": 0, "award": "50", "imageUrl": "./assets/images/special_prize.png" },
    { "label": "Award 1", "value": 1, "award": "50", "imageUrl": "https://picsum.photos/id/237/200/300" },
    { "label": "Award 2", "value": 2, "award": "100", "imageUrl": "https://picsum.photos/id/237/200/300" },
    { "label": "Award 3", "value": 3, "award": "150", "imageUrl": "https://picsum.photos/id/237/200/300" },
    { "label": "Award 4", "value": 4, "award": "50", "imageUrl": "https://picsum.photos/id/237/200/300" },
  ];

  var svg = d3.select('#fortune-wheel')
    .append("svg")
    .data([data])
    .attr("width", w + padding.left + padding.right + 2 * sw)
    .attr("height", h + padding.top + padding.bottom + 2 * sw);

  var bg = svg.append("defs").append("radialGradient")
    .attr("id", "svgbg")
    .attr("cx", "50%")
    .attr("cy", "50%")
    .attr("r", "50%")
    .attr("fx", "50%")
    .attr("fy", "50%");

  var bgstop = bg.append("stop")
    .attr("offset", "85%")
    .style({ "stop-color": "#FF385E", "stop-opacity": "1" });

  var bgstop = bg.append("stop")
    .attr("offset", "100%")
    .style({ "stop-color": "#FF1E4A", "stop-opacity": "1" });

  var containerbg = svg.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", w / 2)
    .attr("fill", "url(#svgbg)")
    .attr("stroke", "#EDE7E8")
    .attr("stroke-width", sw)
    .attr("transform", "translate(" + (w / 2 + sw + padding.left) + "," + (h / 2 + sw + padding.top) + ")");
  //<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  var container = svg.append("g")
    .attr("class", "chartholder")
    .attr("transform", "translate(" + (w / 2 + sw + padding.left) + "," + (h / 2 + sw + padding.top) + ")");

  var vis = container.append("g");

  var pie = d3.layout.pie().sort(null).value(function (d) { return 1; });

  // declare an arc generator function
  var arc = d3.svg.arc().outerRadius(r - sw / 2);

  // select paths, use arc generator to draw
  var arcs = vis.selectAll("g.slice")
    .data(pie)
    .enter()
    .append("g")
    .attr("class", "slice");


  arcs.append("path")
    //.attr("fill", function(d, i){ return color(i); })
    //.attr("fill", "url(#svgbg)")
    .attr("fill", "transparent")
    .attr("d", (d) => { return arc(d); })
    .attr("stroke", "#fff");

  // add the text and images
  const imgW = 80, imgH = 80;
  arcs.append("text")
    .attr("text-anchor", "center")
    .attr("y", -(imgH / 4))
    .attr("transform", (d) => {
      d.innerRadius = 0;
      d.outerRadius = r;
      var textLength = d.data.label.length;
      d.angle = (d.startAngle + d.endAngle) / 2;
      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius / 2 - (textLength - 8) * 8) + ")";
    })
    .text(function (d, i) {
      return data[i].label;
    });
  arcs.append("image")
    .attr("xlink:href", (d, i) => data[i].imageUrl)
    .attr("width", imgW)
    .attr("height", imgH)
    .attr("text-anchor", "center")
    .attr("transform", (d) => {
      d.innerRadius = 0;
      d.outerRadius = r;
      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius / 2) + ")";
    });

  //make arrow
  container.append("g")
    //.attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
    .attr("transform", "translate(30, -25)")
    .append("path")
    //.attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
    .attr("d", "M50 25L25 25L25 10z")
    .style({ "fill": "white" });
  container.append("g")
    //.attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
    .attr("transform", "translate(30, -25)")
    .append("path")
    //.attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
    .attr("d", "M50 25L25 40L25 25z")
    .style({ "fill": "#DDDFDC" });

  //draw spin circle
  container.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 60)
    .style({ "fill": "white", "cursor": "pointer" });

  //spin text
  container.append("text")
    .attr("x", 0)
    .attr("y", 10)
    .attr("text-anchor", "middle")
    .attr("class", "centerspin")
    .text("START")
    .style({ "font-weight": "bold", "font-size": "22px" });

  container.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 50)
    .style({ "stroke": "#bf0000", "stroke-width": "3px", "fill": "transparent", "cursor": "pointer" });

  // Then add event listener
  container.on("click", spin);

  // ----------------------------------------------------

  function spin(d) {
    console.log(d);
    if (!isSpinning) {
      isSpinning = true;

      //only can spin once
      if (oldPick.length > "0") {
        container.on("click", null);
        d3.select("#awardresult h5")
          .text("You've already got the Gift!");
        return;
      }

      var ps = 360 / data.length,
        // pieslice = Math.round(1440 / data.length),
        rng = Math.floor((Math.random() * 1440) + 360);

      rotation = (Math.round(rng / ps) * ps);

      picked = Math.round(data.length - (rotation % 360) / ps);
      picked = picked >= data.length ? (picked % data.length) : picked;


      if (oldPick.indexOf(picked) !== -1) {
        d3.select(this).call(spin);
        return;
      } else {
        oldPick.push(picked);
      }

      rotation += 90 - Math.round(ps / 2);

      vis.transition()
        .duration(3000)
        .attrTween("transform", rotTween)
        .each("end", () => {
          //mark question as seen
          d3.select(".slice:nth-child(" + (picked + 1) + ") path")
            .attr("fill", "#a64666");
          //populate question
          if (data[picked].value == 0) {
            d3.select("#awardresult h5")
              .text("Better Luck Next Time!");
          } else {
            d3.select("#awardresult h5")
              .text("Your award is「" + data[picked].award + "」!");
          }
          oldRotation = rotation;
          isSpinning = false;
          container.on("click", spin);
        });
    }
  }

  function rotTween(to) {
    var i = d3.interpolate(oldRotation % 360, rotation);
    return function (t) {
      return "rotate(" + i(t) + ")";
    };
  }

  function getRandomNumbers() {
    var array = new Uint16Array(1000);
    var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);

    if (window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function") {
      window.crypto.getRandomValues(array);
      console.log("works");
    } else {
      //no support for crypto, get crappy random numbers
      for (var i = 0; i < 1000; i++) {
        array[i] = Math.floor(Math.random() * 100000) + 1;
      }
    }

    return array;
  }

})