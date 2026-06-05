import HeadingBlock from "@/components/blocks/heading-block/heading-block"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function ButtonPage() {
  return (
        <section className="gap-padding">
            <div className="container">
                <HeadingBlock 
                    preheader={{tag: "h2", content: "Button Variants"}}
                    heading={{tag: "p", content:"Various button variants", variant: "primary"}}
                    bodyText={{tag: "div", content: "Description text lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi tempore saepe officiis, doloremque ecessitatibus id illum expedita nesciunt quos ad autem iste! Quos eligendi accusamus iusto ipsa molestiae pariatur quisquam!"}}
                    >
                </HeadingBlock>
                <div className="mt-12">
                    <Button variant="primary" className="mr-2">Primary Button</Button>
                    <Button variant="primary" className="mr-2">Primary Button <ArrowRight /></Button>
                </div>
                <div className="mt-7">
                    <Button variant="secondary" className="mr-2">Secondary Button</Button>
                    <Button variant="secondary" className="mr-2">Secondary Button <ArrowRight /></Button>
                </div>
                <div className="mt-7">
                    <Button variant="tertiary" className="mr-2">Tertiary Button</Button>
                    <Button variant="tertiary" className="mr-2">Tertiary Button <ArrowRight /></Button>
                </div>
                <div className="mt-7">
                    <Button variant="link" className="mr-2">Link Button</Button>
                    <Button variant="link" className="mr-2">Link Button <ArrowRight /></Button>
                </div>
        </div>
        </section>
  )
}

export default ButtonPage
