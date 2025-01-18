import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: "0qcbspok",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: false,
});