import type { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
	slug: "media",
	labels: {
		singular: "Media",
		plural: "Media",
	},
	admin: {
		useAsTitle: "title",
	},
	access: {
		read: () => true,
	},
	//upload: true,
	upload: {
		//staticURL: "/media",
		staticDir: "media",
		mimeTypes: ["image/*"],
	},
	fields: [
		{
			name: "alt",
			label: "Alt",
			type: "text",
			required: true,
		},
	],
};
