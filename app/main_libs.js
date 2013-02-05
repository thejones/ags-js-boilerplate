/**


 * More information about everything described about the loader throughout this file can be found at
 * <http://dojotoolkit.org/reference-guide/loader/amd.html>.
 */
define(['require'], function (require) {

    dojo.require("esri.map");
    dojo.require('esri.dijit.Popup');
    define.amd.jQuery = true;
    var app = {};


    require(["esri/Map", "esri/layers/FeatureLayer", "js/Dialog", "js/SeatGeekUtils",
        "dojo/parser", "jquery", "dijit/layout/BorderContainer", "dijit/layout/ContentPane"
    ], function (Map, FeatureLayer, Dialog, SeatGeekSearch, parser, $) {
        $(document).ready(function () {
            //alert("Jquery loaded");
            parser.parse();
            // create the dijit layout widgets

            app.dialog = new Dialog().placeAt(document.body);

            // // It is important to remember to always call startup on widgets after you have added them to the DOM.
            // // It will not hurt if you do it twice, but things will often not work right if you forget to do it.
            app.dialog.startup();

            // // And now we just show the dialog to demonstrate that, yes, the example app has loaded successfully.
            app.dialog.show();


            //Map code and SeatGeek setup
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
                "extent": ext,
                "slider": false,
                "wrapAround180": true
            });

            var basemap = new esri.layers.ArcGISTiledMapServiceLayer("http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer");
            app.map.addLayer(basemap);

            dojo.connect(app.map, "onLoad", function () {
                dojo.connect(dijit.byId("map"), "resize", app.map, map.resize);
            });
        });

    });

});