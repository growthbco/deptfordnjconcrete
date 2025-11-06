/**
 * Utility function to generate enhanced location page content
 */

import locationDetails from '../content/location-details.json';

export function getLocationDetails(slug: string) {
  return locationDetails[slug as keyof typeof locationDetails] || null;
}

export function generateLocationContent(location: { name: string; fullName: string; slug: string; state?: string }, details: any) {
  if (!details) {
    return {
      landmarks: [],
      majorRoads: [],
      trafficPatterns: 'Standard traffic patterns typical of Gloucester County communities.',
      weatherImpacts: 'Standard New Jersey climate with freeze-thaw cycles requiring proper concrete mix design and installation timing.',
      soilConditions: 'Mixed soil conditions typical of the area. Proper site assessment required for each project.',
      neighborhoods: 'Mix of residential neighborhoods and commercial areas.',
      localFeatures: 'Growing community with residential and commercial development.'
    };
  }
  return details;
}

