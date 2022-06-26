import { Icon } from "./icon.model";
import { Window } from "./window.model";

export class Software {

    private _type!: string;
    private _icon!: Icon;
    private _multiple!: boolean;
    private _favorite!: boolean;
    private _favorite_order!: number;
    private _frequent!: boolean;
    private _openable!: boolean;
    private _focused!: boolean;
    private _windows!: Array<Window>;

    constructor(
        type: string, 
        icon: Icon,
        multiple: boolean,
        favorite: boolean,
        favorite_order: number,
        frequent: boolean,
        openable: boolean,
        focused: boolean) 
    {
        this._type = type;
        this._icon = icon;
        this._multiple = multiple;
        this._favorite = favorite;
        this._favorite_order = favorite_order;
        this._frequent = frequent;
        this._openable = openable;
        this._focused = focused;
        this._windows = [];
    }

    public get type(): string {
        return this._type;
    };

    public get icon(): Icon {
        return this._icon;
    }

    public get multiple(): boolean {
        return this._multiple;
    }

    public get favorite(): boolean {
        return this._favorite;
    }

    public set favorite(favorite: boolean) {
        this._favorite = favorite;
    }

    public get favoriteOrder(): number {
        return this._favorite_order;
    }

    public set favoriteOrder(favorite_order: number) {
        this._favorite_order = favorite_order;
    }

    public get frequent(): boolean {
        return this._frequent;
    }

    public set frequent(frequent: boolean) {
        this._frequent = frequent;
    }

    public get openable(): boolean {
        return this._openable;
    }

    public get focused(): boolean {
        return this._focused;
    }

    public set focused(focused: boolean) {
        this._focused = focused;
    }

    public get windows(): Window[] {
        return this._windows;
    }

    public set addWindow(window: Window) {
        this._windows.push(window) 
    }

    public openWindow(software: Software, type?: string) {
        if(software.openable === true)
        {
            let win;
            if(software.type === 'identity')
            {
                win = software.addWindow = new Window(false, false);
            }
            else
            {
                win = software.addWindow = new Window(true, true, type);
            }
            win.focused = true;
            software.focused = true;
            return win
        }
        return null;
    }

    public removeWindow(window: Window) {
        this._windows.splice(this._windows.indexOf(window),1);
    }

}