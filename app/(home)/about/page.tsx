export const dynamic = 'force-static';
export const revalidate = false;

import CTA from '@/components/shared/cta';
import Faqs from '@/components/shared/faq';
import HowToUse from '@/components/about/how-to-use';
import AboutUsComponent from '@/components/about';

export default function AboutUsPage() {
  return (
    <>
      <AboutUsComponent />
      <CTA />
      <Faqs />
    </>
  );
}
