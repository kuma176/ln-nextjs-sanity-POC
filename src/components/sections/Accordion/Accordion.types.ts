import type { PortableTextBlock } from "next-sanity";
export interface AccordionItemData {
    _key: string;
    heading: string;
    body: PortableTextBlock[];
    opened?: string;
}

export interface AccordionSectionData {
    _key: string;
    _type: string;
    class?: string;
    headingBlock?: {
        headingElement?: string;
        preheader?: string;
        heading?: string;
        hiddenHeader?: string;
        description?: string;
    }
    items: AccordionItemData[];
    cta?: {
        label?: string;
        link?: string;
        variant?: string;
        class?: string;
        icon?: string;
    };
}
