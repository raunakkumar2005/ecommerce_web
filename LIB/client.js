import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'vdlcpvyf',
    dataset:'production',
    apiversion:'2022-12-19',
    useCdn:true,
    token:'skJEdF5V6MKMHECBVXqwXwv2W4IX5cC5fsz5U9QOrBOfITM4urhlTg3dhaAf7BmJ49IuEgnZAp0mCVb2F1dTDuPioisKYLkEVQEjxqy7RKCvfrBTlZGgxtZpFHyJ69MWnB1t4QVwbgVUA9i9kKsIjMRnrYXUptrQAdqjj3Z4IdhJiujFfo0B'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);