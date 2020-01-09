const {TimelineDataSeries, TimelineGraphView} = require('webrtc-internals');

const graph = document.getElementById('graph')
const graphView = new TimelineGraphView(graph);
graphView.backgroundColor = 'White';
graphView.textColor = 'Black';
graphView.gridColor = 'Black';
graphView.timeOptions = {timeStyle: 'short'};

const dataSeries = new TimelineDataSeries();
graphView.addDataSeries(dataSeries);

setInterval(() => {
  dataSeries.addPoint(Date.now(), Math.random());
  graphView.updateEndDate();
}, 1000);
