import { groq } from '@ai-sdk/groq';
import { generateObject } from 'ai';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  generateHarmonizedColors,
  generateBackground,
  generateCard,
  generatePopover,
  generateBorder,
  generateInput,
  calculateForegroundColor,
  generateRing,
} from '@/utils/colors';

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const result = await generateObject({
      model: groq('moonshotai/kimi-k2-instruct'),
      schema: z.object({
        primaryHue: z.number().min(0).max(360),
      }),
      system: `You are a Color Palette Generator, an expert shadcn/ui theme creator. Your job is to generate a primary color hue that defines the main brand identity of the entire website. The hue must be chosen based on the given website vibe (e.g., modern, playful, corporate, minimal, futuristic, elegant, bold, calming). Return only an integer between 0 and 360, representing the hue on the HSL color wheel (0 = red, 120 = green, 240 = blue, etc.). Do not return text or explanations—only the number.`,
      prompt: `${prompt}. Return only the number in JSON format.`,
    });

    console.log(result)

    const primaryHue = result.object.primaryHue;

    // Generate harmonized colors using the AI-provided hue
    const lightColors = generateHarmonizedColors(primaryHue, false);
    const darkColors = generateHarmonizedColors(primaryHue, true);

    // Generate complete theme configuration
    const themeConfig = {
      light: {
        background: generateBackground(lightColors.primary, false),
        foreground: "240 10% 3.9%",
        card: generateCard(lightColors.primary, false),
        cardForeground: "240 10% 3.9%",
        popover: generatePopover(lightColors.primary, false),
        popoverForeground: "240 10% 3.9%",
        primary: lightColors.primary,
        primaryForeground: calculateForegroundColor(lightColors.primary),
        secondary: lightColors.secondary,
        secondaryForeground: calculateForegroundColor(lightColors.secondary),
        muted: lightColors.muted || generateBackground(lightColors.primary, false),
        mutedForeground: lightColors["muted-foreground"] || "240 3.8% 46.1%",
        accent: lightColors.accent,
        accentForeground: calculateForegroundColor(lightColors.accent),
        destructive: lightColors.destructive,
        destructiveForeground: calculateForegroundColor(lightColors.destructive),
        border: generateBorder(lightColors.primary, false),
        input: generateInput(lightColors.primary, false),
        ring: generateRing(lightColors.primary),
        sidebar: generateCard(lightColors.primary, false),
        sidebarForeground: "240 10% 3.9%",
        sidebarPrimary: lightColors.primary,
        sidebarPrimaryForeground: calculateForegroundColor(lightColors.primary),
        sidebarAccent: lightColors.accent,
        sidebarAccentForeground: calculateForegroundColor(lightColors.accent),
        sidebarBorder: generateBorder(lightColors.primary, false),
        sidebarRing: generateRing(lightColors.primary),
        radius: "0.5rem",
      },
      dark: {
        background: generateBackground(darkColors.primary, true),
        foreground: "0 0% 98%",
        card: generateCard(darkColors.primary, true),
        cardForeground: "0 0% 98%",
        popover: generatePopover(darkColors.primary, true),
        popoverForeground: "0 0% 98%",
        primary: darkColors.primary,
        primaryForeground: calculateForegroundColor(darkColors.primary),
        secondary: darkColors.secondary,
        secondaryForeground: calculateForegroundColor(darkColors.secondary),
        muted: darkColors.muted || generateBackground(darkColors.primary, true),
        mutedForeground: darkColors["muted-foreground"] || "0 0% 63.9%",
        accent: darkColors.accent,
        accentForeground: calculateForegroundColor(darkColors.accent),
        destructive: darkColors.destructive,
        destructiveForeground: calculateForegroundColor(darkColors.destructive),
        border: generateBorder(darkColors.primary, true),
        input: generateInput(darkColors.primary, true),
        ring: generateRing(darkColors.primary),
        sidebar: generateCard(darkColors.primary, true),
        sidebarForeground: "0 0% 98%",
        sidebarPrimary: darkColors.primary,
        sidebarPrimaryForeground: calculateForegroundColor(darkColors.primary),
        sidebarAccent: darkColors.accent,
        sidebarAccentForeground: calculateForegroundColor(darkColors.accent),
        sidebarBorder: generateBorder(darkColors.primary, true),
        sidebarRing: generateRing(darkColors.primary),
        radius: "0.5rem",
        shadowColor: "0 0% 0%",
      },
    };

    return NextResponse.json(themeConfig, {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Color palette generation error:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate color palette',
        message:
          error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
}
