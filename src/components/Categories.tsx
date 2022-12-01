import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import sanityClient, { urlFor } from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const query = `
  *[_type == "category"]
`;

  useEffect(() => {
    sanityClient.fetch(query).then((data) => setCategories(data));
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 15,
      }}>
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          title={category.name}
          imgUrl={urlFor(category.image).width(200).url()}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
