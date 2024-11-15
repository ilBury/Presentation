import VBox from "sap/m/VBox";
import Control from "sap/ui/core/Control";
import RenderManager from "sap/ui/core/RenderManager";
import Image from "sap/m/Image"
import Text from "sap/m/Text"
import Icon from "sap/ui/core/Icon"

/**
 * @namespace pres.app.presentationapp.control
 */
export default class Tile extends Control {

    static readonly metadata = {
        properties: {
            "image": "string",
            "text": "string"
        },
        events: {
            "press": {}
        }
    }

    renderer = {
        apiVersion: 2,
        render: (rm: RenderManager, control: Tile) => {
            rm.openStart("div", control);
            rm.openEnd();
            rm.close("div");
        }
    };

    private _tile!: Control;

    onAfterRendering(): void {
        const text = this.getText();

        this._tile = new VBox({
            items: [
                new Image({
                    src: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/800px-PNG_transparency_demonstration_1.png`,
                    alt: "text",
                    height: '150px',
                    width: '150px'
                }).addStyleClass("sapUiSmallMarginBottom"),
                new VBox({
                    items: [
                        new Text({
                            text: text
                        }).addStyleClass("sapUiTinyMarginBottom"),
                        new Icon({
                            src: "sap-icon://arrow-right"
                        })
                    ]
                })

            ]
        }).attachBrowserEvent("click", () => {
            this.firePress()
        }).addStyleClass("sapUiMediumMarginEnd")
            .placeAt(this.getDomRef()!);
    }

    onBeforeRendering(): void {
        if(this._tile) {
            this._tile.destroy();
        }
    }
}