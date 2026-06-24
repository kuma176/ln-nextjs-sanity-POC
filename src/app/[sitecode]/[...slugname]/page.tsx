import { PageBuilder } from "@/components/page-builder/PageBuilder";
import { client } from "@/sanity/client";
import { pageByLocaleAndSlugQuery } from "@/sanity/queries";
import { notFound } from "next/navigation";

const options = { next: { revalidate: 30 } };

export default async function LocalizedPage({
	params,
}: {
	params: Promise<{ sitecode: string; slugname: string[] }>;
}) {
	const { sitecode, slugname } = await params;
	const slugPath = sitecode + "/" + (slugname.join("/"));
	const page = await client.fetch(
		pageByLocaleAndSlugQuery,
		{ slugPath },
		options
	);

	if (!page) {
		notFound();
	}

	return <PageBuilder sections={page.sections ?? []} />
}
