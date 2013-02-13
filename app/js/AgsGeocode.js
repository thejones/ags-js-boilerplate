
define([ "dojo/_base/declare","esri/dijit/Geocoder"], 
  function(declare,Geocoder) {
    return declare(null, {    
      map: null,

      constructor: function(options){
        // specify class defaults        
        this.map = options.map || "unknown";  
         
        
      },

      createGeocode: function() {
        /*alert("this.map " + this.map);*/        
        var geocoder;        
        // create the geocoder
        geocoder = new esri.dijit.Geocoder({ 
           autoComplete: true,
           maxLocations: 10,
           map: this.map 
        }, "search");
        geocoder.startup();

      }
    });
  }
);

