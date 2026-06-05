export interface AccordionItemData {
    heading: string;
    body: string;
    default: boolean;
}

export interface AccordionSectionData {
    class: string;
    headingBlock: {
        headingElement?: string;
        preheader: string;
        heading: string;
        hiddenHeader: string;
        description: string;
    };
    items: AccordionItemData[];
    cta: {
        label: string;
        link: string;
        variant: string;
        icon?: string;
    };
}

export interface AccordionProps {
    data: {
        accordion: AccordionSectionData;
    };
}
