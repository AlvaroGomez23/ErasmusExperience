export interface GalleryPhoto {
  url: string;
  caption?: string;
}

export interface GalleryWeek {
  week: number;
  subtitle: string;
  color: string;
  photos: GalleryPhoto[];
}

export const weekMeta: Record<number, { subtitle: string; color: string }> = {
  1:  { subtitle: 'Landing Week',                color: '#88CE02' },
  2:  { subtitle: 'Exploring the city',          color: '#FF6B35' },
  3:  { subtitle: 'Amarante local parties',      color: '#E91E8C' },
  4:  { subtitle: 'New people, new friends',     color: '#FFD700' },
  5:  { subtitle: 'The Tâmega River',            color: '#00BCD4' },
  6:  { subtitle: 'Adventures around the area',  color: '#9C27B0' },
  7:  { subtitle: 'Art and creativity',          color: '#FF4444' },
  8:  { subtitle: 'Portuguese cuisine',          color: '#FF9800' },
  9:  { subtitle: 'Nature and mountains',        color: '#4CAF50' },
  10: { subtitle: 'Almost there',                color: '#7C3AED' },
  11: { subtitle: 'Last days, eternal memories', color: '#2196F3' },
};
