export class Window {

    private _resizable!: boolean;
    private _reducable!: boolean;
    private _reduced!: boolean;
    private _maximized!: boolean;
    private _focused!: boolean;
    private _position!: string;
    private _width!: number;
    private _height!: number;
    private _type?: string;

    constructor(
        resizable: boolean,
        reducable: boolean,
        type?: string) 
    {
        this._resizable = resizable;
        this._reducable = reducable;
        this._reduced = false;
        this._maximized = false;
        this._focused = true;
        this._position = 'translate3d(1170px, 100px, 0px)'; //translate3d(456px, 250px, 0px)
        this._width = 611;
        this._height = 329;
        this._type = type;
    }

    public get resizable(): boolean {
        return this._resizable;
    }

    public get reducable(): boolean {
        return this._reducable;
    }

    public get reduced(): boolean {
        return this._reduced;
    }

    public set reduced(reduced: boolean) {
        this._reduced = reduced;
    }

    public get maximized(): boolean {
        return this._maximized;
    }

    public set maximized(maximized: boolean) {
        this._maximized = maximized;
    }

    public get focused(): boolean {
        return this._focused;
    }

    public set focused(focused: boolean) {
        this._focused = focused;
    }

    public get position(): string {
        return this._position;
    }

    public set position(position: string) {
        this._position = position;
    }

    public get width(): number {
        return this._width;
    }

    public set width(width: number) {
        this._width = width;
    }

    public get height(): number {
        return this._height;
    }

    public set height(height: number) {
        this._height = height;
    }

    public get type(): string {
        if(this._type)
        {
            return this._type;
        }
        return ''
    }

    public set type(type: string) {
        this._type = type;
    }

}