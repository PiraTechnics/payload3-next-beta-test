import { Alert } from "@/blocks/Alert";
import { Quote } from "@/blocks/Quote";
import { Content } from "@/blocks/Content";
import type { CollectionConfig } from "payload/types";

import {
	HTMLConverterFeature,
	lexicalEditor,
	lexicalHTML,
} from "@payloadcms/richtext-lexical";

export const Posts: CollectionConfig = {
	slug: "posts",
	labels: {
		singular: "Post",
		plural: "Posts",
	},
	admin: {
		defaultColumns: ["title", "author", "category", "tags", "status"],
		useAsTitle: "title",
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			minLength: 6,
			maxLength: 100,
			unique: true,
		},
		{
			name: "slug",
			label: "Slug",
			type: "text",
			required: true,
			unique: true,
		},
		{
			name: "description",
			type: "textarea",
			required: true,
			minLength: 20,
			maxLength: 160,
		},
		{
			name: "keywords",
			label: "Keywords",
			type: "text",
		},
		{
			type: "tabs",
			tabs: [
				{
					label: "Featured Image",
					fields: [
						{
							name: "postImage",
							label: "Image",
							type: "upload",
							relationTo: "media",
							required: true,
						},
					],
				},
				{
					label: "Post Content",
					fields: [
						{
							name: "content",
							type: "richText",
							required: true,
							editor: lexicalEditor({
								features: ({ defaultFeatures }) => [
									...defaultFeatures,
									// The HTMLConverter Feature is the feature which manages the HTML serializers.
									// If you do not pass any arguments to it, it will use the default serializers.
									HTMLConverterFeature({}),
								],
							}),
						},
						lexicalHTML("content", {
							name: "content_html",
						}),
					],
				},
			],
		},
		/* {
			type: "tabs",
			tabs: [
				{
					label: "Post Hero",
					fields: [
						{
							name: "postImage",
							type: "upload",
							relationTo: "media",
							required: true,
						},
					],
				},
				{
					label: "Post Layout",
					fields: [
						{
							name: "layout",
							type: "blocks",
							blocks: [Quote, Content, Alert],
						},
					],
				},
			],
		}, */
		// add sidebar fields here
		{
			name: "status",
			type: "select",
			options: [
				{
					value: "draft",
					label: "Draft",
				},
				{
					value: "published",
					label: "Published",
				},
			],
			defaultValue: "draft",
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "publishedDate",
			type: "date",
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "author",
			type: "relationship",
			relationTo: "users",
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "category",
			type: "relationship",
			relationTo: "categories",
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "tags",
			type: "relationship",
			relationTo: "tags",
			hasMany: true,
			admin: {
				position: "sidebar",
			},
		},
	],
};
