
import type { HTMLAttributes, ComponentProps } from "react";

import Preheader from "../preheader/preheader";
import HiddenElement from "../hidden-element/hidden-element";
import Heading from "../heading/heading";
import BodyText from "../body-text/body-text";

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