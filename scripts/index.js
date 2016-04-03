var sigInst;

function init() {

    sigma.classes.graph.addMethod("neighbors", function(nodeId) {
      var index = this.allNeighborsIndex[nodeId] || {};
      return index;
    });

    sigInst = new sigma({
      renderers: [
        {
          container: document.getElementById("container"),
          type: "canvas"
        }
      ]
    });

    sigInst.settings({
      
      defaultLabelColor: "#bf384f",
      defaultLabelSize: 14,
      defaultLabelHoverColor: "#fff",
      labelThreshold: 0,
      defaultHoverLabelBGColor: "#888",
      defaultLabelBGColor: "#ddd",
      defaultEdgeType: "straight",
      fontStyle: "bold",
      minNodeSize: 3,
      maxNodeSize: 10,
      minEdgeSize: 0.1,
      maxEdgeSize: 0.2,
      scalingMode: "inside",
      sideMargin: 1.5,
      zoomMax: 20 
    });

    sigma.parsers.json(
      "../../graphdata.json",
      sigInst,
      function() {
        
        sigInst.graph.edges().forEach(function(e) {
        	e.type = ['line', 'curve'][Math.random() * 2 | 0];
          e.color = '#9900cc';
          e.originalColor = e.color;
        });

        sigInst.graph.nodes().forEach(function(n) {
          n.color = '#9900cc';
          n.finalColor = '#000000';
        });

        sigInst.refresh();
      }
    );
  }

function reset(){
	sigma.parsers.json(
      "../../graphdata.json",
      sigInst,
      function() {
        sigInst.graph.edges().forEach(function(e) {
          e.color = '#9900cc';
        });

        sigInst.graph.nodes().forEach(function(n) {
          n.color = '#9900cc';
        });

        sigInst.refresh();
      }
    );
  queue = ["n0"];
}

function checkNeighbor(inde1 , inde2){
  var h = false;
  sigInst.graph.edges().forEach(function(e) {
    if((e.source === inde1 && e.target === inde2) || (e.source === inde2 && e.target === inde1)){
      h = true;
    }
    });
  return h;
}

function edgeweights(node1,node2){
  var ed;
  sigInst.graph.edges().forEach(function(e) {
    if((e.source === node1 && e.target === node2) || (e.source === node2 && e.target === node1)){
      ed = e;
    }
    });
    return ed;
}


if (document.addEventListener)
document.addEventListener("DOMContentLoaded", init, false);
else
window.onload = init;