export interface Comment {
    name: string;
    timestamp: string;
    body: string;
    replies?: Comment[];
  }