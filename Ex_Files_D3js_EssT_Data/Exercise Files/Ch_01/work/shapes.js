var dataArray = [5, 11, 18];

var svg = d3.select("body").append("svg")
    .attr("height", "100%")
    .attr("width", "100%");

svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
    .attr("height", function(data, index){return data * 15;})
    .attr("width", "50")
    .attr('fill', 'blue')
    .attr("x",function(data, index){return 60*index;})
    .attr("y",function(data, index){return 300 - data * 15;});

var newX = 300;
svg.selectAll("circle.first")
    .data(dataArray)
    .enter().append("circle")
            .attr('class', 'first')
            .attr('cx',function(data, index){newX += (data*3) + (index*20); return newX;})
            .attr('cy','100')
            .attr('r',function(data, index){return data * 3;});


var newX = 600;
svg.selectAll("ellipse")
    .data(dataArray)
    .enter().append("ellipse")
            .attr('class', 'second')
            .attr('cx',function(data, index){newX += (data*3) + (index*20); return newX;})
            .attr('cy','100')
            .attr('rx',function(data, index){return data * 3;})
            .attr('ry','30');



var newX = 900;
svg.selectAll("line")
    .data(dataArray)
    .enter().append("line")
            .style('stroke','green')
            .attr('stroke','blue')
            .attr('stroke-width','2')
            .attr('x1',newX)
            .attr('y1',function(data, index){return 80+(index*20);})
            .attr('x2',function(data, index){return newX+(data*15);})
            .attr('y2',function(data, index){return 80+(index*20);});

var textArray = ['start', 'middle', 'end'];
svg.append('text').selectAll('tspan')
    .data(textArray)
    .enter().append('tspan')
    .attr('x',newX)
    .attr('y',function(data, index){return 150 + (index*30);})
    .attr('font-size', 30)
    .attr('fill','none')
    .attr('stroke','blue')
    .attr('stroke-width','2')
    .attr('text-anchor','Start')
    .attr('dominant-baseline', 'middle')
    .text(function(data, index){return data;});

svg.append('line')
    .attr('x1',newX)
    .attr('y1',150)
    .attr('x2',newX)
    .attr('y2',210);