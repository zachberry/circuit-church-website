import { z, defineCollection } from "astro:content";

const releaseCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			releaseNumber: z.string().optional(),
			artist: z.string(),
			title: z.string(),
			//https://docs.astro.build/en/guides/images/#images-in-content-collections
			image: image(),
			ogImageUrl: z.string().optional(),
			backgroundVideoUrl: z.string().optional(),
			formats: z.array(z.string()).optional(),
			trackListing: z
				.object({
					sideA: z.array(z.string()),
					sideB: z.array(z.string()).optional(),
				})
				.optional(),
			releaseDate: z.string().optional(),
			authors: z.array(z.string()).optional(),
			mastering: z.array(z.string()).optional(),
			artwork: z.array(z.string()).optional(),
			additionalCredits: z.array(z.string()).optional(),
			production: z.array(z.string()).optional(),
			purchaseLinks: z
				.array(
					z.object({
						service: z.string(),
						url: z.string(),
					}),
				)
				.optional(),
			streamingLinks: z
				.array(
					z.object({
						service: z.string(),
						url: z.string(),
					}),
				)
				.optional(),
		}),
});

export const collections = {
	releases: releaseCollection,
};
