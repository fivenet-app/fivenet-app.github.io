import { defineCollection, z } from '@nuxt/content';

const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']);
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info']);
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl']);
const orientationEnum = z.enum(['vertical', 'horizontal']);

const baseSchema = {
    title: z.string().nonempty(),
    description: z.string().nonempty(),
};

const linkSchema = z.object({
    label: z.string().nonempty(),
    to: z.string().nonempty(),
    icon: z.string().optional(),
    size: sizeEnum.optional(),
    trailing: z.boolean().optional(),
    target: z.string().optional(),
    color: colorEnum.optional(),
    variant: variantEnum.optional(),
});

const imageSchema = z.object({
    src: z.string().nonempty(),
    alt: z.string().optional(),
    loading: z.string().optional(),
    srcset: z.string().optional(),
});

const featureItemSchema = z.object({
    ...baseSchema,
    icon: z.string().nonempty(),
});

const sectionSchema = z.object({
    headline: z.string().optional(),
    ...baseSchema,
    features: z.array(featureItemSchema),
    image: z.object({
        src: z.string().optional(),
        alt: z.string().optional(),
    }),
});

export const collections = {
    docs: defineCollection({
        type: 'page',
        source: {
            include: '**',
            exclude: ['0.index.yml'],
        },
        schema: z.object({
            title: z.string().nonempty(),
            description: z.string().nonempty(),
            links: z
                .array(
                    z.object({
                        label: z.string(),
                        icon: z.string(),
                        to: z.string(),
                        target: z.string().optional(),
                    }),
                )
                .optional(),
        }),
    }),
    index: defineCollection({
        source: '0.index.yml',
        type: 'data',
        schema: z.object({
            title: z.string().nonempty(),
            description: z.string().nonempty(),
            hero: sectionSchema.extend({
                headline: z.object({
                    label: z.string().nonempty(),
                    to: z.string().nonempty(),
                    icon: z.string().nonempty(),
                }),
                links: z.array(linkSchema),
            }),
            sections: z.array(
                sectionSchema.extend({
                    id: z.string().nonempty(),
                    orientation: orientationEnum.optional(),
                    features: z.array(featureItemSchema),
                    links: z.array(linkSchema),
                    reverse: z.boolean().optional(),
                }),
            ),
            features: sectionSchema.extend({
                items: z.array(featureItemSchema),
            }),
            testimonials: sectionSchema.extend({
                items: z.array(
                    z.object({
                        quote: z.string().nonempty(),
                        user: z.object({
                            name: z.string().nonempty(),
                            description: z.string().nonempty(),
                            to: z.string().nonempty(),
                            target: z.string().nonempty(),
                            avatar: imageSchema,
                        }),
                    }),
                ),
            }),
            cta: sectionSchema.extend({
                links: z.array(linkSchema),
            }),
            stats: z.array(
                z.object({
                    key: z.string(),
                    number: z.number(),
                    icon: z.string(),
                    type: z.string().optional(),
                    unit: z.string().optional(),
                }),
            ),
            faq: z.object({
                ...baseSchema,
                items: z.array(
                    z.object({
                        label: z.string(),
                        content: z.string(),
                    }),
                ),
            }),
        }),
    }),
};
