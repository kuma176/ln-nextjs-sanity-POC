import type { HTMLAttributes } from "react";

type AllowedTag = "p" | "div" | "h2" | "h3" | "h4" | "h5" | "h6";

const ALLOWED_TAGS: Set<AllowedTag> = new Set(["p", "div", "h2", "h3", "h4", "h5", "h6"]);

interface PreheaderProps extends HTMLAttributes<HTMLElement> {
    tag?: AllowedTag;
    content?: string;
    children?: React.ReactNode;
}

export default function Preheader({
    tag = "p",
    content,
    children,
    className = "",
    ...rest
}: PreheaderProps) {
    const Tag = ALLOWED_TAGS.has(tag) ? tag : "p";
    const classes = ["preheader", className].filter(Boolean).join(" ");

    if (content) {
        return <Tag className={classes} dangerouslySetInnerHTML={{ __html: content }} {...rest} />;
    }

    return <Tag className={classes} {...rest}>{children}</Tag>;
}