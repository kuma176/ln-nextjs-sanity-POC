
import type { HTMLAttributes, ComponentProps } from "react";

import Preheader from "../atoms/Preheader";
import HiddenElement from "../atoms/HiddenElement";
import Heading from "../atoms/Heading";
import BodyText from "../atoms/BodyText";

interface HeadingBlockProps extends HTMLAttributes<HTMLDivElement> {
	preheader?: ComponentProps<typeof Preheader>;
	hiddenElement?: ComponentProps<typeof HiddenElement>;
	heading?: ComponentProps<typeof Heading>;
	bodyText?: ComponentProps<typeof BodyText>;
}

export function HeadingBlock({
	preheader,
	hiddenElement,
	heading,
	bodyText,
	className = "",
	...rest
}: HeadingBlockProps) {
	const classes = ["heading-block", className].filter(Boolean).join(" ");

	return (
		<div className={classes} {...rest}>
            {hiddenElement && <HiddenElement {...hiddenElement} />}
			{preheader && <Preheader {...preheader} />}
			{heading && <Heading {...heading} />}
			{bodyText && <BodyText {...bodyText} />}
		</div>
	);
}

export default HeadingBlock;