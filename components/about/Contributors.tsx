import { githubData } from '@/constants/github-data';

export default function Contributors() {
  const contributors = githubData.contributors;

  return (
    <div className="my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {contributors.map((contributor) => (
          <a
            key={contributor.id}
            href={contributor.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:border-primary"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full ring-2 ring-border transition-all group-hover:ring-primary">
                <img
                  src={contributor.avatar_url}
                  alt={`${contributor.login}'s avatar`}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                {contributor.name}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-2">
                @{contributor.login}
              </p>

              <div className="mt-auto pt-3 border-t w-full">
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="h-4 w-4 text-muted-foreground"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    {contributor.contributions} contribution{contributor.contributions !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
