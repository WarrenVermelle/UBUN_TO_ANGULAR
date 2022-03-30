import { Icon } from "./icon.model";
import { Window } from "./window.model";

export class Software {

    private _type!: string;
    private _icon!: Icon;
    private _multiple!: boolean;
    private _favorite!: boolean;
    private _favorite_order!: number;
    private _frequent!: boolean;
    private _frequent_order!: number;
    private _all_order!: number;
    private _openable!: boolean;
    private _resizable!: boolean;
    private _reducable!: boolean;
    private _windows!: Array<Window>;

    constructor(
        type: string, 
        icon: Icon,
        multiple: boolean,
        favorite: boolean,
        favorite_order: number,
        frequent: boolean,
        frequent_order: number,
        all_order: number,
        openable: boolean,
        resizable: boolean,
        reducable: boolean,) 
    {
        this._type = type;
        this._icon = icon;
        this._multiple = multiple;
        this._favorite = favorite;
        this._favorite_order = favorite_order;
        this._frequent = frequent;
        this._frequent_order = frequent_order;
        this._all_order = all_order;
        this._openable = openable;
        this._resizable = resizable;
        this._reducable = reducable;
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

    public get frequentOrder(): number {
        return this._frequent_order;
    }

    public set frequent_order(frequent_order: number) {
        this._frequent_order = frequent_order;
    }

    public get all_order(): number{
        return this._all_order;
    }

    public get openable(): boolean {
        return this._openable;
    }

    public get resizable(): boolean {
        return this._resizable;
    }

    public set resizable(resizable: boolean) {
        this._resizable = resizable;
    }

    public get reducable(): boolean {
        return this._reducable;
    }

    public set reducable(reducable: boolean) {
        this._reducable = reducable;
    }

    public get windows(): Window[] {
        return this._windows;
    }

    public set addWindow(window: Window) {
        this._windows.push(window) 
    }

    public set removeWindow(window: Window) {

    }

}