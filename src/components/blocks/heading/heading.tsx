import type { HTMLAttributes } from "react";

type AllowedTag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const ALLOWED_TAGS: Set<AllowedTag> = new Set(["p", "h1", "h2", "h3", "h4", "h5", "h6"]);

interface HeadingProps extends HTMLAttributes<HTMLElement> {
    tag?: AllowedTag;
    content?: string;
    children?: React.ReactNode;
    variant?: string;
}

export default function Heading({
    tag = "h3",
    content,
    children,
    className = "",
    variant = "",
    ...rest
}: HeadingProps) {
    const Tag = ALLOWED_TAGS.has(tag) ? tag : "p";
    const classes = [variant === "primary" ? "primary-heading" : "heading",  className].filter(Boolean).join(" ");
    if (content) {
        return <Tag className={classes} dangerouslySetInnerHTML={{ __html: content }} {...rest} />;
    }

    return <Tag className={classes} {...rest}>{children}</Tag>;
}