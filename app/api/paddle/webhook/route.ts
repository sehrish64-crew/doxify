import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (body.event_type === 'transaction.completed') {
      const data = body.data;
      const customerEmail = data.customer_email;
      const customerName = data.customer_name || 'Customer';
      const planName = data.custom_data?.plan || 'Premium Plan';
      const amount = data.details?.totals?.total ? `£${data.details.totals.total}` : '£0.00';
      
      // ✅ Email bhejo
      await resend.emails.send({
        from: 'Doxsify <onboarding@resend.dev>', // Sandbox mode
        to: [customerEmail],
        subject: '🎉 Payment Successful - Doxsify',
        html: `<h1>Thank you ${customerName}!</h1>
               <p>Your ${planName} payment of ${amount} was successful.</p>
               <a href="https://doxsify.com/dashboard">Go to Dashboard</a>`,
      });
      
      console.log('✅ Email sent to:', customerEmail);
    }
    
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('❌ Error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}