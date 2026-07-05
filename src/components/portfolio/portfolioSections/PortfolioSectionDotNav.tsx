import { Box, Stack, Tooltip, useTheme } from '@mui/material';

import { usePortfolioSectionNav } from './PortfolioSectionNavContext';

export const PortfolioSectionDotNav = () => {
    const theme = useTheme();
    const nav = usePortfolioSectionNav();

    if (!nav || nav.sections.length < 2) return null;

    const { sections, activeId, scrollToSection } = nav;
    const inactiveColor =
        theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)';

    return (
        <Stack
            spacing={2.5}
            alignItems="center"
            sx={{
                position: 'fixed',
                right: { md: '24px', lg: '40px' },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: theme.zIndex.appBar - 1,
                display: { xs: 'none', md: 'flex' },
            }}
        >
            {sections.map(({ id, label }) => {
                const isActive = id === activeId;
                return (
                    <Tooltip key={id} title={label} placement="left" arrow>
                        <Box
                            component="button"
                            aria-label={`Go to ${label}`}
                            onClick={() => scrollToSection(id)}
                            sx={{
                                width: isActive ? '10px' : '8px',
                                height: isActive ? '10px' : '8px',
                                borderRadius: '50%',
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                backgroundColor: isActive
                                    ? theme.palette.primary.main
                                    : inactiveColor,
                                transition: 'all 0.25s ease-in-out',
                                '&:hover': {
                                    backgroundColor: isActive
                                        ? theme.palette.primary.main
                                        : theme.palette.primary.main,
                                    opacity: isActive ? 1 : 0.6,
                                },
                            }}
                        />
                    </Tooltip>
                );
            })}
        </Stack>
    );
};
