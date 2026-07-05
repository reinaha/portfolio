import { Stack } from '@mui/material';
import { ReactChildren, ReactNode, useEffect, useRef } from 'react';

import {
    MajorSectionTitle,
    MajorSectionTitleProps,
    PortfolioFullWidthImage,
    PortfolioSection,
    PortfolioSectionProps,
} from '@/components';
import { useIsInsideLockedPasswordGate } from '@/components/passwordGate';

import { usePortfolioSectionNav } from './PortfolioSectionNavContext';

type PortfolioMajorSectionProps = {
    sectionTitle?: MajorSectionTitleProps;
    portfolioSections: PortfolioSectionProps[];
    coverImage?: string;
    children?: ReactChildren | ReactNode;
};

type RefElem = HTMLDivElement | null;

export const PortfolioMajorSection = ({
    sectionTitle,
    portfolioSections,
    coverImage,
    children,
}: PortfolioMajorSectionProps) => {
    const sectionRefs = useRef<Array<RefElem>>([]);
    const rootRef = useRef<HTMLDivElement | null>(null);
    // Only pull the (referentially stable) register/unregister functions out
    // of context, not the whole value — that value's identity changes on
    // every scroll-driven activeId update, which would otherwise re-fire this
    // effect (and re-observe the DOM node) on every scroll tick.
    const { registerSection, unregisterSection } = usePortfolioSectionNav() ?? {};
    // While locked, PasswordGate itself registers a single nav entry for the
    // whole gate — the sections inside its blurred preview aren't actually
    // reachable yet, so they skip registering individually.
    const isInsideLockedGate = useIsInsideLockedPasswordGate();
    // Sections without their own MajorSectionTitle (e.g. Introduction) still
    // register using their first sub-section's title, so every major section
    // gets a dot in the fixed nav regardless of whether it renders a heading.
    const navLabel = sectionTitle?.title ?? portfolioSections[0]?.title;
    // Some section titles carry a manual line break for the big page heading
    // (e.g. "Designed for \nReal-World Complexity") — collapse that for the
    // nav dot's tooltip/aria-label, which is single-line context.
    const navDisplayLabel = navLabel?.replace(/\s*\n\s*/g, ' ').trim();

    useEffect(() => {
        if (
            isInsideLockedGate ||
            !registerSection ||
            !unregisterSection ||
            !navLabel ||
            !navDisplayLabel ||
            !rootRef.current
        ) {
            return;
        }
        registerSection(navLabel, navDisplayLabel, rootRef.current);
        return () => unregisterSection(navLabel);
    }, [
        isInsideLockedGate,
        registerSection,
        unregisterSection,
        navLabel,
        navDisplayLabel,
    ]);

    const navigateTo = (index: number) => {
        if (
            sectionRefs &&
            sectionRefs.current &&
            sectionRefs.current.length > index &&
            sectionRefs.current[index]
        ) {
            const currentRef = sectionRefs.current[index];
            if (currentRef) {
                currentRef.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        }
    };

    return (
        <Stack spacing={25} ref={rootRef}>
            {sectionTitle ? (
                <MajorSectionTitle
                    title={sectionTitle.title}
                    subTitles={sectionTitle.subTitles}
                    navigateTo={navigateTo}
                />
            ) : null}

            {coverImage ? <PortfolioFullWidthImage image={coverImage} /> : null}

            {portfolioSections.map((ps, index: number) => (
                <PortfolioSection
                    key={index}
                    title={ps.title}
                    content={ps.content}
                    coverImg={ps.coverImg}
                    coverImgFullWidth={ps.coverImgFullWidth}
                    coverVideo={ps.coverVideo}
                    sectionRef={(el) => (sectionRefs.current[index] = el)}
                />
            ))}
            {children}
        </Stack>
    );
};
