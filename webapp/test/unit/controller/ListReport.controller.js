/*global QUnit*/

sap.ui.define([
	"presapp/presentation-app/controller/ListReport.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ListReport Controller");

	QUnit.test("I should test the ListReport controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
