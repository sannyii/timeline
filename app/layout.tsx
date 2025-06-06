import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AI 发展时间线',
    description: '记录人工智能领域的重要时刻（不断补充中）',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="zh-CN">
            <head>
                <link 
                    title="timeline-styles" 
                    rel="stylesheet" 
                    href="https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}