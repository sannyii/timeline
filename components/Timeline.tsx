'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface TimelineProps {
    data: any;
}

export default function Timeline({ data }: TimelineProps) {
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window.TL !== 'undefined' && timelineRef.current) {
            new window.TL.Timeline(timelineRef.current, data);
        }
    }, [data]);
    var options = {
        // hash_bookmark: true,
        // initial_zoom: 1,
        scale_factor: 0.5,
        // start_at_end: true,
        // start_at_slide: 3
    }

    return (
        <>
            <Script
                src="https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js"
                // src="/static/timeline.js"
                strategy="afterInteractive"
                onReady={() => {
                    if (timelineRef.current) {
                        new window.TL.Timeline(timelineRef.current, data, options);
                    }
                }}
            />
            <div ref={timelineRef} style={{ width: '100%', height: '800px' }} />
        </>
    );
}