define(["dojo/_base/declare","dijit/_WidgetBase", 
	"dijit/_TemplatedMixin", 
	"dojo/text!./ExampleWidget/templates/ExampleWidget.html"],
    function(declare, WidgetBase, TemplatedMixin,template){
        return declare([WidgetBase, TemplatedMixin], {            
			// Our template - important!
			templateString: template,

			// css class 
			baseClass: "exampleWidget",
			constructor: function(){},			
			postCreate: function(){
				// Get a DOM node reference for the root of our widget
				var domNode = this.domNode;
				// Run any parent postCreate processes - can be done at any point
				this.inherited(arguments);

			}
		});
    });