import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { notFound } from "next/navigation";
import { Post } from "@/payload-types";

export default async function Page({ params }: { params: { id: string } }) {
	const slug = params.id;

	const payload = await getPayloadHMR({ config: configPromise });
	const data = await payload.find({
		collection: "posts",
		where: {
			slug: {
				equals: slug,
			},
		},
	});

	const post: Post = data.docs[0]; //do we need to just grab the first index? it should be a unique find but hey

	if (!post) {
		notFound();
	}
	console.log(post);

	return (
		<main>
			<div>We got a post!</div>
			{/* {post.content_html && (
				<div dangerouslySetInnerHTML={{ __html: post.content_html }} />
			)} */}
		</main>
	);
}
