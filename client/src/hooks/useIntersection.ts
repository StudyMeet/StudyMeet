import React, { useState, useEffect } from 'react';

export function useIntersection<T extends Element>(element: React.RefObject<T>, rootMargin?: string) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observerCallback = (([entry]: IntersectionObserverEntry[]) => {
            setVisible(entry.isIntersecting);
        });
        
        const observer = new IntersectionObserver(observerCallback, { rootMargin });

        element.current && observer.observe(element.current);

        return () => { element.current && observer.unobserve(element.current) };
    }, []);

    return visible;
}