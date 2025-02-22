import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { twJoin } from 'tailwind-merge'
import AnimatedHamburger from '../components/AnimatedHamburger'
import useMedia from '../hooks/useMedia'

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { md } = useMedia()

	useEffect(() => {
		if (md) setIsOpen(false)
	}, [md])

	return (
		<nav
			className={twJoin(
				'fixed top-0 w-full flex justify-between items-center',
				'md:h-[80px] px-12 md:px-24 bg-secondary text-white'
			)}
		>
			<div className="relative flex flex-col md:flex-row justify-between md:items-center h-full w-full">
				<div className="relative flex justify-end w-full h-[80px] md:w-fit md:h-fit">
					<div
						onClick={() => window.scrollTo(0, 0)}
						className={twJoin(
							'absolute left-1/2 -translate-x-1/2 w-fit h-full',
							'flex items-center justify-center cursor-pointer',
							'md:static z-40 md:translate-x-0'
						)}
					>
						<img src="logo.svg" alt="Logo" className="w-36" />
					</div>

					<div className="flex items-center h-full md:hidden">
						<AnimatedHamburger
							isOpen={isOpen}
							onClick={() => setIsOpen(!isOpen)}
						/>
					</div>
				</div>

				{md ? (
					<ul className="flex list-none gap-12 text-lg">
						<li>
							<a href="#about" className="hover:underline">
								About
							</a>
						</li>
						<li>
							<a href="#contact" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				) : (
					<motion.ul
						initial={false}
						animate={{
							height: isOpen ? 'auto' : 0,
						}}
						className={twJoin(
							'overflow-hidden list-none',
							'flex flex-col gap-6 text-lg'
						)}
					>
						<li className="pt-6">
							<a href="#about" className="hover:underline">
								About
							</a>
						</li>
						<li className="pb-6">
							<a href="#contact" className="hover:underline">
								Contact
							</a>
						</li>
					</motion.ul>
				)}
			</div>
		</nav>
	)
}

export default Navbar
