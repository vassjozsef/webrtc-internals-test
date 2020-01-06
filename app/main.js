const {TimelineDataSeries, TimelineGraphView} = require('webrtc-internals');

const graph = document.getElementById('graph')
const graphView = new TimelineGraphView(graph);

const dataSeries = new TimelineDataSeries();
graphView.addDataSeries(dataSeries);

setInterval(() => {
  const timestamp = Date.now();
  dataSeries.addPoint(timestamp, Math.random());
  graphView.updateEndDate();
}, 1000);
