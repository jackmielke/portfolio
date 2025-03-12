import { Client } from '@notionhq/client';

const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN,
});

export async function getFavorites() {
  try {
    console.log('Config:', {
      token: import.meta.env.NOTION_TOKEN,
      database_id: import.meta.env.NOTION_DATABASE_ID,
    });

    const response = await notion.databases.query({
      database_id: import.meta.env.NOTION_DATABASE_ID,
    });

    // Log the raw response
    console.log('Raw Notion Response:', JSON.stringify(response, null, 2));
    
    return response;
  } catch (error) {
    console.error('Error fetching from Notion:', error);
    return null;
  }
} 