export class App {

    id!: number;
    title!: string;
    icon!: [
        viewBox: string,
        d: string
    ];
    content!: [{
        text: string,
        img: string
    }];
    opened!: boolean;
    maximized!: boolean;
    reduced!: boolean;
    focused!: boolean;
    
}