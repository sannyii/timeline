export interface TimelineEvent {
  media?: {
    url: string;
    caption?: string;
    credit?: string;
    thumbnail?: string;
  };
  background?: {
    url: string;
  };
  start_date: {
    year: string;
    month?: string;
    day?: string;
    hour?: string;
    minute?: string;
    second?: string;
    millisecond?: string;
    format?: string;
    display_date?: string;
  };
  text: {
    headline: string;
    text: string;
  };
}

export interface TimelineData {
  title: {
    media?: {
      url: string;
      caption?: string;
      credit?: string;
      thumbnail?: string;
    };
    background?: {
      url: string;
    };
    text: {
      headline: string;
      text: string;
    };
  };
  events: TimelineEvent[];
}
