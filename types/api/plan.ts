import z from "zod";

export const planSchema = z.object({
  planSteps: z.array(
    z.object({
      task: z.string().describe('To be done section/task'),
      description: z.string().describe('Purpose and goal of this section/task'),
    }),
  ),
  categories: z
    .array(z.string())
    .describe(
      'Array of single-word categories relevant to the website that can be used to generate the website.',
    ),
  colorThemePrompt: z
    .string()
    .describe('Text prompt for another AI to generate the website color theme'),
});