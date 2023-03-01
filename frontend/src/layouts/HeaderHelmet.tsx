import { Helmet } from 'react-helmet'

const HeaderHelmet = ({ pageTitle }: { pageTitle: string }) => {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<meta
				name="apple-mobile-web-app-capable"
				content="yes"
			/>
			<meta
				name="mobile-web-app-capable"
				content="yes"
			/>
			<title>{pageTitle}</title>
		</Helmet>
	)
}

export default HeaderHelmet
