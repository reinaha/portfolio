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
                'https://www.figma.com/proto/TrZnUn80G7cYcBDdfirX8Z/%F0%9F%91%88-To-view-mores-check-the-side-bar-%F0%9F%91%88-2024-Design?node-id=6089-13412&node-type=canvas&t=biRVzw0sj7G5WLW4-1&scaling=min-zoom&content-scaling=fixed&page-id=6089%3A48&starting-point-node-id=6089%3A13412&show-proto-sidebar=1',
                '_blank'
            ),
    },
];
