export function loadScript(
  src: string,
  async = true,
  defer = true,
): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;

    script.onload = () => resolve();
    script.onerror = (error) => reject(error);

    document.body.appendChild(script);
  });
}
