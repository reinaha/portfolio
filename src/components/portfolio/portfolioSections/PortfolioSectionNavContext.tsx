import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useMemo,
    useRef,
    useState,
} from 'react';

export type PortfolioSectionNavEntry = {
    id: string;
    label: string;
};

type SectionRecord = PortfolioSectionNavEntry & { node: HTMLElement };

type PortfolioSectionNavContextValue = {
    sections: PortfolioSectionNavEntry[];
    activeId: string | null;
    registerSection: (id: string, label: string, node: HTMLElement) => void;
    unregisterSection: (id: string) => void;
    scrollToSection: (id: string) => void;
};

const PortfolioSectionNavContext = createContext<PortfolioSectionNavContextValue | null>(
    null
);

// Section visibility is tracked via a band near the vertical centre of the
// viewport (rather than "any part visible") so the active dot only flips once
// a section has genuinely taken over the middle of the screen, not the
// instant its edge peeks into view.
const ACTIVE_BAND_ROOT_MARGIN = '-40% 0px -40% 0px';

// Extra breathing room below the nav bar so a section's heading isn't
// touching it flush after scrolling there.
const SCROLL_OFFSET_GAP = 24;

export const PortfolioSectionNavProvider = ({ children }: { children: ReactNode }) => {
    const recordsRef = useRef<SectionRecord[]>([]);
    const visibleRatiosRef = useRef<Map<string, number>>(new Map());
    const observerRef = useRef<IntersectionObserver | null>(null);
    const [sections, setSections] = useState<PortfolioSectionNavEntry[]>([]);
    const [activeId, setActiveId] = useState<string | null>(null);

    const updateActiveFromRatios = useCallback(() => {
        let bestId: string | null = null;
        let bestRatio = 0;
        for (const record of recordsRef.current) {
            const ratio = visibleRatiosRef.current.get(record.id) ?? 0;
            if (ratio > bestRatio) {
                bestRatio = ratio;
                bestId = record.id;
            }
        }
        if (bestId) setActiveId(bestId);
    }, []);

    const getObserver = useCallback(() => {
        if (!observerRef.current) {
            observerRef.current = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        const id = (entry.target as HTMLElement).dataset.sectionNavId;
                        if (id) visibleRatiosRef.current.set(id, entry.intersectionRatio);
                    }
                    updateActiveFromRatios();
                },
                {
                    threshold: [0, 0.25, 0.5, 0.75, 1],
                    rootMargin: ACTIVE_BAND_ROOT_MARGIN,
                }
            );
        }
        return observerRef.current;
    }, [updateActiveFromRatios]);

    const registerSection = useCallback(
        (id: string, label: string, node: HTMLElement) => {
            node.dataset.sectionNavId = id;
            // Sections can register well after others already have (e.g. a
            // PasswordGate's children only register once unlocked, by which
            // point later sections have long since registered) — sort by
            // actual document position rather than trusting registration
            // order, so the dot nav always reflects top-to-bottom page order.
            recordsRef.current = [
                ...recordsRef.current.filter((record) => record.id !== id),
                { id, label, node },
            ].sort((a, b) => {
                const position = a.node.compareDocumentPosition(b.node);
                if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
                if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1;
                return 0;
            });
            setSections(recordsRef.current.map(({ id, label }) => ({ id, label })));
            getObserver().observe(node);
        },
        [getObserver]
    );

    const unregisterSection = useCallback((id: string) => {
        const record = recordsRef.current.find((r) => r.id === id);
        if (record) observerRef.current?.unobserve(record.node);
        recordsRef.current = recordsRef.current.filter((r) => r.id !== id);
        visibleRatiosRef.current.delete(id);
        setSections(recordsRef.current.map(({ id, label }) => ({ id, label })));
    }, []);

    const scrollToSection = useCallback((id: string) => {
        const node = recordsRef.current.find((record) => record.id === id)?.node;
        if (!node) return;

        // scrollIntoView({ block: 'start' }) aligns the section's top edge
        // with the viewport's top edge, which lands it right behind the
        // sticky nav bar. Offset by the nav bar's actual rendered height
        // (measured live, not hardcoded, so it stays correct if the nav bar's
        // height ever changes) plus a little breathing room.
        const computeTargetScrollY = () => {
            const navBarHeight =
                document.getElementById('top-nav-bar')?.getBoundingClientRect().height ??
                0;
            return (
                node.getBoundingClientRect().top +
                window.scrollY -
                navBarHeight -
                SCROLL_OFFSET_GAP
            );
        };

        window.scrollTo({ top: computeTargetScrollY(), behavior: 'smooth' });

        // Lazy-loaded images above the target (see PortfolioImage) can finish
        // loading mid-scroll and swap from their placeholder aspect ratio to
        // their real size, shifting the target's position out from under the
        // in-flight smooth scroll. Once it settles, snap-correct any drift.
        const correct = () =>
            window.scrollTo({ top: computeTargetScrollY(), behavior: 'auto' });
        if ('onscrollend' in window) {
            window.addEventListener('scrollend', correct, { once: true });
        } else {
            setTimeout(correct, 600);
        }
    }, []);

    const value = useMemo(
        () => ({
            sections,
            activeId,
            registerSection,
            unregisterSection,
            scrollToSection,
        }),
        [sections, activeId, registerSection, unregisterSection, scrollToSection]
    );

    return (
        <PortfolioSectionNavContext.Provider value={value}>
            {children}
        </PortfolioSectionNavContext.Provider>
    );
};

export const usePortfolioSectionNav = () => useContext(PortfolioSectionNavContext);
