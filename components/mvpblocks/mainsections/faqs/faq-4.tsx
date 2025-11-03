'use client';
import { useState } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Webhook } from 'lucide-react';
import Image from 'next/image';

const data = [
  {
    id: '1',
    question: 'How can I start using your amazing service?',
    answer:
      'Getting started is easy! Simply sign up for an account, complete your profile, and you can begin using our services immediately. No credit card required for the first 14 days.',
  },
  {
    id: '2',
    question: 'Which payment methods are supported on your platform?',
    answer:
      'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are securely processed through encrypted channels.',
  },
  {
    id: '3',
    question: 'Can I cancel my subscription anytime I want?',
    answer:
      'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you will continue to have access until the end of your billing period.',
  },
  {
    id: '4',
    question: 'Do you provide enterprise custom solutions for businesses?',
    answer:
      'Absolutely! We provide custom enterprise solutions with dedicated support, advanced features, and personalized onboarding. Contact our sales team to discuss your specific requirements.',
  },
  {
    id: '5',
    question: 'How secure is user data on your platform?',
    answer:
      'We take security seriously. Our platform uses bank-level encryption, regular security audits, and complies with industry standards. Your data is stored in secure SOC 2 certified data centers.',
  },
  {
    id: '6',
    question: 'Is a completely free trial currently available now?',
    answer:
      'Yes! We offer a 14-day free trial with full access to all features. No credit card is required to sign up for the trial.',
  },
  {
    id: '7',
    question: 'Do you provide customer support for all users?',
    answer:
      'Absolutely! Our dedicated support team is available 24/7 via chat and email to help you resolve any issues.',
  },
  {
    id: '8',
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer:
      'Yes, you can change your subscription plan at any time from your account settings. Your billing will be adjusted automatically.',
  },
  {
    id: '9',
    question: 'Do you integrate with any popular third-party tools?',
    answer:
      'We integrate with popular platforms like Slack, Google Workspace, and Zapier to streamline your workflow.',
  },
  {
    id: '10',
    question: 'What happens after the free trial period ends?',
    answer:
      'When your trial ends, you can choose a subscription plan to continue using the service. Your data will remain saved for 30 days.',
  },
  {
    id: '11',
    question: 'Do you offer refunds for unsatisfied subscribed users?',
    answer:
      "Yes, we offer a 7-day money-back guarantee if you're not satisfied with the service. Please contact support for assistance.",
  },
  {
    id: '12',
    question: 'Is my information shared with any third parties?',
    answer:
      'No, we do not share or sell your personal information. Your privacy and data security are our top priorities.',
  },
];

export default function Faq4() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleValueChange = (value: string[]) => {
    setOpenItems(value);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        easeInOut,
      },
    },
  };

  return (
    <section className="relative flex w-full flex-col items-center justify-center py-5">
      <div className="container m-auto flex min-h-screen w-full flex-col items-center justify-center p-3 lg:p-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="via-primary bg-linear-to-br from-transparent to-transparent bg-clip-text pb-2 text-3xl leading-snug font-medium text-transparent sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Find quick answers to common questions about our services and
            features.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 w-full border-b pb-10"
        >
          <Accordion
            type="multiple"
            value={openItems}
            onValueChange={handleValueChange}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {data.map((faq) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`p-1 ${
                  openItems.includes(faq.id)
                    ? 'bg-primary/20 border-primary/30 shadow-[0_0_20px_3px_rgba(244,63,94,0.15)]'
                    : 'from-primary/5 hover:border-primary/30 hover:bg-linear-to-bl hover:shadow-[0_0_20px_3px_rgba(244,63,94,0.15)]'
                } h-fit rounded-md border`}
              >
                <AccordionItem
                  value={faq.id}
                  className={`bg-background group rounded-sm border! px-5 ${
                    openItems.includes(faq.id)
                      ? 'border-primary/30 from-primary/10 bg-linear-to-t'
                      : 'hover:border-primary/30'
                  } shadow-none! transition-all duration-700`}
                >
                  <AccordionTrigger className="group cursor-pointer hover:no-underline [&>svg]:hidden">
                    <div className="flex w-full items-center justify-between">
                      <span
                        className={`text-left text-lg font-medium ${
                          openItems.includes(faq.id)
                            ? 'text-primary'
                            : 'group-hover:text-primary'
                        } transition-all duration-700`}
                      >
                        {faq.question}
                      </span>
                      <div className="ml-4 shrink-0">
                        <AnimatePresence>
                          <motion.div
                            key="minus"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Webhook
                              className={`size-6 ${
                                openItems.includes(faq.id)
                                  ? 'animate-spin'
                                  : 'group-hover:animate-spin'
                              } text-primary`}
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    className={`border-t border-dashed ${
                      openItems.includes(faq.id)
                        ? 'border-primary/50'
                        : 'group-hover:border-primary/50'
                    } pt-4`}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="from-primary m-auto flex h-60 w-full flex-col items-center justify-center rounded-md bg-linear-to-br p-6 text-white"
        >
          <h3 className="mb-2 text-3xl">Still have questions ?</h3>
          <p className="mb-4">
            Can&apos;t find the answer you&apos;re looking for ? Please chat
            with our friendly team.
          </p>
          <Button
            size="lg"
            className="mt-5 cursor-pointer rounded-sm bg-white! px-8 py-6 font-semibold text-black! transition-all duration-700 hover:scale-105 hover:px-14 hover:shadow-lg"
          >
            Get in Touch
          </Button>
        </motion.div>
      </div>
      <div className="fixed top-0 left-0 -z-10 m-auto flex h-screen w-full items-center justify-center">
        <Image
          src="https://i.postimg.cc/j5dW4vFd/Mvpblocks.webp"
          alt="logo"
          width={5000}
          height={5000}
          className="opacity-5 grayscale-100"
        />
      </div>
    </section>
  );
}
