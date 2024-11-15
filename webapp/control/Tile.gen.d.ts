import Event from "sap/ui/base/Event";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ControlSettings } from "sap/ui/core/Control";

declare module "./Tile" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $TileSettings extends $ControlSettings {
        image?: string | PropertyBindingInfo;
        text?: string | PropertyBindingInfo;
        press?: (event: Tile$PressEvent) => void;
    }

    export default interface Tile {

        // property: image

        /**
         * Gets current value of property "image".
         *
         * @returns Value of property "image"
         */
        getImage(): string;

        /**
         * Sets a new value for property "image".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param image New value for property "image"
         * @returns Reference to "this" in order to allow method chaining
         */
        setImage(image: string): this;

        // property: text

        /**
         * Gets current value of property "text".
         *
         * @returns Value of property "text"
         */
        getText(): string;

        /**
         * Sets a new value for property "text".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param text New value for property "text"
         * @returns Reference to "this" in order to allow method chaining
         */
        setText(text: string): this;

        // event: press

        /**
         * Attaches event handler "fn" to the "press" event of this "Tile".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "Tile" itself.
         *
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "Tile" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachPress(fn: (event: Tile$PressEvent) => void, listener?: object): this;

        /**
         * Attaches event handler "fn" to the "press" event of this "Tile".
         *
         * When called, the context of the event handler (its "this") will be bound to "oListener" if specified,
         * otherwise it will be bound to this "Tile" itself.
         *
         * @param data An application-specific payload object that will be passed to the event handler along with the event object when firing the event
         * @param fn The function to be called when the event occurs
         * @param listener Context object to call the event handler with. Defaults to this "Tile" itself
         *
         * @returns Reference to "this" in order to allow method chaining
         */
        attachPress<CustomDataType extends object>(data: CustomDataType, fn: (event: Tile$PressEvent, data: CustomDataType) => void, listener?: object): this;

        /**
         * Detaches event handler "fn" from the "press" event of this "Tile".
         *
         * The passed function and listener object must match the ones used for event registration.
         *
         * @param fn The function to be called, when the event occurs
         * @param listener Context object on which the given function had to be called
         * @returns Reference to "this" in order to allow method chaining
         */
        detachPress(fn: (event: Tile$PressEvent) => void, listener?: object): this;

        /**
         * Fires event "press" to attached listeners.
         *
         * @param parameters Parameters to pass along with the event
         * @returns Reference to "this" in order to allow method chaining
         */
        firePress(parameters?: Tile$PressEventParameters): this;
    }

    /**
     * Interface describing the parameters of Tile's 'press' event.
     */
    // eslint-disable-next-line
    export interface Tile$PressEventParameters {
    }

    /**
     * Type describing the Tile's 'press' event.
     */
    export type Tile$PressEvent = Event<Tile$PressEventParameters>;
}
