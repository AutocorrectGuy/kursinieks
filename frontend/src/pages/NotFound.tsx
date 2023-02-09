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
					<p className="mb-4 text-3xl font-bold tracking-tight text-slate-500 md:text-4xl">
						Lapa nav atrasta.
					</p>
					<Link
						to={'/'}
						className="bg-primary-600 hover:bg-primary-800 my-4 inline-flex rounded-lg bg-violet-600 px-6 py-5 text-center text-2xl font-medium text-violet-100 hover:bg-violet-500 focus:outline-none active:translate-y-[2px]"
					>
						Atgriezties uz sākumu
					</Link>
				</div>
			</div>
		</section>
	)
}

export default NotFound
