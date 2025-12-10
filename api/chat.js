import { GoogleGenAI } from "@google/genai";

// Initialize the client with the API Key from environment variables
// This runs on the server, so the key is safe.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Resume/Context Data for the AI
const PORTFOLIO_CONTEXT = `
You are the AI Assistant for Yunyue LEI's portfolio website. Your goal is to answer questions about Yunyue based on the information below.
If the user asks something not in this profile, politely say you don't know but suggest they contact Yunyue directly.
Keep answers concise, professional, and friendly.

PROFILE SUMMARY:
- Name: Yunyue LEI
- Titles: Curious Builder, Analytical Thinker, Cross-cultural Storyteller.
- Bio: Self-driven programmer & data enthusiast. Strong foundation in business analysis, sustainable innovation, and global project execution. Worked across Europe and Asia.

EXPERIENCE:
1. Global E-commerce HRBP Intern @ ByteDance (Shanghai, Mar-Aug 2025): Analyzed consumer behavior, supported leadership programs.
2. Sustainable Development Intern @ Decathlon (Shanghai, Jun 2024-Mar 2025): Executed sustainability campaigns, coordinated nationwide cleanup initiatives.
3. Marketing Intern @ Santen (Shanghai, Sep-Dec 2023): Competitor research, SEO content, product launch ops.

PROJECTS:
- Diamond Price Analysis (Python/Pandas): Data analysis of pricing trends.
- Kiwun’s Rose Castle (RPG Maker): Game showing narrative design.
- Decathlon Zero-Emission Truck (Video): Sustainable logistics brand video.
- Pet Cloud (Video): Short film on emotional connections.

EDUCATION:
- Master's: EDHEC Business School | Imperial College London (2025-2028). Double degree. Scholarship recipient.
- Bachelor's: East China Normal University (French Literature, 2021-2025). Top 10% GPA.

SKILLS:
- Tech: Python, Pandas, Matplotlib, SQL, Tableau.
- Design: Figma, Canva, CapCut.
- Soft Skills: Storytelling, Cross-cultural messaging, User research.

CONTACT:
- Email: yunyue.lei@edhec.com
`;

export default async function handler(request, response) {
  // Handle CORS for development/production
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { message, history } = request.body;

    if (!message) {
      return response.status(400).json({ error: 'Message is required' });
    }

    // Call Gemini API
    // We use gemini-2.5-flash for speed and efficiency
    const modelResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: PORTFOLIO_CONTEXT }] }, // System Context
        ...history, // Previous chat history
        { role: 'user', parts: [{ text: message }] } // Current message
      ],
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.status(200).json({ 
      text: modelResponse.text 
    });

  } catch (error) {
    console.error('Gemini API Error:', error);
    return response.status(500).json({ error: 'Failed to generate response' });
  }
}