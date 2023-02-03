declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"chapter": {
"0-preface.mdx": {
  id: "0-preface.mdx",
  slug: "1-introduction/0-preface",
  body: string,
  collection: "chapter",
  data: InferEntrySchema<"chapter">
},
"1-the-alignment-problem.mdx": {
  id: "1-the-alignment-problem.mdx",
  slug: "1-introduction/1-the-alignment-problem",
  body: string,
  collection: "chapter",
  data: InferEntrySchema<"chapter">
},
"2-timelines-and-takeoffs.mdx": {
  id: "2-timelines-and-takeoffs.mdx",
  slug: "1-introduction/2-timelines-and-takeoffs",
  body: string,
  collection: "chapter",
  data: InferEntrySchema<"chapter">
},
"3-outline.mdx": {
  id: "3-outline.mdx",
  slug: "1-introduction/3-outline",
  body: string,
  collection: "chapter",
  data: InferEntrySchema<"chapter">
},
"4-scalable-oversight.md": {
  id: "4-scalable-oversight.md",
  slug: "3-safety/4-scalable-oversight",
  body: string,
  collection: "chapter",
  data: InferEntrySchema<"chapter">
},
"5-adversarial-robustness.md": {
  id: "5-adversarial-robustness.md",
  slug: "5-adversarial-robustness",
  body: string,
  collection: "chapter",
  data: InferEntrySchema<"chapter">
},
"6-interpretability.md": {
  id: "6-interpretability.md",
  slug: "3-safety/6-interpretability",
  body: string,
  collection: "chapter",
  data: InferEntrySchema<"chapter">
},
"7-agent-foundations.md": {
  id: "7-agent-foundations.md",
  slug: "3-safety/7-agent-foundations",
  body: string,
  collection: "chapter",
  data: InferEntrySchema<"chapter">
},
"8-theory-of-dl.md": {
  id: "8-theory-of-dl.md",
  slug: "3-safety/8-theory-of-dl",
  body: string,
  collection: "chapter",
  data: InferEntrySchema<"chapter">
},
"a-linear-algebra.mdx": {
  id: "a-linear-algebra.mdx",
  slug: "4-appendix/a-linear-algebra",
  body: string,
  collection: "chapter",
  data: InferEntrySchema<"chapter">
},
},
"part": {
"1-introduction.mdx": {
  id: "1-introduction.mdx",
  slug: "1-introduction",
  body: string,
  collection: "part",
  data: InferEntrySchema<"part">
},
"2-dl.mdx": {
  id: "2-dl.mdx",
  slug: "2-dl",
  body: string,
  collection: "part",
  data: InferEntrySchema<"part">
},
"3-safety.mdx": {
  id: "3-safety.mdx",
  slug: "3-safety",
  body: string,
  collection: "part",
  data: InferEntrySchema<"part">
},
"4-appendix.mdx": {
  id: "4-appendix.mdx",
  slug: "4-appendix",
  body: string,
  collection: "part",
  data: InferEntrySchema<"part">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
