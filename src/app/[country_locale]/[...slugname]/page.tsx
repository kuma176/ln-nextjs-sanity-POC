import { PageBuilder } from "@/components/page-builder/PageBuilder";
import { client } from "@/sanity/client";
import { pageByLocaleAndSlugQuery } from "@/sanity/queries";
import { notFound } from "next/navigation";

const options = { next: { revalidate: 30 } };

export default async function LocalizedPage({
	params,
}: {
	params: Promise<{ country_locale: string; slugname: string[] }>;
}) {
	const { country_locale, slugname } = await params;
	const slugPath = slugname.join("/");
	const page = await client.fetch(
		pageByLocaleAndSlugQuery,
		{ country_locale, slugPath },
		options
	);

	if (!page) {
		notFound();
	}

	return <PageBuilder sections={page.sections ?? []} />;
}
