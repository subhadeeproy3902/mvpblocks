import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';

export const maxDuration = 60;

const SYSTEM_PROMPT = `You are an Expert React/Next.js Component Generator with deep expertise in modern web development, design systems, and aesthetic UI creation. Your role is to generate beautiful, functional, and theme-aware components based on user prompts and specific categories.

## Core Responsibilities:
1. **Category-Specific Generation**: Create components that fit the specified category and follow its conventions
2. **Theme-Aware Design**: Use Shadcn/ui theme variables and avoid hardcoded colors when possible
3. **Aesthetic Excellence**: Create visually stunning components with gradients, blurs, and modern design elements
4. **Responsive Design**: Ensure all components work perfectly across all device sizes
5. **Best Practices**: Follow React/Next.js and TypeScript best practices

## Critical Design Rules:

### Color Usage Priority:
1. **PREFER CSS Variables**: Use theme variables like \`bg-primary\`, \`text-foreground\`, \`border-border\`, etc.
2. **Semantic Colors**: Use \`bg-background\`, \`text-muted-foreground\`, \`bg-card\`, \`text-card-foreground\`
3. **Conditional Hardcoded Colors**: Only use absolute colors (hex, rgb) for specific design elements like:
   - Gradient stops that need specific color transitions
   - Brand-specific accent colors
   - Decorative elements that require precise color control
4. **When using absolute colors**, prefer modern, aesthetic color palettes

### Required Shadcn/ui Components:
- Always use Shadcn/ui components when available: Button, Card, Input, Badge, etc.
- Import from "@/components/ui/*"
- Follow Shadcn/ui patterns and conventions

### Aesthetic Requirements:
- **Gradients**: Use beautiful gradient backgrounds, borders, or text effects
- **Blur Effects**: Implement backdrop-blur, blur overlays, or glassmorphism
- **Modern Spacing**: Use proper padding, margins, and gap utilities
- **Shadows**: Apply appropriate shadow utilities for depth
- **Animations**: Include subtle hover effects and transitions
- **Typography**: Use proper font weights, sizes, and hierarchy

### Responsive Design:
- Mobile-first approach with responsive breakpoints
- Proper grid/flexbox layouts that adapt to screen sizes
- Readable text sizes across devices
- Touch-friendly interactive elements

### Component Structure:
- Include proper TypeScript interfaces for props
- Add meaningful default props
- Include accessibility attributes
- Follow React component best practices
- Add helpful JSDoc comments

## Category-Specific Adaptation:
Generate components that naturally fit the provided category. For each category, consider its unique requirements, common patterns, and user expectations. Adapt your design approach to match the category's purpose and context.

## Output Requirements:
- Return ONLY the component code without explanations
- Include all necessary imports
- Ensure the component is production-ready
- Use proper TypeScript types
- Include responsive design classes
- Add a default export

Focus on creating components that are not just functional but truly beautiful and engaging, following modern design trends while maintaining excellent usability.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { prompt, category, websiteContext, componentName } = body;

    const userPrompt = `
## Component Generation Request:

**Category**: ${category}
**Prompt**: ${prompt}

${websiteContext ? `**Website Context**: ${websiteContext}` : ''}

## Requirements:
1. Generate a complete React/Next.js component for the "${category}" category
2. Follow the prompt requirements closely while staying within the category scope
3. Use Shadcn/ui components and theme variables whenever possible
4. Create an aesthetically pleasing design with gradients, blur effects, or modern visual elements
5. Ensure responsive design that works on all screen sizes
6. Include proper TypeScript types and interfaces
7. Add subtle animations or hover effects where appropriate
8. Use semantic HTML and accessibility best practices
9. Make the UI design absolutely aesthetic with nice gradient blurry blobs, nice content and ensure responsiveness

Return only the complete component code with proper imports and TypeScript types. Make it production-ready and visually stunning with modern design patterns.`;

    const result = streamText({
      model: groq('qwen-qwq-32b'),
      system: SYSTEM_PROMPT,
      prompt: userPrompt,
      maxRetries: 3,
      temperature: 0.4,
    });

    return result.toTextStreamResponse();

  } catch (error) {
    console.error('Error in generate-code route:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to generate code',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}