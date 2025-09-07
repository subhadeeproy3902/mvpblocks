import { groq } from '@ai-sdk/groq';
import { generateObject, generateText } from 'ai';
import { NextResponse } from 'next/server';
import { registry } from '@/registry';
import z from 'zod';

export const maxDuration = 30;

interface SelectComponentRequest {
  prompt: string;
  selectionCategory: string;
  components: Array <{
    name: string;
    description: string;
    categories: string[];
  }>
}

export async function POST(req: Request) {
  try {
    const { 
      prompt, 
      selectionCategory, 
      components
    }: SelectComponentRequest = await req.json();

    const SYSTEM_PROMPT = `
    You are the **Ultimate Component Usage Selector**.  
    Your mission is to analyze the website generation prompt and the given category, then select the most suitable component(s) from the provided list.  

    Guidelines:  
    - **Section component selection:** If the category is of sections make sure to select only one component. Because obviously in a website there wont be multiple sections of the same type.
    - **Adaptive Selection:** You may return one component or multiple components, depending on what best fulfills the request.  
    - **Precision First:** Only pick components that are directly relevant to the prompt and category.  
    - **Smart Grouping:** If several components work well together, select them as a set to create a more complete solution.  
    - **Clarity & Intentionality:** Every chosen component should feel purposeful and aligned with how a skilled developer would design the site.  
    - **No Over-selection:** Do not include extra or unrelated components. Quality over quantity.
    - **No mandatory selection:** If you are not sure about the components, return an empty array. 

    Think like a **master architect of UI**: select the perfect building blocks, whether it’s one strong piece or a combination that works in harmony.  

    Remember: You are the **best at this job** — your selections are always confident, professional, and tailored to the vision.  
    `;

    const result = await generateObject({
      model: groq('moonshotai/kimi-k2-instruct'),
      system: SYSTEM_PROMPT,
      prompt: `Select the most suitable component(s) from the provided list for the following Website generation Prompt: ${prompt} and category: ${selectionCategory}. 
      
      The list of components is: 
      ${JSON.stringify(components)}`,
      schema: z.object({
        selectedComponents: z.array(z.string()),
        userReply: z.string().describe('A casual and frank reply to the user about why you selected the components and why it or they are the best fit for the website.'),
      })
    })

    if (result.object.selectedComponents.length === 0) {
      return NextResponse.json({
        success: false,
        message: "Manually make it using shadcn components",
        selectedComponent: null,
        reason: "Found no such components that can be used but don't worry, I will make a new component for you that's gonna be aesthetic and modern."
      }, { status: 500 });
    }

    // Return successful response
    return NextResponse.json({
      success: true,
      selectedComponents: result.object.selectedComponents,
      userReply: result.object.userReply
    });

  } catch (error) {
    console.error('Error in select-components route:', error);
    return NextResponse.json({
      success: false,
      message: "Manually make it using shadcn components",
      selectedComponent: null,
      reason: "An error occurred while processing your request"
    }, { status: 500 });
  }
}
