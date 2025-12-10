import { GoogleGenAI } from "@google/genai";

// Initialize the client with the API Key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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

export const handler = async (event) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: 'Method Not Allowed' };
  }

  try {
    const { message, history } = JSON.parse(event.body);

    if (!message) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Message is required' }) };
    }

    const modelResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: PORTFOLIO_CONTEXT }] },
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ text: modelResponse.text })
    };

  } catch (error) {
    console.error('Gemini API Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to generate response' })
    };
  }
};