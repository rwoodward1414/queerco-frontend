import { defineQuery } from 'groq';

// Updates
// Gets the first newest posts
export const first = defineQuery(`*[_type == 'update'] | order(_createdAt desc)[0]`);
// Gets all posts
export const updatesQuery = defineQuery(`*[_type == 'update'] | order(_createdAt desc)`);

// Links
export const socialsQuery = defineQuery(`*[_type == 'social']`);
export const resourceQuery = defineQuery(`*[_type == 'resource']`);

// Singletons
export const aboutQuery = defineQuery(`*[_type == 'aboutInfo'][0]`);
export const meetingQuery = defineQuery(`*[_type == 'meetingInfo'][0]`);
export const queerspaceQuery = defineQuery(`*[_type == 'queerspaceInfo'][0]`);