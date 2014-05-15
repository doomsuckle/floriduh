function getColor(d) {
	return d > 100 ? '#800026' :
	       d > 80  ? '#BD0026' :
	       d > 50  ? '#E31A1C' :
	       d > 20  ? '#FC4E2A' :
	       d > 15   ? '#FD8D3C' :
	       d > 10   ? '#FEB24C' :
	       d > 5   ? '#FED976' :
	                  '#FFEDA0';
};

