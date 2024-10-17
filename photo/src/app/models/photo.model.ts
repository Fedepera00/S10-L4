export interface Photo {
  id: number;
  photographer: string;
  src: {
    medium: string;
    large: string;
    original: string;
  };
}
