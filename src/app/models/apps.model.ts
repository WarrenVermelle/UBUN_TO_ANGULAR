export class App {

    id!: number;
    title!: string;
    icon!: {
        "viewbox": string,
        "d": string
    };
    type!: string;
    win_status!: {
        "opened": boolean,
        "reduced": boolean,
        "maximized": boolean,
        "focused": boolean,
        "position": string,
        "width": number,
        "height": number,
        "resizable": boolean,
        "reducable": boolean,
        "openable": boolean
    };
    shortcut_status!: {
        "launcher": boolean,
        "launcher_pos": number,
        "desktop": boolean,
        "desktop_pos": number
    }
}