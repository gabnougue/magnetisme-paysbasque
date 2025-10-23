import { NextResponse } from 'next/server';

/**
 * API Route pour récupérer les avis Google Places (New API v1)
 *
 * Configuration requise:
 * 1. Obtenir une clé API Google Maps sur https://console.cloud.google.com
 * 2. Activer l'API "Places API (New)"
 * 3. Ajouter la clé dans .env.local: GOOGLE_MAPS_API_KEY=votre_clé
 * 4. Obtenir votre Place ID depuis https://developers.google.com/maps/documentation/places/web-service/place-id
 *
 * Documentation: https://developers.google.com/maps/documentation/places/web-service/place-details
 */

interface ReviewAuthorAttribution {
  displayName: string;
  uri: string;
  photoUri: string;
}

interface ReviewText {
  text: string;
  languageCode: string;
}

interface PlacesAPIReview {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: ReviewText;
  originalText: ReviewText;
  authorAttribution: ReviewAuthorAttribution;
  publishTime: string;
}

interface PlacesAPIResponse {
  name: string;
  id: string;
  displayName: {
    text: string;
    languageCode: string;
  };
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesAPIReview[];
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const placeId = searchParams.get('placeId');
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!placeId || !apiKey) {
    return NextResponse.json(
      { error: 'Missing placeId or API key' },
      { status: 400 }
    );
  }

  try {
    // Nouvelle API Places (v1)
    // Endpoint: https://places.googleapis.com/v1/places/{PLACE_ID}
    // Ajouter languageCode=fr pour avoir les avis et dates en français
    const url = `https://places.googleapis.com/v1/places/${placeId}?languageCode=fr`;

    // Les champs à récupérer (FieldMask)
    const fields = 'id,displayName,rating,userRatingCount,reviews';

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': fields,
        'Accept-Language': 'fr', // Demander les avis en français
      },
      next: {
        revalidate: 3600, // Cache pendant 1 heure
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error('Google Places API (New) error:', errorData);
      return NextResponse.json(
        {
          error: `Google Places API error: ${res.status}`,
          details: errorData
        },
        { status: res.status }
      );
    }

    const data: PlacesAPIResponse = await res.json();

    // Transformation des données pour compatibilité avec le composant
    const transformedReviews = (data.reviews || []).map((review) => ({
      author_name: review.authorAttribution.displayName,
      rating: review.rating,
      // Utiliser originalText pour avoir le texte dans la langue originale (français)
      text: review.originalText?.text || review.text.text,
      profile_photo_url: review.authorAttribution.photoUri,
      relative_time_description: review.relativePublishTimeDescription,
      author_url: review.authorAttribution.uri,
      time: new Date(review.publishTime).getTime() / 1000, // Convertir en timestamp Unix
    }));

    return NextResponse.json({
      name: data.displayName.text,
      rating: data.rating || 0,
      user_ratings_total: data.userRatingCount || 0,
      reviews: transformedReviews,
    });
  } catch (err: any) {
    console.error('Error fetching Google reviews:', err);
    return NextResponse.json(
      { error: 'Server error fetching Google reviews', message: err.message },
      { status: 500 }
    );
  }
}
