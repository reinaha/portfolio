interface NavBarButton {
    key: number;
    text: string;
    path?: string;
    section?: string;
    target?: string;
    download?: boolean;
    bgColor?: {
        dark: string;
        light: string;
    };
    onClick?(): void;
}

export const NavBarButtons: NavBarButton[] = [
    {
        key: 0,
        text: 'Home',
        path: '/',
    },
    {
        key: 1,
        text: 'Work',
        path: '/',
        section: 'work',
    },
    {
        key: 2,
        text: 'Contact',
        path: '/',
        section: 'ContactMe',
    },
];
