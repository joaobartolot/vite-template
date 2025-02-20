import React from 'react'
import Button from '../components/Button'

const Hero: React.FC = () => {
	return (
		<section className="bg-blue-500 text-white h-screen">
			<div className="flex flex-col justify-center h-full items-center px-4 text-center">
				<h1 className="text-5xl font-bold mb-4">
					Welcome to Our Website
				</h1>
				<p className="text-xl mb-8">
					We are glad to have you here. Explore our content and enjoy
					your stay!
				</p>
				<Button onClick={() => console.log('Button clicked')}>
					Get Started
				</Button>
			</div>
		</section>
	)
}

export default Hero
