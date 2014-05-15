
//
// polynomial options
//
  	function polyline_options1(val) {
		return {
      	color: getColor(val),
			weight: 0,
//		fillOpacity: 0.2
			fillOpacity: 0.3
		}
	  };



//
// a point to a block
//
	function createpoly(cent,res) {
		return ( [
		 [cent[0]+res,cent[1]-res*1.01],
		 [cent[0]+res,cent[1]+res*1.01],
		 [cent[0]-res,cent[1]+res*1.01],
		 [cent[0]-res,cent[1]-res*1.01]
		]);
	};



//
// load initial polynomial from the current shitty format 
//
	function loadPoly(sname) {
	
		var cities = L.layerGroup();
		var indata = refData[sname]; 
		for (var i = 0; i < indata.length; i++) {	
			
			var poly = new 	L.polygon(
				createpoly(indata[i]["latlon"],refData["res"])
				,polyline_options1(indata[i]["dist"])
				);

//			poly["options"]["color"] = getColor(indata[i]["dist"]); 
			cities.addLayer(poly);

		}
		return cities;	
	}


//
// change the color of the existing layers
//
	function recolor(val){

		jc = 0;
		
		polies.getLayers().forEach(
			function(x){
				x.setStyle({color:getColor(refData[val][jc].dist)});
				jc +=1;
				return x;
				
			}
		);
		return 1;
		
	}



