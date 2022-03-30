export class Icon {

    private _title!: string;
    private _viewbox!: string;
    private _path!: string;

    constructor(
        title: string,
        viewbox: string,
        path: string) 
    {
        this._title = title;
        this._viewbox = viewbox;
        this._path = path;
    }

    public get title(): string {
        return this._title;
    }

    public get viewbox(): string {
        return this._viewbox;
    }

    public get path(): string {
        return this._path;
    }
}