'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import type { TimelineData } from '@/types/timeline';

interface TimelineProps {
    data: TimelineData;
}

export default function Timeline({ data }: TimelineProps) {
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window.TL !== 'undefined' && timelineRef.current) {
            new window.TL.Timeline(timelineRef.current, data);
        }
    }, [data]);

    return (
        <>
            <Script 
                // src="https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js" 
                src="/static/timeline.js" 
                strategy="afterInteractive"
                onReady={() => {
                    if (timelineRef.current) {
                        new window.TL.Timeline(timelineRef.current, data);
                    }
                }}
            />
            <div ref={timelineRef} style={{ width: '100%', height: '800px' }} />
        </>
    );
}