import React from 'react'

const Navbar: React.FC = () => {
	return (
		<nav className="fixed top-0 w-full flex justify-between items-center h-[80px] px-24 bg-blue-500 text-white">
			<div className="text-2xl">
				<a href="/">MyApp</a>
			</div>
			<ul className="list-none flex gap-4 text-lg">
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
		</nav>
	)
}

export default Navbar
