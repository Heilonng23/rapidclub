import { defineField, defineType } from "sanity";

export const author = defineType({
   name: "starup",
   title: "Startup",
   type: "document",
   fields: [
      defineField({
         name: "title",
         type: "string    ",
      }),
      defineField({
         name: "slug",
         type: "slug",
         options: {
            source: "title",
         },
      }),
      defineField({
         name: "author",
         type: "reference",
         to: { type: "author" },
      }),
      defineField({
         name: "views",
         type: "number ",
      }),
      defineField({
         name: "description",
         type: "text",
      }),
      defineField({
         name: "category",
         type: "string",
         validation: (Rule) => Rule.min(1),
      }),
      defineField({
         name: "bio",
         type: "text",
      }),
   ],
   preview: {
      select: {
         title: "name",
      },
   },
});
