import Timeline from '@/components/Timeline';
import { timelineData } from '@/data/timeline-data';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen relative bg-gradient-to-br from-black via-gray-900 to-purple-900"
        >
            <Link
                style={{ zIndex: 10 }}
                href="/about"
                className="neon-link absolute top-4 right-4 px-4 py-2 rounded-md"
            >
                关于
            </Link>
            <Timeline data={timelineData} />
        </motion.main>
    );
}