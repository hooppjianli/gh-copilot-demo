// generate a plot with D3.js of the selling price of the album by year
// x-axis are the month series and y-axis show the numbers of albums sold
// data from the sales of album are loaded in from an external source and are in json format

import * as d3 from 'd3';

export function generateAlbumPricePlot(data: { year: number; price: number }[]) {
  const margin = { top: 20, right: 30, bottom: 40, left: 40 };
  const width = 800 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const svg = d3
    .select('#album-price-plot')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const x = d3
    .scaleBand()
    .domain(data.map(d => d.year.toString()))
    .range([0, width])
    .padding(0.1);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.price) || 0])
    .nice()
    .range([height, 0]);

  svg
    .append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x));

  svg.append('g').attr('class', 'y-axis').call(d3.axisLeft(y));

  svg
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => x(d.year.toString()) || 0)
    .attr('y', d => y(d.price))
    .attr('width', x.bandwidth())
    .attr('height', d => height - y(d.price))
    .attr('fill', 'steelblue');
}   


