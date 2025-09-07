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
  jsonToCss,
} from '@/utils/colors';
import { ThemeConfig } from '@/types/theme';

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const result = await generateObject({
      model: groq('moonshotai/kimi-k2-instruct'),
      schema: z.object({
        primaryHue: z.number().min(0).max(360),
      }),
      system: `You are a Color Palette Generator, an expert shadcn/ui theme creator. Your job is to generate a primary color hue that defines the main brand identity of the entire website. The hue must be chosen based on the given website vibe (e.g., modern, playful, corporate, minimal, futuristic, elegant, bold, calming). Return only an integer between 0 and 360, representing the hue on the HSL color wheel (0 = red, 120 = green, 240 = blue, etc.). Do not return text or explanations—only the number.`,
      prompt: `Website vibe: ${prompt}. 
      
      Return only the primary hue number in JSON format.`,
    });
    
    const primaryHue = result.object.primaryHue;

    // Generate harmonized colors using the AI-provided hue
    const colors = generateHarmonizedColors(primaryHue);

    // Generate complete theme configuration
    const themeConfig: ThemeConfig = {
      light: {
        background: generateBackground(colors.primary, false),
        foreground: "240 10% 3.9%",
        card: generateCard(colors.primary, false),
        cardForeground: "240 10% 3.9%",
        popover: generatePopover(colors.primary, false),
        popoverForeground: "240 10% 3.9%",
        primary: colors.primary,
        primaryForeground: calculateForegroundColor(colors.primary),
        secondary: colors.secondary,
        secondaryForeground: calculateForegroundColor(colors.secondary),
        muted: colors.muted || generateBackground(colors.primary, false),
        mutedForeground: "240 3.8% 46.1%",
        accent: colors.accent,
        accentForeground: calculateForegroundColor(colors.accent),
        destructive: colors.destructive,
        destructiveForeground: calculateForegroundColor(colors.destructive),
        border: generateBorder(colors.primary, false),
        input: generateInput(colors.primary, false),
        ring: generateRing(colors.primary),
        sidebar: generateCard(colors.primary, false),
        sidebarForeground: "240 10% 3.9%",
        sidebarPrimary: colors.primary,
        sidebarPrimaryForeground: calculateForegroundColor(colors.primary),
        sidebarAccent: colors.accent,
        sidebarAccentForeground: calculateForegroundColor(colors.accent),
        sidebarBorder: generateBorder(colors.primary, false),
        sidebarRing: generateRing(colors.primary),
        radius: "0.5rem",
        shadowColor: "0 0% 0%",
      },
      dark: {
        background: generateBackground(colors.primary, true),
        foreground: "0 0% 98%",
        card: generateCard(colors.primary, true),
        cardForeground: "0 0% 98%",
        popover: generatePopover(colors.primary, true),
        popoverForeground: "0 0% 98%",
        primary: colors["primary-dark"],
        primaryForeground: calculateForegroundColor(colors["primary-dark"]),
        secondary: colors["secondary-dark"],
        secondaryForeground: calculateForegroundColor(colors["secondary-dark"]),
        muted: colors["muted-dark"],
        mutedForeground: "0 0% 63.9%",
        accent: colors["accent-dark"],
        accentForeground: calculateForegroundColor(colors["accent-dark"]),
        destructive: colors.destructive,
        destructiveForeground: "0 0% 98%",
        border: generateBorder(colors.primary, true),
        input: generateInput(colors.primary, true),
        ring: generateRing(colors.primary),
        sidebar: generateCard(colors.primary, true),
        sidebarForeground: "0 0% 98%",
        sidebarPrimary: colors["primary-dark"],
        sidebarPrimaryForeground: calculateForegroundColor(colors["primary-dark"]),
        sidebarAccent: colors["accent-dark"],
        sidebarAccentForeground: calculateForegroundColor(colors["accent-dark"]),
        sidebarBorder: generateBorder(colors.primary, true),
        sidebarRing: generateRing(colors.primary),
        radius: "0.5rem",
        shadowColor: "0 0% 0%",
      },
    };

    const cssText = jsonToCss(themeConfig);

    return new NextResponse(cssText, {
      status: 200,
      headers: { 'Content-Type': 'text/css; charset=utf-8' },
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
