interface NavBarButton {
    key: number;
    text: string;
    path?: string;
    section?: string;
    bgColor?: {
        dark: string;
        light: string;
    };
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
        section: 'mouse',
    },
    {
        key: 2,
        text: 'Hire Me ✋',
        path: '/',
        section: 'ContactMe',
    },
    {
        key: 3,
        text: 'Download CV',
        path: '/contact',
        bgColor: {
            dark: 'rgba(255, 255, 255, 0.1)',
            light: '#F1F1F1',
        },
    },
    {
        key: 4,
        text: 'Download Portfolio',
        path: '/contact',
        bgColor: {
            dark: 'rgba(255, 255, 255, 0.1)',
            light: '#F1F1F1',
        },
    },
];
