import { HomeSections } from '@/NavigationContext';

export interface NavBarComponent {
    isDarkTheme?: boolean;
    setSection?: React.Dispatch<React.SetStateAction<HomeSections>>;
}
