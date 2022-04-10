import { Icon } from "./icon.model";

export class Explorer {

    private _title!: string;
    private _icon!: Icon;
    private _childs!: Array<Explorer> | undefined;

    constructor(
        title: string,
        icon: Icon,
        childs?: Array<Explorer>) 
    {
        this._title = title;
        this._icon = icon;
        this._childs = childs ? childs : [];
    }

    public get title(): string {
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }

    public get icon(): Icon {
        return this._icon;
    }

    public set icon(icon: Icon) {
        this._icon = icon;
    }

    public get childs(): Array<Explorer> {
        return this.childs;
    }

    public set addChild(child: Explorer) {
        if(typeof this._childs !== 'undefined') 
        {
            this._childs.push(child);
        }
    }

    public set removeChild(child: Explorer) {

    }
    
}