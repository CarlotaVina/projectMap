var  dataLocations = {
      mainLocations: [
	     {  
		      position: {lat: 40.438169, lng: -3.687462},
			  title: 'Position 1', 
			  tags: ['restaurant']
		  },
		  {
		     position:  {lat: 40.436407, lng: -3.690125},
			 title: 'Position 2',
			 tags: ['shop']
					  },
					  {
		     position:  {lat: 40.435680, lng: -3.689642},
			 title: 'Position 3 ',
			 tags: ['shop']
					  },
					  
    ]
};	

var InitializeLocation = function(data) {
			this.position = ko.observable(data.position);
			this.title= ko.observable(data.title);
			this.tags = ko.observableArray(data.tags);
			
		};


function  NeighborhoodModel() {
console.log("initialize");
}


function initializeMap() {
console.log("step5");
var map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 40.437214, lng: -3.685638},
	zoom: 16
	});
console.log("step6");
for(var  i=0; i<dataLocations.length; i++) {
console.log("step7");
var marker = new google.maps.Marker(
					{
						map: map,
						position: dataLocation[i].position,
						title: dataLocation[i].title
					});
	}
}

// Activates knockout.js
ko.applyBindings(new  NeighborhoodModel());


