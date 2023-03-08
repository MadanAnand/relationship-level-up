
const {createClient} = require('@sanity/client')
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'mu0gql27',
    dataset: 'production',
    useCdn: false, // set to `true` to fetch from edge cache
    apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })
  


const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

/**
 * relationship stages fetch 
 * const query = '*[_type == "relationshipStage"] {title}'
 const params = {}
 
 client.fetch(query, params).then((relationshipStages) => {
   console.log('relationships stages are')
   relationshipStages.forEach((relationshipStages) => {
     console.log(`${relationshipStages.title}`)
   })
 }).catch(console.log('no relationship stages found'))
 console.log(realtionshipStages[0].image);
 console.log(urlFor(realtionshipStages[0].image).url());
 */
/**
 * relationships fetch 
 *  const query = '*[_type == "relationship" && title ==$relationshipName] {title}'
 const params = {relationshipName: "Alladin / Orino Koflo"}
 
 client.fetch(query, params).then((players) => {
   console.log('relationship with sultan is')
   players.forEach((player) => {
     console.log(`${player.title}`)
   })
 }).catch(console.log('no rel found'))
 */

 /**
  * Player fetch
  * 
  * 
// const query = '*[_type == "player" && name == $searchName] {name}'
// const params = {searchName: 'Sultan'}

// client.fetch(query, params).then((players) => {
//   console.log('name with sultan is')
//   players.forEach((player) => {
//     console.log(`${player.name}`)
//   })
// })
  */
// this cient call can be used for quick check of all records
// client
// .fetch(`count(*)`)
// .then((data) => console.log(`Number of documents fetched from Sanity.io: ${data}`))
// .catch(console.error)


/**
 * to get a title from reference array GROQ
 * 
 * *[_type == "relationship" && title =="Alladin / Orino Koflo"]{
    relationshipStage[] -> {title}
    }
 */