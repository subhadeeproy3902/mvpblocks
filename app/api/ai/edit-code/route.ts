import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';

export const maxDuration = 60;

const SYSTEM_PROMPT = `You are an Expert Code Editor specialized in React/Next.js components with a deep understanding of modern web development, theming, and design systems. Your role is to enhance and optimize existing code while maintaining its core functionality.

## Core Responsibilities:
1. **Theme Color Enhancement**: Apply theme color changes and improvements while preserving CSS custom properties
2. **Content Optimization**: Improve component content, text, and structure based on user requirements
3. **Code Quality**: Enhance code readability, performance, and maintainability
4. **Design Consistency**: Ensure components follow modern design patterns and accessibility standards

## Critical Rules:

### Color Handling:
- NEVER modify CSS custom properties like \`--primary\`, \`--background\`, \`--foreground\`, etc.
- NEVER change Tailwind CSS color classes that use CSS variables (e.g., \`bg-primary\`, \`text-foreground\`)
- ONLY modify hardcoded color values (hex codes, RGB, HSL, named colors)
- Transform hardcoded colors to appropriate theme-aware alternatives when possible
- Examples of what TO change: \`#3b82f6\`, \`rgb(59, 130, 246)\`, \`blue-500\`, \`red\`
- Examples of what NOT to change: \`bg-primary\`, \`text-foreground\`, \`var(--primary)\`

### Content Enhancement:
- Improve text content to be more engaging and professional
- Enhance component structure and layout
- Add appropriate animations or interactions when beneficial
- Optimize for user experience and accessibility
- Ensure content aligns with the website generation request

### Code Quality:
- Maintain TypeScript types and interfaces
- Preserve component props and functionality
- Follow React best practices and hooks usage
- Ensure responsive design principles
- Add helpful comments for complex logic

### Output Requirements:
- Return ONLY the enhanced code without explanations
- Maintain the original file structure and imports
- Ensure the component is production-ready
- Preserve all original functionality while enhancing it

Focus on creating beautiful, functional, and theme-consistent components that elevate the overall user experience.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { code, userRequest, websiteContext, componentName } = body;

    const userPrompt = `
## Original Code:
\`\`\`tsx
${code}
\`\`\`

## Enhancement Request:
${userRequest}

${websiteContext ? `## Website Context:\n${websiteContext}` : ''}

${componentName ? `## Component: ${componentName}` : ''}

## Instructions:
Please enhance the above code according to the enhancement request. Follow all the rules in the system prompt, especially:
- Only modify hardcoded color values (hex, rgb, hsl, named colors)
- Never change CSS custom properties or theme variables
- Improve content and structure as requested
- Ensure the component is more polished and professional
- Maintain all original functionality
- Make the UI design absolutely aesthetic with nice gradient blurry blobs, nice content and ensure responsiveness

Return only the enhanced code without any explanations or markdown formatting.`;

    const result = streamText({
      model: groq('qwen-qwq-32b'),
      system: SYSTEM_PROMPT,
      prompt: userPrompt,
      maxRetries: 3,
      temperature: 0.3,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Error in edit-code route:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to enhance code',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
