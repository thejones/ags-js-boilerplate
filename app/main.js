/**
 

 * More information about everything described about the loader throughout this file can be found at
 * <http://dojotoolkit.org/reference-guide/loader/amd.html>.
 */
define(['require'], function (require) {
    /*dojo.require("esri.map");
    dojo.require('esri.dijit.Popup');*/
    var app = {};
    require(["esri/map", "esri/layers/FeatureLayer", "js/Dialog", "js/AgsGeocode",
        "js/ExampleWidget","dojo/dom","dojo/request","dojo/_base/array","dojo/parser", "dijit/layout/BorderContainer", "dijit/layout/ContentPane",
        "dojo/domReady!"], function (Map, FeatureLayer, Dialog, AgsGeocode,ExampleWidget,dom,request,array, parser) {

        // create the dijit layout widgets
        parser.parse();

        /*Dialog from dojo-bootstrap*/
        app.dialog = new Dialog().placeAt(document.body);
        app.dialog.startup();
        app.dialog.show();

        //Map code and Geocode startup
        app.map = new esri.Map("map", {
          basemap: "topo",
          center: [-122.41, 37.75],
          zoom: 14
        });

       

        dojo.connect(app.map, "onLoad", function () {
            dojo.connect(dijit.byId("map"), "resize", app.map, map.resize);
        });

        /*Application "custom" geocode class*/
        app.agsGeocode = new AgsGeocode({"map": app.map});
        app.agsGeocode.createGeocode();

        /*Application "custom" widget*/
        var example = new ExampleWidget({}).placeAt(dom.byId("exampleWidgetContainer"));
        
    });

});