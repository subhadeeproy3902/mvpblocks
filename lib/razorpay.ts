import { toast } from 'sonner';

interface PaymentArgs {
  email: string;
  amount: number;
  currency: string;
  title?: string;
  productId?: string;
  onSuccess: () => void;
  downloadUrl: string;
}

export const initiatePayment = async ({
  email,
  amount,
  currency,
  title = 'Digital Product',
  productId,
  onSuccess,
  downloadUrl,
}: PaymentArgs) => {
  const loadRazorpay = () => {
    return new Promise<void>((resolve, reject) => {
      if ((window as any).Razorpay) return resolve();

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () =>
        reject(new Error('Failed to load Razorpay script'));
      document.body.appendChild(script);
    });
  };

  try {
    await loadRazorpay();

    const res = await fetch('/api/razorpay/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, currency }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || 'Payment initialization failed');
    }

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY!,
      amount: order.amount,
      currency: order.currency,
      name: title,
      description: 'Digital Download Purchase',
      order_id: order.id,
      prefill: { email },
      theme: { color: '#fc215f' },
      handler: async (response: any) => {
        try {
          // Send confirmation email with secure download link
          await fetch('/api/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email,
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              productId,
              productName: title,
              amount: amount,
              currency,
              downloadUrl: downloadUrl,
            }),
          });

          toast.success('Payment Successful!', {
            description: 'Check your email for download instructions',
          });

          onSuccess();
        } catch (error) {
          console.error('Post-payment processing failed:', error);
          toast.error('Payment successful but email failed', {
            description: 'Contact support with your order ID',
          });
          onSuccess();
        }
      },
      modal: {
        ondismiss: () => {
          toast.info('Payment cancelled');
        },
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error('Payment error:', error);
    toast.error('Payment Failed', {
      description: error instanceof Error ? error.message : 'Please try again',
    });
    throw error;
  }
};
