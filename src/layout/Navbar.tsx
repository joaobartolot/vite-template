import React from 'react'
import { twJoin } from 'tailwind-merge'

const Navbar: React.FC = () => {
	return (
		<nav className="fixed top-0 w-full flex justify-between items-center h-[80px] px-24 bg-blue-500 text-white">
			<div className='flex justify-between w-full'>
				<div
					onClick={() => window.scrollTo(0, 0)}
					className={twJoin(
						'absolute inset-0 z-40 flex h-full w-fit items-center justify-center cursor-pointer',
						'md:static'
					)}
				>
					<img src="logo.svg" alt="Logo" className="w-36" />
				</div>
				<ul className="list-none flex gap-12 text-lg">
					<li>
						<a href="/" className="hover:text-primary">
							Home
						</a>
					</li>
					<li>
						<a href="/about" className="hover:text-primary">
							About
						</a>
					</li>
					<li>
						<a href="/contact" className="hover:text-primary">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
