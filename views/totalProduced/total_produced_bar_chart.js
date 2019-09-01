$.get('/games/totalproduced/data', function(json, status){
    chartdata(json);
});


function chartdata(json) {
  let chartdata = {};
  let labels = chartdata.labels = [];
  chartdata.datasets = [];
  chartdata.datasets.push({data: []});
  let data = chartdata.datasets[0].data;
  json.map(row => {
    console.log(row)
    labels.push(row.publisher);
    data.push(row.count);
  })

  plotdata(chartdata)
}

function plotdata(chartdata) {
  let chartformat = {};
  chartformat.type = 'bar';
  chartformat.data = chartdata;
  chartdata.datasets[0].label = 'Total games';

  let options = chartformat.options = {}; 
  options.title = {};
  options.title.display = true;
  options.title.text = 'Total produced games between 1980 - 2015';
  options.title.fontSize = 24;
  options.title.fontColor = '#ff0000'

  new Chart($('#barChart'), chartformat, options );
}

