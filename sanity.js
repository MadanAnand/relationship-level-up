//import sanityClient from "@sanity/client";
const {createClient} = require('@sanity/client')
//import imageUrlBuilder from "@sanity/image-url";

// export const client = sanityClient({
// projectId :"mu0gql27",
// dataset: "production",
// useCdn : true,
// apiVersion: "2022-01-12",
// });

// const builder = imageUrlBuilder(client);

// export const urlFor =(source) => builder.image(source);


// export default client;

export const client = createClient({
    projectId: 'mu0gql27',
    dataset: 'production',
    useCdn: false, // set to `true` to fetch from edge cache
    apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })
  
  client
  .fetch(`count(*)`)
  .then((data) => console.log(`Number of documents fetched from Sanity.io: ${data}`))
  .catch(console.error)

// const data = await client.fetch<player>( `count(*)` )

// console.write(`Number of documents: ${data}`)
  
//   client
//   .fetch(`count(*)`)
//   .then((data) => console.log(`Number of documents: ${data}`))
//   .catch(console.error)

// const builder = imageUrlBuilder(client)

// function urlFor(source) {
//   return builder.image(source)
//}