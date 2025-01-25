import Timeline from '@/components/Timeline';
import { timelineData } from '@/data/timeline-data';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Timeline data={timelineData} />
        </main>
    );
}