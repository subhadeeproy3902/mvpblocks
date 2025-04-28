import { MongoClient } from "mongodb";
import { Resend } from "resend";

const uri = process.env.MONGODB_URI!;
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendReleaseEmails() {
  const client = new MongoClient(uri, {
    appName: "blocks-waitlist",
  });

  try {
    await client.connect();
    const database = client.db("waitlist");
    const collection = database.collection("waitlist-users");

    const users = await collection.find({}).toArray();

    for (const user of users) {
      await resend.emails.send({
        from: `Mvpblocks <blocks@mvp-subha.me>`,
        to: user.email,
        subject: "Mvpblocks is Now Live! 🚀",
        html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MVPBlocks is Live!</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
</head>

<body style="font-family: 'DM Sans', sans-serif; line-height: 1.6; color: #f0f0f0; margin: 0; padding: 1rem;">
    <div style="max-width: 600px; margin: 20px auto; background-color: #1a1a1a; border-radius: 12px; overflow: hidden; box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); border: 1px solid rgba(255, 255, 255, 0.05);">
        <!-- Header -->
        <div style="background-color: #0c0c0c; padding: 30px 20px; text-align: center; position: relative; overflow: hidden;">
            <!-- Gradient Blur Effect -->
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 70% 50%, rgba(236, 72, 153, 0.2) 0%, rgba(236, 72, 153, 0.05) 50%, transparent 70%); filter: blur(40px);"></div>

            <!-- Logo and Title -->
            <div style="position: relative; z-index: 2; display: inline-block;">
                <h1 style="margin: 0; font-size: 28px; font-weight: bold; color: #ec4a60; display: inline-block; vertical-align: middle;">MVPBlocks is Live! 🚀</h1>
            </div>
        </div>

        <!-- Main Content -->
        <div style="background-color: #1e1e1e; padding: 30px 20px; text-align: center;">
            <p style="font-size: 18px; margin: 0 0 25px; color: #f0f0f0; line-height: 1.6;">
                The wait is over! We're excited to announce that MVPBlocks is now live.
            </p>

            <!-- Highlight Box -->
            <div style="background: rgba(236, 72, 153, 0.1); border: 1px solid rgba(236, 72, 153, 0.2); border-radius: 8px; padding: 20px; margin: 25px 0;">
                <p style="color: #ec4a60; font-weight: bold; margin: 0;">Get started with MVPBlocks today!</p>
            </div>

            <!-- CTA Button -->
            <div style="text-align: center; margin: 30px 0;">
                <a href="https://mvpblocks.vercel.app/"
                   style="display: inline-block; background-color: #ec4a60; color: #ffffff; text-decoration: none; padding: 14px 45px; border-radius: 8px; font-weight: bold; transition: all 0.3s ease;">
                    Launch MVPBlocks
                </a>
            </div>

            <p style="font-size: 14px; color: #a1a1aa; margin: 30px 0 0; text-align: center;">
                Thank you for being part of our journey from the beginning.
            </p>
        </div>

        <!-- Footer -->
        <div style="background-color: #0c0c0c; padding: 25px; text-align: center; font-size: 14px; color: #71717a; border-top: 1px solid rgba(255, 255, 255, 0.05);">
            <p style="margin: 5px 0;">&copy; 2025 MVPBlocks. All rights reserved.</p>
            <p style="margin: 5px 0;">Building MVPs faster, one component at a time.</p>
            <div style="margin-top: 15px; text-align: center;">
                <a href="https://github.com/subhadeeproy3902/mvpblocks" style="color: #ec4a60; text-decoration: none; margin: 0 10px; display: inline-block;">GitHub</a>
                <a href="https://x.com/mvp_Subha" style="color: #ec4a60; text-decoration: none; margin: 0 10px; display: inline-block;">Twitter</a>
                <a href="https://mvpblocks.vercel.app/" style="color: #ec4a60; text-decoration: none; margin: 0 10px; display: inline-block;">Website</a>
            </div>
        </div>
    </div>
</body>

</html>`,
      });
    }

    return { success: true, message: `Sent emails to ${users.length} users` };
  } catch (error) {
    console.error("Error sending release emails:", error);
    return { success: false, error: "Failed to send release emails" };
  } finally {
    await client.close();
  }
}

const result = await sendReleaseEmails();
if (result.success) {
  console.log(result.message);
} else {
  console.error(result.error);
}
