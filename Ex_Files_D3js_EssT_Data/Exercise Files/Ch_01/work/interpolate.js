var  dataArray = [{x:5, y:5},{x:10, y:15},{x:20, y:7},{x:30, y:18},{x:40, y:10}];
var interpolateTypes = [d3.curveLinear, d3.curveNatural, d3.curveStep, d3.curveBasis,
                        d3.curveBundle, d3.curveCardinal];
var svg = d3.select('body').append('svg').attr('height', '100%').attr('width', '100%');

for (var i=0;i<6;i++){

    var line = d3.line()
                    .x(function(data, index){return data.x*6;})
                    .y(function(data, index){return data.y*4;})
                    .curve(interpolateTypes[i]);

    var shiftX = i*250;
    var shiftY = 0;

    var chartGroup = svg.append('g').attr('class', 'group'+i).attr('transform', 'translate('+ shiftX +',0)');

    chartGroup.append('path')
        .attr('d', line(dataArray))
        .attr('fill', 'none')
        .attr('stroke', 'blue');


    chartGroup.selectAll('circle.grp'+i)
        .data(dataArray)
        .enter().append('circle')
            .attr('class', function(data, index){return 'grp' + i;})
            .attr('cx', function(data, index){return data.x*6;})
            .attr('cy', function(data, index){return data.y*4;})
            .attr('r', '2');
}