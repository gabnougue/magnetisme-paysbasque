import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Validation du schéma
const contactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(3),
  message: z.string().min(10),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validation des données
    const validatedData = contactSchema.parse(body);

    // Vérification que les variables d'environnement sont configurées
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      console.error('Missing RESEND_API_KEY or CONTACT_EMAIL environment variable');
      return NextResponse.json(
        { success: false, error: 'Configuration email manquante' },
        { status: 500 }
      );
    }

    // Envoi de l'email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Site Web <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL,
      replyTo: validatedData.email,
      subject: `Nouveau message: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3d7c5c; border-bottom: 2px solid #3d7c5c; padding-bottom: 10px;">
            Nouveau message depuis le site web
          </h2>

          <div style="background-color: #f0f7f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Nom:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${validatedData.email}" style="color: #3d7c5c;">${validatedData.email}</a></p>
            <p style="margin: 8px 0;"><strong>Téléphone:</strong> <a href="tel:${validatedData.phone}" style="color: #3d7c5c;">${validatedData.phone}</a></p>
            <p style="margin: 8px 0;"><strong>Objet:</strong> ${validatedData.subject}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #3d7c5c;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #3d7c5c; white-space: pre-wrap;">
${validatedData.message}
            </div>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

          <p style="color: #6b7280; font-size: 12px; text-align: center;">
            Ce message a été envoyé depuis le formulaire de contact du site web.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, error: 'Erreur lors de l\'envoi du message' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json({
      success: true,
      message: 'Message envoyé avec succès',
    });
  } catch (error) {
    console.error('Error in contact form:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Données invalides', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
