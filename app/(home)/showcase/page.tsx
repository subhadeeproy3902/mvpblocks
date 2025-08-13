import ShowcaseComponent from "./_components/ShowcaseComponent";

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function ShowcasePage() {
  return (
    <ShowcaseComponent />
  );
}
