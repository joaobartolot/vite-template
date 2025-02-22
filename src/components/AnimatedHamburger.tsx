import { motion } from 'framer-motion'
import React from 'react'
import { twJoin } from 'tailwind-merge'

interface AnimatedHamburgerProps {
	isOpen: boolean
	className?: string
	onClick: () => void
}

const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({
	isOpen,
	className,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			className={twJoin('flex flex-col gap-1 cursor-pointer', className)}
		>
			<motion.div
				className="w-8 h-1 bg-white rounded"
				animate={{
					rotate: isOpen ? 45 : 0,
					y: isOpen ? 8 : 0,
				}}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
			/>
			<motion.div
				className="w-8 h-1 bg-white rounded"
				animate={{
					opacity: isOpen ? 0 : 1,
				}}
				transition={{ duration: 0.2, ease: 'easeInOut' }}
			/>
			<motion.div
				className="w-8 h-1 bg-white rounded"
				animate={{
					rotate: isOpen ? -45 : 0,
					y: isOpen ? -8 : 0,
				}}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
			/>
		</button>
	)
}

export default AnimatedHamburger
