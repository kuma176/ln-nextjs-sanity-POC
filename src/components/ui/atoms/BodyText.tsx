import type { HTMLAttributes } from "react";

type AllowedTag = "div" | "p";

const ALLOWED_TAGS: Set<AllowedTag> = new Set(["div", "p"]);

interface BodyTextProps extends HTMLAttributes<HTMLElement> {
    tag?: AllowedTag;
    content?: string;
    children?: React.ReactNode;
    variant?: string;
}

export default function BodyText({
    tag = "p",
    content,
    children,
    className = "",
    variant = "",
    ...rest
}: BodyTextProps) {
    const Tag = ALLOWED_TAGS.has(tag) ? tag : "p";
    const classes = ["description",  className].filter(Boolean).join(" ");
    if (content) {
        return <Tag className={classes} dangerouslySetInnerHTML={{ __html: content }} {...rest} />;
    }

    return <Tag className={classes} {...rest}>{children}</Tag>;
}