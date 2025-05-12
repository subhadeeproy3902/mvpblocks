import MultiStepForm from "@/components/ui/multi-step-form";

export default function MultiStepFormPreview() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <MultiStepForm 
        onSubmit={(data) => {
          console.log("Form submitted:", data);
        }}
      />
    </div>
  );
}
