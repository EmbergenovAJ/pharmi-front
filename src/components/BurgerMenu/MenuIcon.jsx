import { motion } from "framer-motion"
export default function MenuIcon({ isOpen }) {
    return (
        <motion.div
            animate={{
                rotateZ: isOpen ? 0 : 180,
            }}
            transition={{ duration: 0.5, delay: isOpen ? 0.55 : 0 }}
        >
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </motion.div>
    )
}