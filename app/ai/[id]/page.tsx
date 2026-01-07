import AiGenerationComponent from '@/components/ai/AiGenerationComponent';

export default async function AIGenPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <AiGenerationComponent id={id} />;
}
