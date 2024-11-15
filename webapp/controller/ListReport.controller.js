sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text"
], (Controller, MessageToast, Dialog, Button, Text) => {
    "use strict";

    return Controller.extend("pres.app.presentationapp.controller.ListReport", {

        onAfterRendering: function() {
            this._fetchData();
        },

        _fetchData: function() {
            const oModel = this.getView().getModel();
            const sPath = "/Products";
            oModel.read(sPath, {
                success: () => {
                    MessageToast.show("Data loaded successfully!");
                },
                error: () => {
                    MessageToast.show("Error loading data.");
                }
            });
        },

        onRefresh: function() {
            this._fetchData();
        },

        onEditItem: function(oEvent) {
            const oItem = oEvent.getSource();
            const oBindingContext = oItem.getBindingContext();
            const sPath = oBindingContext.getPath();
            const oData = oBindingContext.getObject();

            const oDialog = new Dialog({
                title: "Product Details",
                content: new Text({ text: `Name: ${oData.ProductName}\nPrice: ${oData.Price}` }),
                beginButton: new Button({
                    text: "Close",
                    press: function () {
                        oDialog.close();
                    }
                }),
                afterClose: function () {
                    oDialog.destroy();
                }
            });

            this.getView().addDependent(oDialog);
            oDialog.open();
        }
    });
});
