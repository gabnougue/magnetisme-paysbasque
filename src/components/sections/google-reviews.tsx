'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

/**
 * Interface pour un avis Google
 * Compatible avec Places API (New) v1 après transformation
 */
interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
  relative_time_description: string;
  author_url?: string;
}

/**
 * Interface pour la réponse de l'API /api/google-reviews
 */
interface GoogleReviewsResponse {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

interface GoogleReviewsProps {
  placeId?: string;
  maxReviews?: number;
}

export function GoogleReviews({ placeId, maxReviews = 6 }: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [placeInfo, setPlaceInfo] = useState<{ name: string; rating: number; totalReviews: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Lien pour laisser un avis Google
  // Format: https://search.google.com/local/writereview?placeid=VOTRE_PLACE_ID
  const writeReviewUrl = placeId
    ? `https://search.google.com/local/writereview?placeid=${placeId}`
    : '#';

  useEffect(() => {
    if (!placeId) return;

    const fetchReviews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/google-reviews?placeId=${placeId}`);
        if (response.ok) {
          const data: GoogleReviewsResponse = await response.json();
          setReviews(data.reviews?.slice(0, maxReviews) || []);
          setPlaceInfo({
            name: data.name,
            rating: data.rating,
            totalReviews: data.user_ratings_total,
          });
        } else {
          const errorData = await response.json();
          console.error('API error:', errorData);
          setError(errorData.error || 'Impossible de charger les avis');
        }
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Erreur lors du chargement des avis');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placeId, maxReviews]);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600 animate-pulse">Chargement des avis Google...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="inline-block p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500">
            Vous pouvez tout de même laisser un avis en cliquant ci-dessous
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header avec note moyenne */}
      {placeInfo && (
        <div className="text-center mb-8 p-6 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-8 h-8 ${
                    i < Math.round(placeInfo.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-3xl font-bold text-gray-900">{placeInfo.rating.toFixed(1)}</span>
          </div>
          <p className="text-gray-700 font-medium">
            Basé sur <span className="font-bold text-primary-600">{placeInfo.totalReviews}</span> avis Google
          </p>
        </div>
      )}

      {reviews.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                {/* En-tête avec photo et nom */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{review.author_name}</p>
                    <p className="text-sm text-gray-500">{review.relative_time_description}</p>
                  </div>
                </div>

                {/* Étoiles */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Texte de l'avis */}
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Aucun avis disponible pour le moment.</p>
        </div>
      )}

      {/* Bouton pour laisser un avis */}
      <div className="text-center">
        <a
          href={writeReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2"
        >
          <Button size="lg" className="gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Laisser un avis sur Google
          </Button>
        </a>
        {placeId && (
          <p className="text-sm text-gray-500 mt-4">
            Vos avis Google m'aident à améliorer mes services
          </p>
        )}
      </div>
    </div>
  );
}
