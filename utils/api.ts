import type { GetCodeResponse, GetCodeErrorResponse } from '@/types/api/get-code';

export async function getColorPalette(
  text: string
) {
  const response = await fetch('/api/ai/color-palette', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: text }),
  });

  const cssText = await response.text();
  console.log('css text', cssText);
  return cssText;
}

export async function getRegistryComponents(
  selectionCategory: string,
) {
  const response = await fetch('/api/ai/registry?category=' + selectionCategory, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  return response.json();
}

export async function getComponentCode(
  componentName: string,
) {
  const response = await fetch('/api/ai/get-code?name=' + componentName, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  const json = await response.json() as GetCodeResponse | GetCodeErrorResponse;
  if ('error' in json) {
    return null;
  }
  return json;
}

export async function selectComponents(
  prompt: string,
  selectionCategory: string,
  components: Array<{
    name: string;
    description: string;
    categories: string[];
  }>
) {
  const response = await fetch('/api/ai/select-components', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      prompt, 
      selectionCategory, 
      components 
    }),
  });

  return response.json();
}