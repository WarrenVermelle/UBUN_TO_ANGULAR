export class Icon {

    private _title!: string;
    private _viewbox!: string;
    private _path!: string;
    private _transform!: string;

    constructor(
        title: string,
        viewbox: string,
        path: string,
        transform: string) 
    {
        this._title = title;
        this._viewbox = viewbox;
        this._path = path;
        this._transform = transform;
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

    public get transform(): string {
        return this._transform;
    }
}