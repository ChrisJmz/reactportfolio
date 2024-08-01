import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/menu.module.css';

const anim = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}

export default function Index({ menuIsActive }) {
    const pathname = usePathname();

    return (
        <motion.div 
        className={`${styles.menu} ${!menuIsActive ? styles.hidden : ''}`}
        variants={anim}
            initial="initial"
            animate={menuIsActive ? "open" : "closed"}
        >
            <div className="flex flex-col">
                {pathname !== '/' && (
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                )}
                {pathname !== '/work' && (
                    <Link href="/work">
                        <p>Work</p>
                    </Link>
                )}
                {pathname !== '/about' && (
                    <Link href="/about">
                        <p>About</p>
                    </Link>
                )}
                {pathname !== '/contact' && (
                    <Link href="/contact">
                        <p>Contact</p>
                    </Link>
                )}
            </div>
        </motion.div>
    );
}