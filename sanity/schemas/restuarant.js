export default {
  name: 'restuarant',
  type: 'document',
  title: 'Restuarant',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restuarant Name',
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
      title: 'Image of the Restuarant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Restuarant',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude of the Restuarant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Restuarant Address',
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
      title: 'Restuarant Dishes',
      of: [{ type: 'reference', to: [{ type: 'dish' }] }],
    },
  ],
};
