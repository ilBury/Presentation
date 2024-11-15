/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library app.mylibrary.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "app.mylibrary",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"app.mylibrary.ExampleColor"
		],
		interfaces: [],
		controls: [
			"app.mylibrary.Example"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>mylibrary</code>
	 *
	 * @namespace
	 * @name app.mylibrary
	 * @author Ilya Bury
	 * @version ${version}
	 * @public
	 */
	var thisLib = app.mylibrary;

	/**
	 * Semantic Colors of the <code>app.mylibrary.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
