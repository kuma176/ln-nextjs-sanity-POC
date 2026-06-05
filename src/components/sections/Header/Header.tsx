import Link from "next/link";

import { cn } from "@/lib/utils";

type HeaderLink = {
	label: string;
	href: string;
};

type HeaderCta = {
	label: string;
	href: string;
};

interface HeaderProps {
	className?: string;
	logoHref?: string;
	logoSrc?: string;
	logoAlt?: string;
	links?: HeaderLink[];
	cta?: HeaderCta;
}

const defaultLinks: HeaderLink[] = [
	{ label: "Products", href: "#products" },
	{ label: "Solutions for You", href: "#solutions" },
	{ label: "Support", href: "#support" },
	{ label: "Buy Now", href: "#buy-now" },
];

const defaultCta: HeaderCta = {
	label: "Free Trial",
	href: "#free-trial",
};

export default function Header({
	className,
	logoHref = "/",
	logoSrc = "https://cert-www.lexisnexis.com/images/SVG-icons/logo.svg",
	logoAlt = "LexisNexis",
	links = defaultLinks,
	cta = defaultCta,
}: HeaderProps) {
	return (
		<header
			className={cn(
				"border-b border-black/8 bg-white font-lato",
				className,
			)}
		>
			<div className="mx-auto flex min-h-18 w-full items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
				<Link
					href={logoHref}
					aria-label="LexisNexis home"
					className="shrink-0"
				>
					<img
						src={logoSrc}
						alt={logoAlt}
						className="h-7 w-auto sm:h-8.5"
					/>
				</Link>

				<nav aria-label="Primary" className="ml-auto">
					<ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-3 lg:gap-x-9">
						<li>
							<Link
								href={'#'}
								className="inline-flex min-h-9 items-center justify-center bg-[#ed1c24] px-5 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#c9141b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed1c24] focus-visible:ring-offset-2"
							>
								{cta.label}
							</Link>
						</li>

						{links.map((link) => (
							<li key={link.label}>
								<Link
									href={'#'}
									  className="inline-flex min-h-9 items-center text-[12px] font-bold uppercase tracking-[0.08em] text-[#1d1d1d] transition-colors hover:text-[#ed1c24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed1c24] focus-visible:ring-offset-2"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
