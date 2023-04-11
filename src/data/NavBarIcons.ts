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
        path: '/SuminHaCV.pdf',
        bgColor: {
            dark: 'rgba(255, 255, 255, 0.1)',
            light: '#F1F1F1',
        },
        download: true,
        target: '_blank',
    },
];

export const NavBarDownloads: NavBarButton[] = [
    {
        key: 4,
        text: 'View Portfolio',
        bgColor: {
            dark: 'rgba(255, 255, 255, 0.1)',
            light: '#F1F1F1',
        },
        onClick: () =>
            window.open(
                'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F6miNISmElXeamZZJvuLCn7%2FSumin-Ha-Portfolio---PDF%3Fnode-id%3D215-338%26scaling%3Dcontain%26page-id%3D215%253A337%26starting-point-node-id%3D215%253A338%26show-proto-sidebar%3D1',
                '_blank'
            ),
    },
];
