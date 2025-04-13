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
  }
]; 