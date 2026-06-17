import { sectionComponents } from "./PageBuilder.sections";

export function PageBuilder({ sections }: { sections: any[] }) {
  return (
    <>
      {sections.map((section) => {
        const Component = sectionComponents[section._type];
        if (!Component) return null

        return (
          <Component
            key={section._key}
            data={section}
          />
        );
      })}
    </>
  );
}