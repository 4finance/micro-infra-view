var force;
function draw(data) {

  var nodes = data.nodes;
  var links = data.links;

  var width = ($("#graph").innerWidth()), height = window.innerHeight - 80;

  force = d3.layout.force()
    .nodes( d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(120)
    .charge(-2000)
    .gravity(0.2)
    .friction(0.5)
    .on("tick", tick)
    .start();

  var displayInfo = function (d) {
    var $scope = angular.element($('#panel')).scope();
    $scope.current.collaborator = d;
    $scope.$apply();
    console.log(d);
  };

  var svg = d3.select("#graph").append("svg")
    .attr("width", width)
    .attr("height", height);

// Per-type markers, as they don't inherit styles.
  svg.append("defs").selectAll("marker")
    .data(["broken", "working"])
    .enter().append("marker")
    .attr("id", function (d) {
      return d;
    })
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L8,0L0,5");

  var path = svg.append("g").selectAll("path")
    .data(force.links())
    .enter().append("path")
    .attr("class", function (d) {
      return "link " + d.type;
    })
    .attr("marker-end", function (d) {
      return "url(#" + d.type + ")";
    });

  var drag = force.drag()
    .on("dragstart", dragstart);

  function dblclick(d) {
    d3.select(this).classed("fixed", d.fixed = false);
    force.resume();
  }

  function mouseover(d) {
    d3.select(this).transition()
      .duration(350)
      .attr("r", 16);
  }

  function mouseout(d) {
    d3.select(this).transition()
      .duration(350)
      .attr("r", 8);
  }

  function dragstart(d) {
    d3.select(this).classed("fixed", d.fixed = true);
    d.center = false;
  }


  var circle = svg.append("g").selectAll("circle")
    .data(force.nodes())
    .enter().append("circle")
    .attr("r", 8)
    .attr('class', function (d) {
      return d.status;
    })
    .attr('id', function (d) {
      return d.fullPath.split("/").join("_");
    })
    .on("click", displayInfo)
    .on("mouseover", mouseover)
    .on("mouseout", mouseout)
    .on("dblclick", dblclick)
    .call(drag);

  var text = svg.append("g").selectAll("text")
    .data(force.nodes())
    .enter().append("text")
    .attr("x", 10)
    .attr("y", "-0.3em")
    .text(function (d) {
      return d.path;
    });
  var text2 = svg.append("g").selectAll("text")
    .data(force.nodes())
    .enter().append("text")
    .attr("x", 10)
    .attr("y", "1.1em")
    .text(function (d) {
      return d.address;
    });

// Use elliptical arc path segments to doubly-encode directionality.
  function tick() {
    path.attr("d", linkArc);
    circle.attr("transform", transform);
    text.attr("transform", transform);
    text2.attr("transform", transform);
  }

  function linkArc(d) {
    var dx = d.target.x - d.source.x;
    dy = d.target.y - d.source.y;
    dr = Math.sqrt(dx * dx + dy * dy);
    return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
  }

  function transform(d) {
    if (d.center) {
      d.fixed = false;
      d.x = (d.x * 299 + width/2) / 300;
      d.y = (d.y * 299 + height/2) / 300;

      if ((d.y - height/2) * (d.y - height/2) < 50 * 50 && ((d.x - width/2) * (d.x - width/2)) < 50 * 50) {
        d.center = false;
        $("[id="+ d.fullPath.split("/").join("_")+"]").attr("class", d.status);
      }else {
        force.alpha(.01);
      }
    }
    return "translate(" + d.x + "," + d.y + ")";
  }
}
