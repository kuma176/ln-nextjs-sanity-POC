import type { HTMLAttributes } from "react";

type AllowedTag = "span" | "h2" | "h3" | "h4" | "h5" | "h6";

const ALLOWED_TAGS: Set<AllowedTag> = new Set(["span", "h2", "h3", "h4", "h5", "h6"]);

interface HiddenElementProps extends HTMLAttributes<HTMLElement> {
    tag?: AllowedTag;
    content?: string;
    children?: React.ReactNode;
}

export default function HiddenElement({
    tag = "span",
    content,
    children,
    className = "",
    ...rest
}: HiddenElementProps) {
    const Tag = ALLOWED_TAGS.has(tag) ? tag : "span";
    const classes = ["visually-hidden", className].filter(Boolean).join(" ");

    if (content) {
        return <Tag className={classes} dangerouslySetInnerHTML={{ __html: content }} {...rest} />;
    }

    return <Tag className={classes} {...rest}>{children}</Tag>;
}