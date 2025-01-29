import Timeline from '@/components/Timeline';
import { timelineData } from '@/data/timeline-data';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen relative">
            <Link style={{ zIndex: 10 }}
                href="/about" 
                className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm transition-colors"
            >
                关于
            </Link>
            <Timeline data={timelineData} />
        </main>
    );
}