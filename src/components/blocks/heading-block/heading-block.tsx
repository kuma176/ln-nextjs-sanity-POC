
import Preheader from "../preheader/preheader";
import HiddenElement from "../hidden-element/hidden-element";
import Heading from "../heading/heading";
import BodyText from "../body-text/body-text";
import {HeadingBlockProps} from "./headingBlock.type";

export function HeadingBlock({
	preheader,
	hiddenElement,
	heading,
	bodyText,
	headingElement,
	className = "",
	...rest
}: HeadingBlockProps) {
	const classes = ["heading-block", className].filter(Boolean).join(" ");
	const hiddenElementTag =
		headingElement === "hiddenElement"
			? "h2"
			: hiddenElement?.tag;
	const preheaderTag =
		headingElement === "preheader"
			? "h2"
			: preheader?.tag;
	const headingTag =
		headingElement === "heading"
			? "h2"
			: heading?.tag;

	return (
		<div className={classes} {...rest}>
			{hiddenElement && (hiddenElement.content || hiddenElement.children) && <HiddenElement {...hiddenElement} tag={hiddenElementTag} />}
			{preheader && (preheader.content || preheader.children) && <Preheader {...preheader} tag={preheaderTag} />}
			{heading && (heading.content || heading.children) && <Heading {...heading} tag={headingTag} />}
			{bodyText && (bodyText.content || bodyText.children) && <BodyText {...bodyText} />}
		</div>
	);
}

export default HeadingBlock;