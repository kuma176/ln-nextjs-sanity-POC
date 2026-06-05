import Link from "next/link";

import { cn } from "@/lib/utils";

type FooterLink = {
	label: string;
	href: string;
};

type FooterSection = {
	title: string;
	links: FooterLink[];
};

interface FooterProps {
	className?: string;
	logoHref?: string;
	logoSrc?: string;
	logoAlt?: string;
	copyrightText?: string;
	sections?: FooterSection[];
}

const currentYear = new Date().getFullYear();

const defaultSections: FooterSection[] = [
	{
		title: "Platform",
		links: [
			{ label: "Research Tools", href: "#research-tools" },
			{ label: "Analytics", href: "#analytics" },
			{ label: "Integrations", href: "#integrations" },
		],
	},
	{
		title: "Company",
		links: [
			{ label: "About", href: "#about" },
			{ label: "Insights", href: "#insights" },
			{ label: "Careers", href: "#careers" },
		],
	},
	{
		title: "Support",
		links: [
			{ label: "Help Center", href: "#help-center" },
			{ label: "Contact", href: "#contact" },
			{ label: "Privacy", href: "#privacy" },
		],
	},
];

export default function Footer({
	className,
	logoHref = "/",
	logoSrc = "https://cert-www.lexisnexis.com/images/SVG-icons/logo.svg",
	logoAlt = "LexisNexis",
	copyrightText = `Copyright ${currentYear} LexisNexis. All rights reserved.`,
	sections = defaultSections,
}: FooterProps) {
	return (
		<footer className={cn("border-t border-black/10 bg-[#f7f7f5] font-lato", className)}>
			<div className="container px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid gap-10 border-b border-black/10 pb-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)] lg:gap-16">
					<div className="space-y-5">
						<Link href={logoHref} aria-label="LexisNexis home" className="inline-flex">
							<img src={logoSrc} alt={logoAlt} className="h-8 w-auto" />
						</Link>
						<p className="max-w-md text-sm leading-6 text-[#455a64]">
							Representation footer with sample navigation, support links, and brand copy for layout presentation.
						</p>
					</div>

					<div className="grid gap-8 sm:grid-cols-3">
						{sections.map((section) => (
							<div key={section.title} className="space-y-4">
								<h2 className="text-xs font-black uppercase tracking-[0.08em] text-[#1d1d1d]">
									{section.title}
								</h2>
								<ul className="space-y-3">
									{section.links.map((link) => (
										<li key={link.label}>
											<Link
												href={'#'}
												className="text-sm text-[#455a64] transition-colors hover:text-[#ed1c24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed1c24] focus-visible:ring-offset-2"
											>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-col gap-4 pt-6 text-sm text-[#455a64] sm:flex-row sm:items-center sm:justify-between">
					<p>{copyrightText}</p>
					<div className="flex flex-wrap gap-x-5 gap-y-2">
						<Link href="#" className="transition-colors hover:text-[#ed1c24]">
							Terms
						</Link>
						<Link href="#" className="transition-colors hover:text-[#ed1c24]">
							Cookies
						</Link>
						<Link href="#" className="transition-colors hover:text-[#ed1c24]">
							Accessibility
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
