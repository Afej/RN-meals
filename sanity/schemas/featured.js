export default {
  name: 'featured',
  type: 'document',
  title: 'Featured Menu Categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Category Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'restuarants',
      type: 'array',
      title: 'Restuarants',
      of: [
        {
          type: 'reference',
          to: [{ type: 'restuarant' }],
        },
      ],
    }, 
  ],
};
