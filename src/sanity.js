import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: 'hiz9y8ag',
  dataset: 'production',
  apiVersion: '2021-10-21', // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// run this to add expection for cors on localhost, do it in the sanity folder
// sanity cors add http://localhost:3000

export default client;
