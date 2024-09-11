import { motion } from "framer-motion"

export default function CrossIcon({ isOpen }) {
    return (
        <motion.div
            animate={{
                rotateZ: isOpen ? 180 : 0,
            }}
            transition={{ duration: 0.5, delay: isOpen ? 0 : 0.55 }}
        >
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#000000" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </motion.div>
    )
}