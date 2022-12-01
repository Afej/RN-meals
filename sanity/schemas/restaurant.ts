export default {
  name: 'restaurant',
  type: 'document',
  title: 'Restaurant',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Category',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Restaurant',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude of the Restaurant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Restaurant Address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter rating from (1-5) stars',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error('Please enter a value betweeen 1 and 5'),
    },
    {
      name: 'type',
      type: 'reference',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'category' }],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Restaurant Dishes',
      of: [{ type: 'reference', to: [{ type: 'dish' }] }],
    },
  ],
};
