
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
	
		var cities = new L.layerGroup();
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

//
// read cookie
//
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}


//
// erase cookie
//	
function eraseCookie(name) {
	createCookie(name,"",-1);
}

//
// set the cookie
//
function setCookie(cname,cvalue,exdays)
{
var d = new Date();
d.setTime(d.getTime()+(exdays*24*60*60*1000));
var expires = "expires="+d.toGMTString();
document.cookie = cname + "=" + cvalue + "; " + expires;
}
//
// alternate createCookie
//
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

