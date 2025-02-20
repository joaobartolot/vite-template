import React from 'react'

interface ButtonProps {
	onClick: () => void
	children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
	return (
		<button
			onClick={onClick}
			className="bg-blue-950 hover:bg-blue-200 transition-all text-white hover:text-blue-500 font-bold py-2 px-4 rounded"
		>
			{children}
		</button>
	)
}

export default Button
