<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>
</head>
<body>

</body>
</html>

var h = 300;
var w = 450;
var dataset = [3,54,6,7,3,78];
var padding = 2;
var svg = d3.select("body")
            .append("svg")
            .attr("width",w)
            .attr("height",h);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr({
      x:function (d,i){return (w/dataset.length) * i;},
      y:function (d,i){return h-d;},
      height:function (d,i){return d;},
      width:(w/dataset.length) -2,
      fill:function (d){return "#0057e7";}
    });

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) {return d;})
    .attr({
         "text-anchor":"middle",
          x:function (d,i){return i * (w/dataset.length) + (w/dataset.length - padding)/2 ;},
          y:function (d,i){return h-d ;},
  
});
