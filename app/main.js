const {TimelineDataSeries, TimelineGraphView} = require('webrtc-internals');

const grap = document.getElementById('graph')
const graphView = new TimelineGraphView(graph);

const dataSeries = new TimelineDataSeries();
graphView.addDataSeries(dataSeries);

setInterval(() => {
  const timestamp = Date.now();
  dataSeries.addPoint(timestamp, Math.random());
  graphView.updateEndDate();
}, 1000);
