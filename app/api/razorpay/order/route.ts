import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY!,
  key_secret: process.env.RAZORPAY_SECRET!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.amount || !body.currency) {
      return NextResponse.json(
        { error: "Amount and currency are required" },
        { status: 400 }
      );
    }

    const amountInPaise = Math.round(Number(body.amount) * 100);

    const options = {
      amount: amountInPaise.toString(),
      currency: body.currency.toUpperCase(),
      receipt: `order_${Date.now()}`,
      payment_capture: 1,
    };

    const response = await razorpay.orders.create(options);

    return NextResponse.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err: any) {
    console.error("Razorpay order creation error:", err);
    return NextResponse.json(
      {
        error: "Failed to create order",
        details: err.error?.description || err.message,
      },
      { status: 500 }
    );
  }
}