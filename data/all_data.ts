import events from './timeline/events.json';
import events_early1990 from './timeline/fromearlyto1990.json';
import events_1990to2000 from './timeline/from1990to2000.json';
import events_2001to2020 from './timeline/from2001to2020.json';
import events_2021tofuture from './timeline/from2021tofuture.json';

export const all_events = [
  ...events,
  ...events_early1990,
  ...events_1990to2000,
  ...events_2001to2020,
  ...events_2021tofuture
]