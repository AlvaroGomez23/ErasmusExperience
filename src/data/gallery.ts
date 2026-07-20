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
  4:  { subtitle: 'Calm after the noise',        color: '#FFD700' },
  5:  { subtitle: 'Better Together',             color: '#00BCD4' },
  6:  { subtitle: 'São João in Porto',           color: '#FFB02E' },
  7:  { subtitle: 'The first goodbyes',          color: '#6C8EBF' },
  8:  { subtitle: 'The world in one place',      color: '#1B3A5C' },
  9:  { subtitle: 'World Cup Final',             color: '#E8112D' },
  10: { subtitle: 'The wrong side of the river', color: '#5E2333' },
  11: { subtitle: 'Last days, eternal memories', color: '#2196F3' },
};
