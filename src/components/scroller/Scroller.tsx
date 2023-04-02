import { ReactNode } from 'react';

type ScrollerProps = {
    className: string;
    trackIds: string[];
    onScrollToElement: (elem: HTMLElement) => void;
    children: ReactNode;
};

export function Scroller({
    className,
    children,
    trackIds,
    onScrollToElement,
}: ScrollerProps) {
    return (
        <div
            className={className}
            onScroll={(e) => {
                for (let i = 0; i <= trackIds.length - 1; i++) {
                    const id = trackIds[i];
                    const trackedEl = document.getElementById(id);
                    const scrollerEl = e.currentTarget;

                    if (
                        trackedEl &&
                        scrollerEl.scrollTop >
                            trackedEl.offsetTop +
                                trackedEl.offsetHeight -
                                scrollerEl.offsetHeight
                    ) {
                        onScrollToElement(trackedEl);
                    }
                }
            }}
        >
            {children}
        </div>
    );
}
