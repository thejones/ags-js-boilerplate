/**
 

 * More information about everything described about the loader throughout this file can be found at
 * <http://dojotoolkit.org/reference-guide/loader/amd.html>.
 */
define(['require'], function (require) {

    /*dojo.require("esri.map");
    dojo.require('esri.dijit.Popup');*/

    var app = {};


    require(["esri/map", "esri/layers/FeatureLayer", "js/Dialog", "js/AgsGeocode",
        "dojo/parser", "dijit/layout/BorderContainer", "dijit/layout/ContentPane",
        "dojo/domReady!"], function (Map, FeatureLayer, Dialog, AgsGeocode, parser) {

        // create the dijit layout widgets
        parser.parse();
        /*Dialog from dojo-bootstrap*/
        app.dialog = new Dialog().placeAt(document.body);
        app.dialog.startup();
        app.dialog.show();

        //Map code and Geocode startup
        var ext = new esri.geometry.Extent({
            "xmin": -17106023,
            "ymin": 2425274,
            "xmax": -5081561,
            "ymax": 7503138,
            "spatialReference": {
                "wkid": 102100
            }
        });
        app.map = new esri.Map("map", {
          basemap: "topo",
          center: [-122.41, 37.75],
          zoom: 14
        });

       

        dojo.connect(app.map, "onLoad", function () {
            dojo.connect(dijit.byId("map"), "resize", app.map, map.resize);
        });

        app.agsGeocode = new AgsGeocode({"map": app.map});
        app.agsGeocode.createGeocode();
        
    });

});