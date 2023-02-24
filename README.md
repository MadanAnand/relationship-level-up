# relationship-level-up
A coach to help you level up in your relationships


## Run the App
expo start 

## Key tech decisions 
1. using tail wind css / nativewind new one
2. installed navigation container for other things : 
    npm install @react-navigation/native
    npx expo install react-native-screens react-native-safe-area-context
3. installed createNativeStackNavigator : npm install @react-navigation/native-stack
4. I wanted bottom tab navigation. so tried : npm install @react-navigation/bottom-tabs
5. Added React native hero icon pack for standard svg , npm i react-native-heroicons react-native-svg
6. For backend decisions were :
    6.1  Learnt how Sanity(sanity.io) works. It's a CMS and has a query language of it's own. Pretty sleek integration.
    6.2 compared sanity.io with an BaaS . It's pretty similar to Sanity. (Up to 500MB database & 1GB file storage, Up to 2GB bandwidth, Up to 50MB file uploads)
    6.3 compared Firebase for future proofing the app and it's a lot more complex to use it for the usecase than Sanity or other BaaS. 
7. Sanity on a different folder. To start - Sanity Build, if you make changes, you need to redeploy to the backend.
8. Installed npm i @sanity/client @sanity/image-url
9. Run following to  add exception for localhost 19006, 3333 CORS. in cd of sanity folder. This is for allowing expo to access sanity. 'sanity cors add http://localhost:19006'
10. Example usuage of GROQ for sanity -->
    *[_type == "player" && name match "Sultan"]{
  name,
    image,
    relationship[]->{
      ...,
      
    }
    }
11. 


## Dev tools used for development
1. VS Code 
2. VS Code plugins :
   1. ES7+ snippets - for auto complete of code Ex : rnfe 