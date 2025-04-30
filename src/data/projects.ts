export interface Project {
  title: string;
  url: string;
  description: string;
  imagePath?: string;
  featured?: boolean;
  showIframe?: boolean;  // Adding this for future iframe support
}

export const projects: Project[] = [
  {
    title: 'Flow Phangan',
    url: 'https://flowphangan.com/',
    description: 'A tropical paradise for AI Builders in Thailand - Creating a vibrant community of digital nomads and entrepreneurs',
    imagePath: '/IMG_7992.jpg',
    featured: true,
    showIframe: true
  },
  {
    title: 'AI Flow',
    url: 'https://ai.flowphangan.com/',
    description: 'An evolving community AI agent (Flow Monkey) that maintains a shared knowledge base, manages events via Google Calendar, and interacts through Telegram',
    showIframe: true,
    featured: true
  },
  {
    title: 'LLM Playground',
    url: 'https://llm-playground.replit.app/',
    description: 'An interactive platform to test and compare different large language models, featuring community voting and a living history of Q&As - Always up-to-date with the latest LLMs',
    showIframe: true,
    featured: true
  },
  {
    title: 'Taste',
    url: 'https://taste-with-a.lovable.app/',
    description: 'An experimental exploration into digital taste experiences, blending art, writing, and creativity with AI',
    showIframe: true,
    featured: true
  },
  {
    title: 'Bitcoin Explained',
    url: 'https://bitcoin-explained-by.replit.app/',
    description: 'A creative exploration of Bitcoin\'s proof of work through a beautiful web experience',
    showIframe: true
  },
  {
    title: 'Muppet Memory',
    url: 'https://muppet-memory.replit.app/',
    description: 'A playful memory card game featuring Muppets from Mars College - Test your memory and meet the characters!',
    showIframe: true
  },
  {
    title: 'Voice a Sketch',
    url: 'https://vocal-eyez.replit.app/',
    description: 'A voice-controlled drawing app where the tone of your voice guides the sketch pad',
    showIframe: true
  },
  {
    title: 'AI.JackMielke.com',
    url: 'https://ai.jackmielke.com/',
    description: 'My experimental AI playground - The chaotic, nerdy version of my personal website where I test and showcase various AI experiments',
    showIframe: true,
    featured: true
  }
]; 