import { ColorConfig } from "@/types/theme";

export function generateHarmonizedColors(
  baseHue: number,
  isDarkMode: boolean = false
): ColorConfig {
  const complementaryHue = (baseHue + 180) % 360;
  const analogous1 = (baseHue + 30) % 360;
  const analogous2 = (baseHue - 30 + 360) % 360;

  // Calculate harmonized saturations with randomization
  const primarySat = 60 + Math.random() * 20; // 60-80%
  const primaryLightLight = 40 + Math.random() * 40; // 40-90%
  const primaryDarkLight = 30 + Math.random() * 30; // 30-60%
  const primary = `${baseHue.toFixed(2)} ${primarySat.toFixed(
    2
  )}% ${primaryLightLight.toFixed(2)}%`;
  const primaryDark = `${baseHue.toFixed(2)} ${primarySat.toFixed(
    2
  )}% ${primaryDarkLight.toFixed(2)}%`;

  // Secondary colors with dynamic saturation
  const secondarySatLight = Math.max(10, Math.random() * primarySat * 0.4); // 10-32%
  const secondarySatDark = Math.min(90, primarySat + Math.random() * 20); // primarySat-(primarySat+20)%

  // Accent colors with slightly higher saturation
  const accentSatLight = Math.max(
    15,
    secondarySatLight * (1 + Math.random() * 0.5)
  );
  const accentSatDark = Math.min(
    95,
    secondarySatDark * (1 + Math.random() * 0.3)
  );

  // Dynamic lightness values
  const lightModeLightness = 90 + Math.random() * 10; // 90-100%
  const darkModeLightness = Math.random() * 15; // 0-15%

  // Generate light mode colors
  const secondaryLight = `${analogous1.toFixed(2)} ${secondarySatLight.toFixed(
    2
  )}% ${lightModeLightness.toFixed(2)}%`;
  const accentLight = `${analogous2.toFixed(2)} ${accentSatLight.toFixed(
    2
  )}% ${lightModeLightness.toFixed(2)}%`;

  // Generate dark mode colors
  const secondaryDark = `${analogous1.toFixed(2)} ${secondarySatDark.toFixed(
    2
  )}% ${darkModeLightness.toFixed(2)}%`;
  const accentDark = `${analogous2.toFixed(2)} ${accentSatDark.toFixed(
    2
  )}% ${darkModeLightness.toFixed(2)}%`;

  // Muted colors based on secondary
  const mutedSatLight = secondarySatLight * (0.5 + Math.random() * 0.3); // 50-80% of secondary saturation
  const mutedSatDark = secondarySatDark * (0.4 + Math.random() * 0.3); // 40-70% of secondary saturation
  const mutedLightLight = lightModeLightness * (0.9 + Math.random() * 0.1); // 90-100% of light mode lightness
  const mutedDarkLight = darkModeLightness * (1.2 + Math.random() * 0.3); // 120-150% of dark mode lightness

  const mutedLight = `${analogous1.toFixed(2)} ${mutedSatLight.toFixed(
    2
  )}% ${mutedLightLight.toFixed(2)}%`;
  const mutedDark = `${analogous1.toFixed(2)} ${mutedSatDark.toFixed(
    2
  )}% ${mutedDarkLight.toFixed(2)}%`;

  // Border and input colors based on secondary with reduced saturation
  const borderSatLight = secondarySatLight * (0.7 + Math.random() * 0.2);
  const borderSatDark = secondarySatDark * (0.6 + Math.random() * 0.2);
  const borderLight = `${analogous1.toFixed(2)} ${borderSatLight.toFixed(
    2
  )}% ${(lightModeLightness * 0.9).toFixed(2)}%`;
  const borderDark = `${analogous1.toFixed(2)} ${borderSatDark.toFixed(2)}% ${(
    darkModeLightness * 1.2
  ).toFixed(2)}%`;

  // Destructive color with random variation in the red range
  const destructiveHue = Math.random() * 10; // 0-10 (red range)
  const destructiveSat = 70 + Math.random() * 20; // 70-90%
  const destructiveLight = 45 + Math.random() * 25; // 45-70%
  const destructive = `${destructiveHue.toFixed(2)} ${destructiveSat.toFixed(
    2
  )}% ${destructiveLight.toFixed(2)}%`;

  // Calculate foreground colors dynamically
  const colors: ColorConfig = {
    // Base colors
    primary,
    "primary-dark": primaryDark,
    secondary: secondaryLight,
    "secondary-dark": secondaryDark,
    accent: accentLight,
    "accent-dark": accentDark,
    destructive,
    muted: mutedLight,
    "muted-dark": mutedDark,
    border: borderLight,
    "border-dark": borderDark,
    input: borderLight,
    "input-dark": borderDark,
    ring: primary,

    // Foreground colors
    "primary-foreground": calculateForegroundColor(primary),
    "primary-dark-foreground": calculateForegroundColor(primary),
    "secondary-foreground": calculateForegroundColor(secondaryLight),
    "secondary-dark-foreground": calculateForegroundColor(secondaryLight),
    "accent-foreground": calculateForegroundColor(accentLight),
    "accent-dark-foreground": calculateForegroundColor(accentLight),
    "destructive-foreground": calculateForegroundColor(destructive),
    "muted-foreground": `${analogous1.toFixed(2)} ${(
      mutedSatLight * 1.5
    ).toFixed(2)}% ${(lightModeLightness * 0.4).toFixed(2)}%`,
    "muted-dark-foreground": `${analogous1.toFixed(2)} ${(
      mutedSatDark * 1.2
    ).toFixed(2)}% ${Math.min(98, mutedDarkLight * 4).toFixed(2)}%`,
  };

  return colors;
}

export function generateBackground(
  primary: string,
  isDarkMode: boolean
): string {
  if (!primary) return isDarkMode ? "20 14.3% 4.1%" : "0 0% 100%";

  const [h, s, l] = primary.split(" ").map(parseFloat);
  if (isNaN(h) || isNaN(s) || isNaN(l)) {
    return isDarkMode ? "20 14.3% 4.1%" : "0 0% 100%";
  }

  return isDarkMode
    ? `${h.toFixed(2)} ${Math.max(s * 0.2, 5).toFixed(2)}% ${Math.max(
        l * 0.15,
        2
      ).toFixed(2)}%`
    : `${h.toFixed(2)} ${Math.min(s * 0.1, 5).toFixed(2)}% ${Math.min(
        100,
        100
      ).toFixed(2)}%`;
}

export function generateCard(primary: string, isDarkMode: boolean): string {
  if (!primary) return isDarkMode ? "24 9.8% 10%" : "0 0% 100%";

  const [h, s, l] = primary.split(" ").map(parseFloat);
  if (isNaN(h) || isNaN(s) || isNaN(l)) {
    return isDarkMode ? "24 9.8% 10%" : "0 0% 100%";
  }

  return isDarkMode
    ? `${h.toFixed(2)} ${Math.max(s * 0.2, 10).toFixed(2)}% ${Math.max(
        l * 0.15,
        10
      ).toFixed(2)}%`
    : `${h.toFixed(2)} ${Math.min(s * 0.1, 5).toFixed(2)}% ${Math.min(
        100,
        100
      ).toFixed(2)}%`;
}

export function generatePopover(primary: string, isDarkMode: boolean): string {
  if (!primary) return isDarkMode ? "0 0% 9%" : "0 0% 100%";

  const [h, s, l] = primary.split(" ").map(parseFloat);
  if (isNaN(h) || isNaN(s) || isNaN(l)) {
    return isDarkMode ? "0 0% 9%" : "0 0% 100%";
  }

  return isDarkMode
    ? `${h.toFixed(2)} ${Math.max(s * 0.15, 8).toFixed(2)}% ${Math.max(
        l * 0.12,
        9
      ).toFixed(2)}%`
    : `${h.toFixed(2)} ${Math.min(s * 0.08, 4).toFixed(2)}% ${Math.min(
        100,
        100
      ).toFixed(2)}%`;
}

export function generateBorder(primary: string, isDarkMode: boolean): string {
  if (!primary) return isDarkMode ? "240 3.7% 15.9%" : "240 5.9% 90%";

  const [h, s] = primary.split(" ").map(parseFloat);
  if (isNaN(h) || isNaN(s)) {
    return isDarkMode ? "240 3.7% 15.9%" : "240 5.9% 90%";
  }

  return isDarkMode
    ? `${h} ${Math.max(s * 0.15, 3.7).toFixed(1)}% 15.9%`
    : `${h} ${Math.max(s * 0.15, 5.9).toFixed(1)}% 90%`;
}

export function generateInput(primary: string, isDarkMode: boolean): string {
  if (!primary) return isDarkMode ? "240 3.7% 15.9%" : "240 5.9% 90%";

  const [h, s] = primary.split(" ").map(parseFloat);
  if (isNaN(h) || isNaN(s)) {
    return isDarkMode ? "240 3.7% 15.9%" : "240 5.9% 90%";
  }

  return isDarkMode
    ? `${h} ${Math.max(s * 0.15, 3.7).toFixed(1)}% 15.9%`
    : `${h} ${Math.max(s * 0.15, 5.9).toFixed(1)}% 90%`;
}

export function generateRing(primary: string): string {
  return primary || "346.8 77.2% 49.8%";
}

export function calculateForegroundColor(hslString: string): string {
  if (!hslString) return "0 0% 100%";
  const [, , l] = hslString.split(" ").map((v) => parseFloat(v));
  return l > 52 ? "240 10% 3.9%" : "0 0% 98%";
}