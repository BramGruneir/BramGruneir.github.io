(this.webpackJsonpsurvival=this.webpackJsonpsurvival||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=t(7),s=t.n(r),l=(t(13),t(1)),o=t(2),c=t(3),d=t(5),u=t(4);t(14);function p(e){return Math.random().toString()}function h(e){return e.failed?"Box-failed":0===e.replicas?"Box-empty":"Box"}var m,v=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=h(this.props),a=this.props.replicas>0?"Replicas-full":"Replicas-empty";return n.a.createElement("div",{className:"".concat(e)},n.a.createElement("div",null,"Node ",this.props.id),n.a.createElement("div",{className:"".concat(a)},"Replicas ",this.props.replicas))}}]),t}(n.a.Component),f=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.nodes.map((function(e){return n.a.createElement(v,e)})),a=h(this.props),t=this.props.replicas>0?"Replicas-full":"Replicas-empty";return n.a.createElement("div",{className:"".concat(a)},n.a.createElement("div",null,"AZ ",this.props.id),n.a.createElement("div",{className:"".concat(t)},"Replicas ",this.props.replicas),e)}}]),t}(n.a.Component),g=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.availabilityZones.map((function(e){return n.a.createElement(f,e)})),a=h(this.props),t=this.props.replicas>0?"Replicas-full":"Replicas-empty";return n.a.createElement("div",{className:"".concat(a)},n.a.createElement("div",null,"DC ",this.props.id),n.a.createElement("div",{className:"".concat(t)},"Replicas ",this.props.replicas),e)}}]),t}(n.a.Component),b=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.datacenters.map((function(e){return n.a.createElement(g,e)})),a=h(this.props),t=this.props.replicas>0?"Replicas-full":"Replicas-empty";return n.a.createElement("div",{className:"".concat(a)},n.a.createElement("div",null,"Region ",this.props.id),n.a.createElement("div",{className:"".concat(t)},"Replicas ",this.props.replicas),n.a.createElement("div",{className:"App-container"},e))}}]),t}(n.a.Component);function C(e,a,t){return e<a?a:e>t?t:e}!function(e){e[e.None=0]="None",e[e.Region=1]="Region",e[e.DataCenter=2]="DataCenter",e[e.AvailabilityZone=3]="AvailabilityZone",e[e.Node=4]="Node"}(m||(m={}));var R=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var i;return Object(o.a)(this,t),(i=a.call(this,e)).state={numberRegions:3,DCsPerRegion:3,AZsPerDC:3,NodesPerAZ:3,replicationFactor:3,failureMode:m.Region,failedRegions:0,failedDCs:0,failedAZs:0,failedNodes:0,deadReplicas:0,allowableDead:0,regions:[]},i.handleNumberRegionsChange=i.handleNumberRegionsChange.bind(Object(l.a)(i)),i.handleDCsPerRegionChange=i.handleDCsPerRegionChange.bind(Object(l.a)(i)),i.handleAZsPerDCChange=i.handleAZsPerDCChange.bind(Object(l.a)(i)),i.handleNodesPerAZChange=i.handleNodesPerAZChange.bind(Object(l.a)(i)),i.handleReplicationFactorChange=i.handleReplicationFactorChange.bind(Object(l.a)(i)),i.handleFailureModeChange=i.handleFailureModeChange.bind(Object(l.a)(i)),i}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.getCurrentState();this.setState(this.update(e))}},{key:"getCurrentState",value:function(){return{numberRegions:this.state.numberRegions,DCsPerRegion:this.state.DCsPerRegion,AZsPerDC:this.state.AZsPerDC,NodesPerAZ:this.state.NodesPerAZ,replicationFactor:this.state.replicationFactor,failureMode:this.state.failureMode,failedRegions:this.state.failedRegions,failedDCs:this.state.failedDCs,failedAZs:this.state.failedAZs,failedNodes:this.state.failedNodes,deadReplicas:this.state.deadReplicas,allowableDead:this.state.allowableDead,regions:[]}}},{key:"handleNumberRegionsChange",value:function(e){var a=parseInt(e.target.value)||1;a=C(a,1,10);var t=this.getCurrentState();t.numberRegions=a,this.setState(this.update(t))}},{key:"handleDCsPerRegionChange",value:function(e){var a=parseInt(e.target.value)||1;a=C(a,1,10);var t=this.getCurrentState();t.DCsPerRegion=a,this.setState(this.update(t))}},{key:"handleAZsPerDCChange",value:function(e){var a=parseInt(e.target.value)||1;a=C(a,1,10);var t=this.getCurrentState();t.AZsPerDC=a,this.setState(this.update(t))}},{key:"handleNodesPerAZChange",value:function(e){var a=parseInt(e.target.value)||1;a=C(a,1,100);var t=this.getCurrentState();t.NodesPerAZ=a,this.setState(this.update(t))}},{key:"handleReplicationFactorChange",value:function(e){var a=parseInt(e.target.value)||1;a%2===0&&(this.state.replicationFactor>a?a--:a++),a=C(a,1,99);var t=this.getCurrentState();t.replicationFactor=a,this.setState(this.update(t),this.forceUpdate)}},{key:"handleFailureModeChange",value:function(e){var a=this.getCurrentState();a.failureMode=parseInt(e.target.value)||m.None,this.setState(this.update(a))}},{key:"update",value:function(e){e.allowableDead=Math.floor(e.replicationFactor/2),e.regions=[];for(var a=0;a<e.numberRegions;a++){for(var t={key:"",id:a+1,failed:!1,datacenters:[],replicas:0},i=0;i<e.DCsPerRegion;i++){for(var n={key:"",id:i+1,failed:!1,replicas:0,availabilityZones:[]},r=0;r<e.AZsPerDC;r++){for(var s={key:"",id:r+1,failed:!1,replicas:0,nodes:[]},l=0;l<e.NodesPerAZ;l++){var o={key:"",id:l+1,failed:!1,replicas:0};s.nodes.push(o)}n.availabilityZones.push(s)}t.datacenters.push(n)}e.regions.push(t)}for(var c=0;c<e.replicationFactor;c++){var d=c%e.numberRegions;e.regions[d].replicas++}if(e.regions.forEach((function(a){for(var t=0;t<a.replicas;t++){var i=t%e.DCsPerRegion;a.datacenters[i].replicas++}})),e.regions.forEach((function(a){return a.datacenters.forEach((function(a){for(var t=0;t<a.replicas;t++){var i=t%e.AZsPerDC;a.availabilityZones[i].replicas++}}))})),e.regions.forEach((function(a){return a.datacenters.forEach((function(a){return a.availabilityZones.forEach((function(a){for(var t=0;t<a.replicas;t++){var i=t%e.NodesPerAZ;a.nodes[i].replicas++}}))}))})),e.deadReplicas=0,e.failedRegions=0,e.failedDCs=0,e.failedAZs=0,e.failedNodes=0,e.failureMode===m.Region)for(var u=0;u<e.numberRegions&&0!==e.regions[u].replicas&&e.deadReplicas+e.regions[u].replicas<=e.allowableDead;u++)e.regions[u].failed=!0,e.deadReplicas+=e.regions[u].replicas,e.failedRegions++;if(e.failureMode>m.None&&e.failureMode<=m.DataCenter&&e.deadReplicas<e.allowableDead)for(var h=-1,v=0;e.deadReplicas<e.allowableDead&&!(++h>=e.numberRegions&&(h=0,++v>=e.DCsPerRegion));)if(!e.regions[h].failed){if(0===e.regions[h].replicas||0===e.regions[h].datacenters[v].replicas)break;if(!(e.deadReplicas+e.regions[h].datacenters[v].replicas<=e.allowableDead))break;e.regions[h].datacenters[v].failed=!0,e.deadReplicas+=e.regions[h].datacenters[v].replicas,e.failedDCs++}if(e.failureMode>m.None&&e.failureMode<=m.AvailabilityZone&&e.deadReplicas<e.allowableDead)for(var f=-1,g=0,b=0;e.deadReplicas<e.allowableDead&&!(++f>=e.numberRegions&&(f=0,++g>=e.DCsPerRegion&&(g=0,++b>=e.AZsPerDC)));)if(!e.regions[f].failed&&!e.regions[f].datacenters[g].failed){if(0===e.regions[f].replicas||0===e.regions[f].datacenters[g].replicas||0===e.regions[f].datacenters[g].availabilityZones[b].replicas)break;if(!(e.deadReplicas+e.regions[f].datacenters[g].availabilityZones[b].replicas<=e.allowableDead))break;e.regions[f].datacenters[g].availabilityZones[b].failed=!0,e.deadReplicas+=e.regions[f].datacenters[g].availabilityZones[b].replicas,e.failedAZs++}if(e.failureMode>m.None&&e.failureMode<=m.Node&&e.deadReplicas<e.allowableDead)for(var C=-1,R=0,E=0,N=0;e.deadReplicas<e.allowableDead&&!(++C>=e.numberRegions&&(C=0,++R>=e.DCsPerRegion&&(R=0,++E>=e.AZsPerDC&&(E=0,++N>=e.NodesPerAZ))));)if(!(e.regions[C].failed||e.regions[C].datacenters[R].failed||e.regions[C].datacenters[R].availabilityZones[E].failed)){if(0===e.regions[C].replicas||0===e.regions[C].datacenters[R].replicas||0===e.regions[C].datacenters[R].availabilityZones[E].replicas||0===e.regions[C].datacenters[R].availabilityZones[E].nodes[N].replicas)break;if(!(e.deadReplicas+e.regions[C].datacenters[R].availabilityZones[E].nodes[N].replicas<=e.allowableDead))break;e.regions[C].datacenters[R].availabilityZones[E].nodes[N].failed=!0,e.deadReplicas+=e.regions[C].datacenters[R].availabilityZones[E].nodes[N].replicas,e.failedNodes++}return e.regions.forEach((function(e){e.key=p(),e.datacenters.forEach((function(e){e.key=p(),e.availabilityZones.forEach((function(e){e.key=p(),e.nodes.forEach((function(e){e.key=p()}))}))}))})),e}},{key:"render",value:function(){var e=this.state.regions.map((function(e){return n.a.createElement(b,e)})),a=this.state.numberRegions*this.state.DCsPerRegion*this.state.AZsPerDC*this.state.NodesPerAZ;return n.a.createElement("div",null,n.a.createElement("div",{className:"App-form"},n.a.createElement("form",null,n.a.createElement("table",{className:"App-table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Regions"),n.a.createElement("th",null,"DCs per Region"),n.a.createElement("th",null,"AZs per DC"),n.a.createElement("th",null,"Nodes per AZ"),n.a.createElement("th",null,"Replication Factor"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("input",{className:"App-input",type:"number",value:this.state.numberRegions,onChange:this.handleNumberRegionsChange})),n.a.createElement("td",null,n.a.createElement("input",{className:"App-input",name:"DCsPerRegion",type:"number",value:this.state.DCsPerRegion,onChange:this.handleDCsPerRegionChange})),n.a.createElement("td",null,n.a.createElement("input",{className:"App-input",name:"AZsPerDC",type:"number",value:this.state.AZsPerDC,onChange:this.handleAZsPerDCChange})),n.a.createElement("td",null,n.a.createElement("input",{className:"App-input",name:"NodesPerAZ",type:"number",value:this.state.NodesPerAZ,onChange:this.handleNodesPerAZChange})),n.a.createElement("td",null,n.a.createElement("input",{className:"App-input",name:"replicationFactor",type:"number",value:this.state.replicationFactor,onChange:this.handleReplicationFactorChange}))))),n.a.createElement("div",{className:"FailureMode"},n.a.createElement("div",null,"Failure Mode:"),n.a.createElement("select",{className:"FailureSelect",value:this.state.failureMode,onChange:this.handleFailureModeChange},n.a.createElement("option",{value:m.None},"None"),n.a.createElement("option",{value:m.Region},"Region"),n.a.createElement("option",{value:m.DataCenter},"DataCenter"),n.a.createElement("option",{value:m.AvailabilityZone},"AvailabilityZone"),n.a.createElement("option",{value:m.Node},"Node"))))),a<this.state.replicationFactor&&n.a.createElement("div",{className:"Underreplicated"},"The system is underreplicated: There are ",a," nodes, but ",this.state.replicationFactor," are needed."),this.state.failureMode!==m.None&&n.a.createElement("div",{className:"FailureResults"},n.a.createElement("div",null,"With ",this.state.replicationFactor,"x replication you can survive a max of ",this.state.allowableDead," dead replica",1!==this.state.allowableDead&&"s","."),n.a.createElement("div",null,"This scenario will survive losing at most:"),n.a.createElement("div",{className:"FailureTable"},!!this.state.failedRegions&&n.a.createElement("div",{className:"FailureRow"},n.a.createElement("div",{className:"FailureColumn"},n.a.createElement("div",{className:"FailureHeader"},"Regions")),n.a.createElement("div",{className:"FailureColumn"},n.a.createElement("div",{className:"FailureValue"},this.state.failedRegions))),!(!this.state.failedRegions&&!this.state.failedDCs)&&n.a.createElement("div",{className:"FailureRow"},n.a.createElement("div",{className:"FailureColumn"},n.a.createElement("div",{className:"FailureHeader"},"Data Centers")),n.a.createElement("div",{className:"FailureColumn"},n.a.createElement("div",{className:"FailureValue"},this.state.failedDCs))),!!(this.state.failedRegions||this.state.failedDCs||this.state.failedAZs)&&n.a.createElement("div",{className:"FailureRow"},n.a.createElement("div",{className:"FailureColumn"},n.a.createElement("div",{className:"FailureHeader"},"Availability Zones")),n.a.createElement("div",{className:"FailureColumn"},n.a.createElement("div",{className:"FailureValue"},this.state.failedAZs))),n.a.createElement("div",{className:"FailureRow"},n.a.createElement("div",{className:"FailureColumn"},n.a.createElement("div",{className:"FailureHeader"},"Nodes")),n.a.createElement("div",{className:"FailureColumn"},n.a.createElement("div",{className:"FailureValue"},this.state.failedNodes))))),n.a.createElement("div",{className:"App-container"},e))}}]),t}(n.a.Component);var E=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(R,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.7e195a35.chunk.js.map