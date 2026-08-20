import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Zod server-side validation
    const validation = contactFormSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid input data provided.",
          details: validation.error.format(),
        },
        { status: 400 }
      );
    }

    const {
      fullName,
      email,
      phone,
      companyName,
      serviceRequired,
      budgetRange,
      preferredContact,
      message,
      honeypot,
    } = validation.data;

    // 2. Honeypot check (bot prevention)
    if (honeypot && honeypot.length > 0) {
      // Silently accept without processing spam
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // 3. Optional Resend Email Dispatch (if RESEND_API_KEY is configured in env)
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "leads@adpulsemedia.in";

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "AdPulse Leads <onboarding@resend.dev>",
            to: [toEmail],
            subject: `🔥 New Lead from ${fullName} [${serviceRequired}]`,
            html: `
              <h2>New Consultation Request on AdPulse Media</h2>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Company / Project:</strong> ${companyName || "N/A"}</p>
              <p><strong>Service Required:</strong> ${serviceRequired}</p>
              <p><strong>Budget Range:</strong> ${budgetRange || "N/A"}</p>
              <p><strong>Preferred Contact:</strong> ${preferredContact || "WhatsApp"}</p>
              <p><strong>Project Message:</strong></p>
              <blockquote>${message}</blockquote>
            `,
          }),
        });
      } catch (emailErr) {
        console.error("Failed to send email notification:", emailErr);
      }
    }

    // Log lead in server logs
    console.log("[AdPulse Lead Captured]:", {
      timestamp: new Date().toISOString(),
      fullName,
      phone,
      email,
      serviceRequired,
      budgetRange,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been received successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API /contact error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Server error while processing your request. Please try again or WhatsApp us.",
      },
      { status: 500 }
    );
  }
}
