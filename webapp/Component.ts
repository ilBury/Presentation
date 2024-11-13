import UIComponent from "sap/ui/core/UIComponent";


/**
 * @namespace pres.app.presentationapp
 */
export default class Component extends UIComponent {
    public static metadata = {
        manifest: "json"
    };


	public init(): void {

		super.init();
        
        
        this.getRouter().initialize();
	}
    
}
