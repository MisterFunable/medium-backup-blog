<!-- Source: https://funable.medium.com/n8n-instagram-backups-with-metadata-to-google-drive-f0167bf0af28 -->
<!-- Published: 2026-02-17T20:51:01 -->
<!-- Tags: n8n, n8n-workflow, instagram-automation, instagram-backup -->
# N8N Instagram Backups with Metadata to Google Drive

### Descriptions and tags matter.

<!-- Image Source: https://miro.medium.com/1*kZcVrAV2p8PX8EhL-aD0Pg.png | Local: images/31/img-01.png -->
![](images/31/img-01.png)

I've just [published a new template](https://n8n.io/workflows/13317-back-up-instagram-videos-to-google-drive-with-json-metadata-catalog/)! I've been doubling down on Instagram since my last channel removal (yeah... it happened again). I learned a few new tricks from that experience. But long story short - if the worst were to happen to my Instagram account, what then?

I realized I needed a backup system, something that would save me a lot of effort. I had to manually reupload everything and then manually search for the data again based on the titles... such a pain. If that ever happens again, I'm automating the whole process.

Right now, I feel like I'm 0% focused on content and 100% focused on survival. Luckily, my workflow is relatively streamlined, so I can get things done without too much effort. Still, I haven't been able to fully catch up or complete a proper restore (at least not as much as possible).

But enough rambling!

---

## How it works

This workflow provides a complete backup solution for your Instagram video content with intelligent caption parsing:

- Fetches your Instagram account ID and videos (VIDEO and REELS types)

- Parses captions into structured fields:

> _**Title**: Everything before the first hashtag
**Description**: Everything after the first hashtag (includes all tags)
**Tag List**: All hashtags extracted as an array
**Description** Full: Complete original caption text_

- Downloads videos in maximum available quality from Instagram

- Uploads videos to a designated Google Drive folder

- Creates/updates a JSON metadata file with all video details

- Prevents duplicates using n8n Data Tables with account-level filtering

---

## Closing Thoughts

<!-- Image Source: https://miro.medium.com/1*BZDR9fLcNiTG65c0mFh21Q.png | Local: images/31/img-02.png -->
![Adding a bigger thumbnail because Substack allows this size as thumbnail](images/31/img-02.png)

I'm glad that I made this, I'm still exploring a similar YT solution, I have a draft but I'll continue working on it.

I made quite a few things here and there, but all the efforts are quite distributed, so I haven't been able to write as much as I would it wanted it.

Ah before I forget, the missing part for this workflow would be an improved version with the cover image downloaded as well.

And that's for another time!
