/*!
 * ${copyright}
 */

sap.ui.define([
	"sap/ui/core/Core",
	"./library"
], function (Core, library) {
	"use strict";

	// refer to library types
	var ExampleColor = library.ExampleColor;

	/**
	 * Example renderer.
	 * @namespace
	 */
	var ExampleRenderer = {
		apiVersion: 2 // usage of DOM Patcher
	};

	/**
	 * Renders the HTML for the given control, using the provided
	 * {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager} rm The reference to the <code>sap.ui.core.RenderManager</code>
	 * @param {sap.ui.core.Control} control The control instance to be rendered
	 */
	ExampleRenderer.render = function (rm, control) {

		rm.openStart("button", control);
		if (control.getColor() === ExampleColor.Highlight) {
			rm.class("myLibPrefixExampleHighlight");
		} else {
			rm.class("myLibPrefixExample");
		}
		rm.openEnd( );
		rm.text(control.getText());
		rm.close("button");
	};

	return ExampleRenderer;

});
