import React from 'react'
import { Link } from 'react-router-dom'
type Props = {}

const NotFound = (props: Props) => {
	return (
		<section className="flex min-h-screen items-center justify-center bg-slate-900">
			<div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<h1 className="text-primary-600 text-primary-500 mb-4 text-7xl font-extrabold tracking-tight text-neutral-200 lg:text-9xl">
						404
					</h1>
					<p className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
						Page not found.
					</p>
					<p className="mb-4 text-lg font-light text-gray-400">
						Sorry, we can't find that page. Or maybe it has
						not been made yet?
					</p>
					<Link
						to={'/'}
						className="bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 focus:ring-primary-900 my-4 inline-flex rounded-lg px-10 py-8 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
					>
						Back to Homepage
					</Link>
				</div>
			</div>
		</section>
	)
}

export default NotFound
