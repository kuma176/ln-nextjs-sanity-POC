import HeadingBlock from "@/components/blocks/heading-block/heading-block";

interface HeroProps {
	preheader?: string;
	heading?: string;
	description?: string;
	hiddenHeading?: string;
}

export default function Hero({
	preheader = "Preheader",
	heading = "Hero component",
	description = "Description text lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi tempore saepe officiis, doloremque ecessitatibus id illum expedita nesciunt quos ad autem iste! Quos eligendi accusamus iusto ipsa molestiae pariatur quisquam!",
	hiddenHeading = "Homepage hero",
}: HeroProps) {
	return (
		<section className="border-y border-red-100 bg-red-50 ">
			<div className="container gap-padding">
				<HeadingBlock
					className="header-centered"
					hiddenElement={{ content: hiddenHeading, tag: "span" }}
					preheader={{
						content: preheader,
						className: "",
					}}
					heading={{
						content: heading,
						tag: "h1",
						variant: "primary",
						className: "text-center",
					}}
					bodyText={{
						content: description,
						className: "",
					}}
				/>
			</div>
		</section>
	);
}
