import { TopNav } from "@/components/ai/TopNav";

export default function AIGenPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNav />
      <main className="h-screen overflow-hidden pt-12 flex relative">{children}</main>
    </>
  );
}