import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
projectId :"mu0gql27",
dataset: "production",
useCdn : true,
apiVersion: "2022-01-12",
});

const builder = imageUrlBuilder(client);

export const urlFor =(source) => builder.image(source);


export default client;