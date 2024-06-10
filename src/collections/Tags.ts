import type { CollectionConfig } from "payload/types";

export const Tags: CollectionConfig = {
	slug: "tags",
	admin: {
		useAsTitle: "title",
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "title",
			type: "text",
		},
	],
};
