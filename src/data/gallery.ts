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
  1:  { subtitle: 'First Steps in Amarante',     color: '#88CE02' },
  2:  { subtitle: 'Exploring the City',          color: '#FF6B35' },
  3:  { subtitle: 'New People, New Friends',     color: '#E91E8C' },
  4:  { subtitle: 'Cultural Immersion',          color: '#FFD700' },
  5:  { subtitle: 'The Tâmega River',            color: '#00BCD4' },
  6:  { subtitle: 'Adventures Around',           color: '#9C27B0' },
  7:  { subtitle: 'Art & Creativity',            color: '#FF4444' },
  8:  { subtitle: 'Portuguese Cuisine',          color: '#FF9800' },
  9:  { subtitle: 'Nature & Mountains',          color: '#4CAF50' },
  10: { subtitle: 'Almost There',                color: '#7C3AED' },
  11: { subtitle: 'Last Days, Eternal Memories', color: '#2196F3' },
};
