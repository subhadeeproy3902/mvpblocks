// lib/github.ts
export type Contributor = {
    login: string;
    avatar_url: string;
    html_url: string;
    contributions: number;
    name?: string;
    bio?: string;
    role?: string;
  };
  
  
  export const fetchContributors = async (): Promise<Contributor[]> => {
    try {
      const res = await fetch(
        'https://api.github.com/repos/subhadeeproy3902/mvpblocks/contributors',
        {
          headers: {
            Accept: 'application/vnd.github+json',
          },
        }
      );
  
      if (!res.ok) {
        throw new Error('Failed to fetch contributors');
      }
  
      const data: Contributor[] = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching contributors:', error);
      return [];
    }
  };
  