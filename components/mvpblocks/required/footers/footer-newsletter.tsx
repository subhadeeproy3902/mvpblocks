'use client';

import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const footerColumns = [
	{
		title: 'Solutions',
		links: [
			'Business Automation',
			'Cloud Services',
			'Analytics',
			'Integrations',
			'Support',
		],
	},
	{
		title: 'Resources',
		links: ['Documentation', 'Case Studies', 'Blog', 'Webinars', 'Community'],
	},
	{
		title: 'Company',
		links: ['About Us', 'Careers', 'Contact', 'Partners', 'Press'],
	},
];

const legalLinks = [
	'Terms of Service',
	'Privacy Policy',
	'Cookie Settings',
	'Accessibility',
];

const socialIcons = [
	{ icon: <Instagram className="h-5 w-5" />, href: "#" },
	{ icon: <Twitter className="h-5 w-5" />, href: "#" },
	{ icon: <Linkedin className="h-5 w-5" />, href: "#" },
	{ icon: <Youtube className="h-5 w-5" />, href: "#" },
];

export default function FooterNewsletter() {
	return (
		<footer className="relative w-full overflow-hidden pb-10 pt-20 bg-background text-foreground">
			<div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
				<div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-primary opacity-10 blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-primary opacity-10 blur-3xl" />
			</div>
			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="glass-effect mb-16 rounded-2xl p-8 md:p-12">
					<div className="grid items-center gap-8 md:grid-cols-2">
						<div>
							<h3 className="mb-4 text-2xl font-bold md:text-3xl">
								Stay ahead with Acme Inc.
							</h3>
							<p className="mb-6 text-foreground/70">
								Join thousands of professionals who trust Acme Inc. for innovative
								business solutions.
							</p>
							<div className="flex flex-col gap-4 sm:flex-row">
								<input
									type="email"
									placeholder="Enter your email"
									className="rounded-lg border border-foreground/20 bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
								/>
								<button className="rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium shadow-lg shadow-primary/20 transition hover:shadow-primary/30">
									Subscribe Now
								</button>
							</div>
						</div>
						<div className="hidden justify-end md:flex">
							<div className="relative">
								<div className="absolute inset-0 rotate-6 rounded-xl bg-primary/20" />
								<img
									src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=240&q=80"
									alt="Acme Inc. team"
									className="relative w-80 rounded-xl object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
					<div className="col-span-2 lg:col-span-1">
						<div className="mb-6 flex items-center space-x-2">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-primary-foreground"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<span className="text-xl font-bold">Acme Inc.</span>
						</div>
						<p className="mb-6 text-foreground/60">
							Empowering businesses with reliable, scalable, and innovative
							solutions.
						</p>
						<div className="flex space-x-4">
							{socialIcons.map((item, i) => (
								<a
									key={i}
									href={item.href}
									className="glass-effect flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-primary/10"
								>
									{item.icon}
								</a>
							))}
						</div>
					</div>
					{footerColumns.map((col) => (
						<div key={col.title}>
							<h4 className="mb-4 text-lg font-semibold">{col.title}</h4>
							<ul className="space-y-3">
								{col.links.map((text) => (
									<li key={text}>
										<a
											href="#"
											className="text-foreground/60 transition hover:text-foreground"
										>
											{text}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="flex flex-col items-center justify-between border-t border-foreground/10 pt-8 md:flex-row">
					<p className="mb-4 text-sm text-foreground/60 md:mb-0">
						© 2023 Acme Inc. All rights reserved.
					</p>
					<div className="flex flex-wrap justify-center gap-6">
						{legalLinks.map((text) => (
							<a
								key={text}
								href="#"
								className="text-sm text-foreground/60 hover:text-foreground"
							>
								{text}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
