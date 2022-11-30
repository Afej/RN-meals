export default {
  name: 'dish',
  type: 'document',
  title: 'Dish',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Dish',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of dish',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Category',
    },
  ],
};
