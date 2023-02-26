export interface Board {
  id: string;
  title: string;
  description: string;
  status: string;
}

export const enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
