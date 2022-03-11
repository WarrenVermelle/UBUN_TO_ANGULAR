export class App {

    id!: number;
    title!: string;
    icon!: [
        viewBox: string,
        d: string
    ];
    type!: string;
    content!: [{
        text: string,
        img: string
    }];
    opened!: boolean;
    maximized!: boolean;
    reduced!: boolean;
    focused!: boolean;
    shortcuted!: [{
        shortcut: boolean,
        shortcut_pos: number,
        desktop: boolean,
        desktop_pos: number
    }];
    position!: string;
    
}