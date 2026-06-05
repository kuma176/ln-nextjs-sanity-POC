import Link from "next/link";
import { AccordionProps } from "./Accordion.types";
import HeadingBlock from "@/components/blocks/heading-block/heading-block";
import {
    AccordionItemsWrapper,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { toButtonVariant } from "@/lib/content";
import { cn } from "@/lib/utils";



export default function Accordion({ data }: AccordionProps) {
    const { accordion } = data;
    const expandedItemIndex = accordion.items.findIndex((item) => item.default === true);
    const defaultValue = expandedItemIndex >= 0 ? `item-${expandedItemIndex + 1}` : undefined;

    return (
        <section className={cn("gap-padding", accordion.class)}>
            <div className="container">
                <HeadingBlock
                    hiddenElement={{ content: accordion.headingBlock.hiddenHeader }}
                    preheader={{ content: accordion.headingBlock.preheader }}
                    heading={{ content: accordion.headingBlock.heading, variant: "primary" }}
                    bodyText={{ content: accordion.headingBlock.description }}
                    headingElement={accordion.headingBlock.headingElement}
                >
                </HeadingBlock>
                <AccordionItemsWrapper
                    type="single"
                    collapsible
                    defaultValue={defaultValue}
                    className="mt-8"
                >
                    {accordion.items.map((item, index) => (
                        <AccordionItem key={`${item.heading}-${index + 1}`} value={`item-${index + 1}`}>
                            <AccordionTrigger>{item.heading}</AccordionTrigger>
                            <AccordionContent>{item.body}</AccordionContent>
                        </AccordionItem>
                    ))}
                </AccordionItemsWrapper>
                <Button variant={toButtonVariant(accordion.cta.variant)} className="mt-9" asChild>
                    <Link href={accordion.cta.link}>
                        {accordion.cta.label}

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.4788 10.8335H3.33301V9.16683H13.4788L8.81217 4.50016L9.99967 3.3335L16.6663 10.0002L9.99967 16.6668L8.81217 15.5002L13.4788 10.8335Z"
                                fill="currentColor" />
                        </svg>
                    </Link>
                </Button>
            </div>
        </section>
    );
}
