import ControllerType from "sap/ui/core/mvc/Controller"
import MessageToastType from "sap/m/MessageToast"
import DialogType from "sap/m/Dialog";
import ButtonType from "sap/m/Button";
import  TextType  from "sap/m/Text"
import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import Event from "sap/ui/base/Event";
import ColumnListItem from "sap/m/ColumnListItem";
import TileType from "../control/Tile"
import ReuseLib from "app/mylibrary/Example"

interface Product {
    ID: number;
    Name: string;
    Description: string;
    ReleaseDate: string;
    DiscontinuedDate: string;
    Rating: number;
    Price: number;
}

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
    "../control/Tile"
], function(
    Controller: typeof ControllerType, 
    MessageToast: typeof MessageToastType, 
    Dialog: typeof DialogType, 
    Button: typeof ButtonType, 
    Text: typeof TextType,
    Tile: typeof TileType
) {
    "use strict";

    return Controller.extend("pres.app.presentationapp.controller.ListReport", {

        onAfterRendering: function() {
            this._fetchData();

            

        },

        _fetchData: function() {
            const oModel = this.getView().getModel() as ODataModel;
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

      

        onEditItem: function(oEvent: Event) {
            const oItem = oEvent.getSource() as ColumnListItem;
            const oBindingContext = oItem.getBindingContext();
            const sPath = oBindingContext.getPath();
            const oData = oBindingContext.getObject() as Product;
            
            const oDialog = new Dialog({
                title: "Product Details",
                content: new Text({ text: `Name: ${oData.Name}\nPrice: ${oData.Price}` }),
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
