export type PostSummary = {
  order: number;
  permalink: string;
  title: string;
  description: string;
  heroImage: string | null;
  publishedAt: string;
  readingTime: number;
  sourceUrl: string;
  tags: string[];
};

export const postsIndex: PostSummary[] = [
  {
    "order": 1,
    "permalink": "running-n8n-locally-with-ngrok",
    "title": "Running N8N Locally with Ngrok",
    "description": "Running N8N Locally with Ngrok If you've made it past the basics of N8N, this guide will show you how to run it locally and make it accessible via a public URL using a tunnel servi",
    "heroImage": "/medium-backup-blog/medium-assets/01/img-01.png",
    "publishedAt": "2025-10-27T07:24:44.000Z",
    "readingTime": 2,
    "sourceUrl": "https://medium.com/@mister.funable/running-n8n-locally-with-ngrok-734af69e1530",
    "tags": []
  },
  {
    "order": 2,
    "permalink": "how-not-to-work-with-local-files-in-n8n",
    "title": "How (Not) to Work with Local Files in N8N",
    "description": "How (Not) to Work with Local Files in N8N I was wondering if it was worth automating video uploads through n8n, so I decided to set up a quick test configuration. I used the Read/W",
    "heroImage": "/medium-backup-blog/medium-assets/02/img-01.png",
    "publishedAt": "2025-11-10T17:03:26.000Z",
    "readingTime": 2,
    "sourceUrl": "https://medium.com/@mister.funable/how-not-to-work-with-local-files-in-n8n-8c4545a3f2b2",
    "tags": []
  },
  {
    "order": 3,
    "permalink": "getting-started-with-meshtastic-on-heltec-v3-and-lilygo-t-beam",
    "title": "Getting Started with Meshtastic on Heltec V3 and LILYGO T-Beam",
    "description": "Getting Started with Meshtastic on Heltec V3 and LILYGO T Beam A friend gifted me a Heltec V3 , and it immediately pulled me into the Meshtastic rabbit hole. The idea of mesh netwo",
    "heroImage": "/medium-backup-blog/medium-assets/03/img-01.png",
    "publishedAt": "2025-11-14T21:14:19.000Z",
    "readingTime": 3,
    "sourceUrl": "https://radiohackers.com/getting-started-with-meshtastic-on-heltec-v3-and-lilygo-t-beam-e287f44df7b8",
    "tags": []
  },
  {
    "order": 4,
    "permalink": "meshtastic-questions-i-had-after-getting-started",
    "title": "Meshtastic Questions I Had After Getting Started",
    "description": "Meshtastic Questions I Had After Getting Started After flashing my first Meshtastic device, I had about a hundred questions. Here are the ones I actually figured out, organized fro",
    "heroImage": "/medium-backup-blog/medium-assets/04/img-01.png",
    "publishedAt": "2025-11-14T22:19:05.000Z",
    "readingTime": 6,
    "sourceUrl": "https://medium.com/@mister.funable/meshtastic-questions-i-had-after-getting-started-b0a634a39bae",
    "tags": []
  },
  {
    "order": 5,
    "permalink": "setting-up-a-local-meshtastic-message-forwarder",
    "title": "Setting Up a Local Meshtastic Message Forwarder",
    "description": "Setting Up a Local Meshtastic Message Forwarder After getting my Meshtastic devices running, I wanted to do more than just send messages through the app. The goal: set up a local f",
    "heroImage": "/medium-backup-blog/medium-assets/05/img-01.png",
    "publishedAt": "2025-11-14T23:07:25.000Z",
    "readingTime": 6,
    "sourceUrl": "https://medium.com/@mister.funable/setting-up-a-local-meshtastic-message-forwarder-c527bca2eb0e",
    "tags": []
  },
  {
    "order": 6,
    "permalink": "n8n-nodes-you-should-know-but-probably-dont",
    "title": "N8N Nodes You Should Know (But Probably Don’t)",
    "description": "N8N Nodes You Should Know (But Probably Don't) Everyone talks about AI agents and the amazing workflows that you can automate with N8N, which is cool. I get it. But can we talk abo",
    "heroImage": "/medium-backup-blog/medium-assets/06/img-01.png",
    "publishedAt": "2025-11-16T04:17:55.000Z",
    "readingTime": 8,
    "sourceUrl": "https://medium.com/@mister.funable/n8n-nodes-you-should-know-but-probably-dont-06d61b77c457",
    "tags": []
  },
  {
    "order": 7,
    "permalink": "sony-a6700-settings-for-unboxing-and-figure-videos",
    "title": "Sony A6700 Settings for Unboxing and Figure Videos",
    "description": "Sony A6700 Settings for Unboxing and Figure Videos I do unboxing videos and music videos of collectibles for fun. Nothing fancy, but I try to get as close as possible in quality to",
    "heroImage": "/medium-backup-blog/medium-assets/07/img-01.png",
    "publishedAt": "2025-11-17T05:53:09.000Z",
    "readingTime": 7,
    "sourceUrl": "https://medium.com/@mister.funable/sony-a6700-settings-for-unboxing-and-figure-videos-4ca3ddd4ecac",
    "tags": []
  },
  {
    "order": 8,
    "permalink": "fixing-n8n-docker-error-the-x-forwarded-for-issue-bonus",
    "title": "Fixing N8N Docker Error The X-Forwarded-For Issue + Bonus",
    "description": "Fixing N8N Docker Error: The X Forwarded For Issue + Bonus So you're running N8N locally in Docker, maybe conveniently for this post using Ngrok to expose it, and suddenly your log",
    "heroImage": "/medium-backup-blog/medium-assets/08/img-01.png",
    "publishedAt": "2025-11-18T06:00:06.000Z",
    "readingTime": 4,
    "sourceUrl": "https://medium.com/@mister.funable/fixing-n8n-docker-error-the-x-forwarded-for-issue-bonus-d6924694b09a",
    "tags": []
  },
  {
    "order": 9,
    "permalink": "getting-instagram-posts-with-n8n-the-simple-way-part-1",
    "title": "Getting Instagram Posts with N8N (The Simple Way Part 1)",
    "description": "Getting Instagram Posts with N8N (The Simple Way Part 1) So I wanted to automate sharing my Instagram posts on X through N8N. But the Meta Developer portal setup is confusing, luck",
    "heroImage": "/medium-backup-blog/medium-assets/09/img-01.png",
    "publishedAt": "2025-11-18T13:03:01.000Z",
    "readingTime": 5,
    "sourceUrl": "https://medium.com/@mister.funable/getting-instagram-posts-with-n8n-the-simple-way-part-1-c66cb5217054",
    "tags": []
  },
  {
    "order": 10,
    "permalink": "figma-body-alternatives-from-archetypes-to-art",
    "title": "Figma Body Alternatives From Archetypes to… Art",
    "description": "Figma Body Alternatives: From Archetypes to... Art Exchanging accessories between Figma figures is common. But what about swapping bodies? Are there alternatives to the standard Ar",
    "heroImage": "/medium-backup-blog/medium-assets/10/img-01.png",
    "publishedAt": "2025-11-20T03:02:07.000Z",
    "readingTime": 6,
    "sourceUrl": "https://medium.com/@mister.funable/figma-body-alternatives-from-archetypes-to-art-b02c4a78390b",
    "tags": []
  },
  {
    "order": 11,
    "permalink": "how-to-publish-your-n8n-template",
    "title": "How to Publish Your n8n Template",
    "description": "How to Publish Your n8n Template I submitted a template a few months ago (Auto Translate YouTube Video Content with Google Gemini AI) and I'm currently doing the process again for ",
    "heroImage": "/medium-backup-blog/medium-assets/11/img-01.png",
    "publishedAt": "2025-11-21T07:18:40.000Z",
    "readingTime": 4,
    "sourceUrl": "https://medium.com/@mister.funable/how-to-publish-your-n8n-template-375832d8efd7",
    "tags": []
  },
  {
    "order": 12,
    "permalink": "about-prompts-ai-and-playing-with-nanobana-pro",
    "title": "About Prompts, AI and Playing with Nanobana Pro",
    "description": "About Prompts, AI and Playing with Nanobana Pro I was writing about the design progression of the character I use to represent my stuff, but I found it more interesting to actually",
    "heroImage": "/medium-backup-blog/medium-assets/12/img-01.png",
    "publishedAt": "2025-11-22T02:02:16.000Z",
    "readingTime": 3,
    "sourceUrl": "https://medium.com/@mister.funable/about-prompts-ai-and-playing-with-nanobana-pro-3737479e6f53",
    "tags": []
  },
  {
    "order": 12,
    "permalink": "making-a-local-web-server-with-the-dfrobot-firebeetle-2-esp32-e-platformio",
    "title": "Making a Local Web Server with the DFRobot FireBeetle 2 ESP32-E PlatformIO",
    "description": "Making a Local Web Server with the DFRobot FireBeetle 2 ESP32 E and PlatformIO Without any sensors or screens, a small web server as first project seemed fine. If the Arduino IDE f",
    "heroImage": "/medium-backup-blog/medium-assets/12/img-01.png",
    "publishedAt": "2025-12-02T15:45:03.000Z",
    "readingTime": 4,
    "sourceUrl": "https://funable.medium.com/making-a-local-web-server-with-the-dfrobot-firebeetle-2-esp32-e-platformio-0bbe6abfa8ab",
    "tags": []
  },
  {
    "order": 13,
    "permalink": "my-favorite-figmas-2025",
    "title": "My Favorite Figmas — 2025",
    "description": "My Favorite Figmas 2025 With over 160+ Figmas, of course I have some favorites. I meant to do a video about this, but if I don't... at least I have this post! You can tell a",
    "heroImage": "/medium-backup-blog/medium-assets/13/img-01.png",
    "publishedAt": "2025-11-27T02:16:54.000Z",
    "readingTime": 2,
    "sourceUrl": "https://medium.com/@mister.funable/my-favorite-figmas-2025-a4dd70db6be4",
    "tags": []
  },
  {
    "order": 13,
    "permalink": "part-1-designing-a-mascotlogo-my-journey-with-ai-image-generation",
    "title": "Part 1 — Designing a MascotLogo My Journey With AI Image Generation",
    "description": "Part 1 Designing a Mascot/Logo: My Journey With AI Image Generation With the release of Nanobana Pro , I wanted to see how far I could push my little creative experiments. So far, ",
    "heroImage": "/medium-backup-blog/medium-assets/13/img-01.png",
    "publishedAt": "2025-12-05T10:37:56.000Z",
    "readingTime": 3,
    "sourceUrl": "https://funable.medium.com/part-1-designing-a-mascot-logo-my-journey-with-ai-image-generation-84c5e3921b05",
    "tags": []
  },
  {
    "order": 14,
    "permalink": "backing-up-n8n-when-the-data-lives-in-a-docker-volume",
    "title": "Backing Up N8N When the Data Lives in a Docker Volume",
    "description": "Backing Up N8N When the Data Lives in a Docker Volume I got a new MacBook and wanted my N8N instance to come with me. So I needed to move my workflows and credentials under n8n",
    "heroImage": "/medium-backup-blog/medium-assets/14/img-01.png",
    "publishedAt": "2025-12-06T18:11:55.000Z",
    "readingTime": 5,
    "sourceUrl": "https://funable.medium.com/backing-up-n8n-when-the-data-lives-in-a-docker-volume-62e200d79172",
    "tags": []
  },
  {
    "order": 15,
    "permalink": "boardgamegeek-player-resources-aids",
    "title": "BoardGameGeek Player Resources Aids",
    "description": "BoardGameGeek Player Resources / Aids I used to think BoardGameGeek (BGG) was basically: forums, deals, and a place to track your collection. Which is true. But it's also a big vau",
    "heroImage": "/medium-backup-blog/medium-assets/15/img-01.png",
    "publishedAt": "2025-12-21T22:43:52.000Z",
    "readingTime": 3,
    "sourceUrl": "https://funable.medium.com/boardgamegeek-player-resources-aids-b0a37d238455",
    "tags": []
  },
  {
    "order": 16,
    "permalink": "marvel-champions-resources",
    "title": "Marvel Champions Resources",
    "description": "Marvel Champions Resources I already have my own page where I dump links and notes, but I wanted something simpler I can share with friends who are just getting into the game. So h",
    "heroImage": "/medium-backup-blog/medium-assets/16/img-01.png",
    "publishedAt": "2025-12-21T22:57:54.000Z",
    "readingTime": 2,
    "sourceUrl": "https://funable.medium.com/marvel-champions-resources-7f6cef0bffe7",
    "tags": []
  },
  {
    "order": 17,
    "permalink": "sony-a6700-updated-settings-for-turntables-with-a-green-background",
    "title": "Sony A6700 Updated Settings for Turntables with a Green Background",
    "description": "Sony A6700 Updated Settings for Turntables with a Green Background A friend told me my footage looked green. And I was like: \"No way, it's pale. It's fine.\" Then I touched the Tint",
    "heroImage": "/medium-backup-blog/medium-assets/17/img-01.png",
    "publishedAt": "2025-12-27T21:46:35.000Z",
    "readingTime": 4,
    "sourceUrl": "https://funable.medium.com/sony-a6700-updated-settings-for-turntables-with-a-green-background-657dcd66d160",
    "tags": []
  },
  {
    "order": 18,
    "permalink": "a-silly-little-osascript-utility-that-types-notes-for-you",
    "title": "A Silly Little osascript Utility That Types Notes For You",
    "description": "A Silly Little osascript Utility That Types Notes For You I went down a rabbit hole the other day: \"How do people make a tiny local bot that can interact with a single chat app win",
    "heroImage": "/medium-backup-blog/medium-assets/18/img-01.png",
    "publishedAt": "2025-12-29T18:11:37.000Z",
    "readingTime": 4,
    "sourceUrl": "https://funable.medium.com/a-silly-little-osascript-utility-that-types-notes-for-you-dc5948a523d2",
    "tags": []
  },
  {
    "order": 19,
    "permalink": "how-to-design-your-medium-profile",
    "title": "How to Design Your Medium Profile",
    "description": "How to Customize Your Medium Profile Back when I made my main account, Medium profiles were pretty barebones, so I never bothered customizing it. But with this one (where I can wri",
    "heroImage": "/medium-backup-blog/medium-assets/19/img-01.png",
    "publishedAt": "2025-12-30T02:36:42.000Z",
    "readingTime": 2,
    "sourceUrl": "https://funable.medium.com/how-to-design-your-medium-profile-47d93edd7e9d",
    "tags": []
  },
  {
    "order": 20,
    "permalink": "getting-instagram-posts-with-n8n-the-simple-way-part-2-the-final-part",
    "title": "Getting Instagram Posts with N8N (The Simple Way Part 2 The Final Part)",
    "description": "Getting Instagram Posts with N8N (The Simple Way Part 2: The Final Part) And finally... this is the post where we actually get to Twitter (X). The workflow runs on a schedule, chec",
    "heroImage": "/medium-backup-blog/medium-assets/20/img-01.png",
    "publishedAt": "2025-12-31T16:43:34.000Z",
    "readingTime": 2,
    "sourceUrl": "https://funable.medium.com/getting-instagram-posts-with-n8n-the-simple-way-part-2-the-final-part-fdad1e999d74",
    "tags": []
  },
  {
    "order": 21,
    "permalink": "adding-multiple-instagram-accounts-to-your-n8n-automation",
    "title": "Adding Multiple Instagram Accounts to Your n8n Automation",
    "description": "Adding Multiple Instagram Accounts to Your n8n Automation Thanks to my canon event, I had to go multi account. For better or worse, you can have multiple Instagram accounts associa",
    "heroImage": "/medium-backup-blog/medium-assets/21/img-01.png",
    "publishedAt": "2026-01-01T19:02:31.000Z",
    "readingTime": 3,
    "sourceUrl": "https://funable.medium.com/adding-multiple-instagram-accounts-to-your-n8n-automation-772fd26af4a1",
    "tags": []
  },
  {
    "order": 22,
    "permalink": "from-zero-youtube-lessons-part-0",
    "title": "From Zero — YouTube Lessons Part 0",
    "description": "From Zero YouTube Lessons Part 0 Moving On and Starting Over My channel got removed, and I don't want this to be the \"I peaked in high school\" kind of post. I want to learn and",
    "heroImage": "/medium-backup-blog/medium-assets/22/img-01.png",
    "publishedAt": "2026-01-03T18:56:44.000Z",
    "readingTime": 4,
    "sourceUrl": "https://funable.medium.com/from-zero-youtube-lessons-part-0-822bb8a9c883",
    "tags": []
  },
  {
    "order": 23,
    "permalink": "from-zero-youtube-lessons-part-1",
    "title": "From Zero — YouTube Lessons Part 1",
    "description": "From Zero YouTube Lessons Part 1 The Hell Known As YouTube A series where I share what I've learned about growing a YouTube channel. Practical advice, personal takes, and lessons f",
    "heroImage": "/medium-backup-blog/medium-assets/23/img-01.png",
    "publishedAt": "2026-01-03T23:46:43.000Z",
    "readingTime": 5,
    "sourceUrl": "https://funable.medium.com/from-zero-youtube-lessons-part-1-efd9a93f2d1b",
    "tags": []
  },
  {
    "order": 24,
    "permalink": "part-3-designing-a-mascotlogo-a-fresh-start",
    "title": "Part 3— Designing a MascotLogo A Fresh Start",
    "description": "Part 3— Designing a Mascot/Logo: A Fresh Start Part 2 will be delayed because I had to make this, and it's way faster to do it right away. In this post I go through the \"creative",
    "heroImage": "/medium-backup-blog/medium-assets/24/img-01.png",
    "publishedAt": "2026-01-06T00:15:20.000Z",
    "readingTime": 7,
    "sourceUrl": "https://funable.medium.com/part-3-designing-a-mascot-logo-a-fresh-start-45f17906c0d2",
    "tags": []
  },
  {
    "order": 25,
    "permalink": "why-your-ai-images-look-worse-after-each-iteration",
    "title": "Why Your AI Images Look Worse After Each Iteration",
    "description": "Why Your AI Images Look Worse After Each Iteration And What To Do About It So I've been playing with AI image generation for a while now. And I've been facing something really anno",
    "heroImage": "/medium-backup-blog/medium-assets/25/img-01.png",
    "publishedAt": "2026-01-13T03:02:51.000Z",
    "readingTime": 4,
    "sourceUrl": "https://funable.medium.com/why-your-ai-images-look-worse-after-each-iteration-b66abc24fced",
    "tags": []
  },
  {
    "order": 26,
    "permalink": "uploading-instagram-videos-to-youtube-with-n8n",
    "title": "Uploading Instagram Videos to YouTube with n8n",
    "description": "Uploading Instagram Videos to YouTube with n8n After the Instagram to Twitter workflow, this one was kind of inevitable. Most of my latest content goes to Instagram first since I c",
    "heroImage": "/medium-backup-blog/medium-assets/26/img-01.png",
    "publishedAt": "2026-01-17T18:48:09.000Z",
    "readingTime": 4,
    "sourceUrl": "https://funable.medium.com/uploading-instagram-videos-to-youtube-with-n8n-6df5ad3c2523",
    "tags": []
  },
  {
    "order": 27,
    "permalink": "side-notes-1-what-yu-gi-oh-taught-me-about-leadership",
    "title": "Side Notes #1 What Yu-Gi-Oh Taught Me About Leadership",
    "description": "Side Notes 1: What Yu Gi Oh Taught Me About Leadership A series of random thoughts and perceptions I had a recent realization: making people \"shine,\" as one of my clients put it, i",
    "heroImage": "/medium-backup-blog/medium-assets/27/img-01.png",
    "publishedAt": "2026-01-23T04:49:49.000Z",
    "readingTime": 7,
    "sourceUrl": "https://funable.medium.com/side-notes-1-what-yu-gi-oh-taught-me-about-leadership-cd13634fbde7",
    "tags": []
  },
  {
    "order": 28,
    "permalink": "claude-code-part-1-do-you-actually-need-this-if-you-have-cursor",
    "title": "Claude Code (Part 1) Do You Actually Need This If You Have Cursor",
    "description": "Claude Code (Part 1): Do You Actually Need This If You Have Cursor? What It Is, How It Fits Next to Cursor, and How to Track Usage Cursor is great inside the editor. Claude Code is",
    "heroImage": "/medium-backup-blog/medium-assets/28/img-01.png",
    "publishedAt": "2026-01-24T01:57:00.000Z",
    "readingTime": 7,
    "sourceUrl": "https://funable.medium.com/claude-code-part-1-do-you-actually-need-this-if-you-have-cursor-30b902668de4",
    "tags": []
  },
  {
    "order": 29,
    "permalink": "backing-up-my-medium-posts",
    "title": "Backing Up My Medium Posts",
    "description": "Backing Up My Medium Posts Because I Don't Trust Platforms Anymore Shout out to YouTube, for teaching me that platforms can just... decide things. TL;DR : code here. I've been writ",
    "heroImage": "/medium-backup-blog/medium-assets/29/img-01.png",
    "publishedAt": "2026-02-15T23:45:04.000Z",
    "readingTime": 3,
    "sourceUrl": "https://funable.medium.com/backing-up-my-medium-posts-4fa884d9c138",
    "tags": [
      "medium-api",
      "medium-backup"
    ]
  },
  {
    "order": 30,
    "permalink": "substack-as-a-medium-alternative",
    "title": "Substack as a Medium Alternative",
    "description": "Substack as a Medium Alternative Not big enough to worry about reach, but accessibility is one thing I want ](https://miro.medium.com/1 9t2HkgMtdtPR0AwhZbmeDQ.png) I had on my back",
    "heroImage": "/medium-backup-blog/medium-assets/30/img-01.html",
    "publishedAt": "2026-02-16T23:11:01.000Z",
    "readingTime": 2,
    "sourceUrl": "https://funable.medium.com/substack-as-a-medium-alternative-96480741598e",
    "tags": [
      "substack",
      "substack-vs-medium",
      "medium-api",
      "automation"
    ]
  },
  {
    "order": 31,
    "permalink": "n8n-instagram-backups-with-metadata-to-google-drive",
    "title": "N8N Instagram Backups with Metadata to Google Drive",
    "description": "N8N Instagram Backups with Metadata to Google Drive Descriptions and tags matter. I've just published a new template! I've been doubling down on Instagram since my last channel rem",
    "heroImage": "/medium-backup-blog/medium-assets/31/img-01.png",
    "publishedAt": "2026-02-18T00:51:01.000Z",
    "readingTime": 2,
    "sourceUrl": "https://funable.medium.com/n8n-instagram-backups-with-metadata-to-google-drive-f0167bf0af28",
    "tags": [
      "n8n",
      "n8n-workflow",
      "instagram-automation",
      "instagram-backup"
    ]
  }
];