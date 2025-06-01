import MultiStepForm from '@/components/ui/multi-step-form';

export default function MultiStepFormPreview() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <MultiStepForm
        onSubmit={(data) => {
          console.log('Form submitted:', data);
        }}
      />
    </div>
  );
}
