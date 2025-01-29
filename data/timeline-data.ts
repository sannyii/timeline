import events from './events.json';
import events_early1990 from './fromearlyto1990.json';
import events_1990to2000 from './from1990to2000.json';
import events_2001to2020 from './from2001to2020.json';
import events_2021tofuture from './from2021tofuture.json';

export const timelineData = {
  "title": {
    // "background": {
    //   "url": "/img/openai-research-floral-painting.webp",
    // },
    "media": {
      "url": "/img/openai-research-floral-painting.webp",
      // "caption": "Whitney Houston performing on her My Love is Your Love Tour in Hamburg.",
      // "credit": "flickr"
    },
    "text": {
      "headline": "人工智能进化日志<br/> 1987 - Future",
      "text": "记录生成式人工智能发展过程中的重要里程碑事件，包括大语言模型、图像生成、多模态AI等领域的突破性进展。这条时间线见证了AI技术从实验室走向大众应用的历程，展现了人工智能如何重塑我们的工作方式和生活方式。通过追溯这些关键时刻，我们不仅能够理解AI技术的演进轨迹，也能洞察未来发展趋势。"
    }
  },

  "events": [...events, ...events_early1990, ...events_1990to2000, ...events_2001to2020, ...events_2021tofuture]
};