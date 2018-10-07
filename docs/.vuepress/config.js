module.exports = {
	dest: './docs/dist',
	title: 'Viblo Documentation',
	head: [
		['link', { rel: 'icon', href: `/viblo_logo.png` }]
	],
	ga: '',
	description: 'VietNam IT Blog',
	permalink: '/:year/:month/:day/:slug',
	themeConfig: {
		repo: '',
		editLinks: false,
		editLinkText: '',
		lastUpdated: '',
		nav: [
			{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Introduction',
				link: '/basic/'
			},
			{
				text: 'Write Blog',
				link: '/write/'
			},
			{
				text: 'Contact',
				items: [
					{
						text: 'Twitter',
						link: 'https://www.twitter.com/'
					},
					{
						text: 'Email',
						link: 'mailto:hello@email.com'
					}
				]
			}
		],
		docsDir: 'docs',
		sidebar: 'auto'
	}
}
