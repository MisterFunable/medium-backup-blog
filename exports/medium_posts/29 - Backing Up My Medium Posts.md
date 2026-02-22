<!-- Source: https://funable.medium.com/backing-up-my-medium-posts-4fa884d9c138 -->
<!-- Published: 2026-02-15T19:45:04 -->
<!-- Tags: medium-api, medium-backup -->
# Backing Up My Medium Posts

### Because I Don't Trust Platforms Anymore

Shout out to YouTube, for teaching me that platforms can just... decide things.

<!-- Image Source: https://miro.medium.com/1*KR8Y70cqSG3YQyzCrM0qiA.png | Local: images/29/img-01.png -->
![](images/29/img-01.png)

> _**TL;DR**: [code here](https://github.com/MisterFunable/medium-backup-blog/tree/main)._

I've been writing on Medium for a while now, and while I like the editor and the reach, I kept thinking: what if I want to share something without asking people to make an account? What if Medium changes their paywall rules again? What if I just want my own backup?

So I made a simple script to automatically fetch Medium posts, convert them to Markdown, download the images, and host them on my own static site. For free. With full control.

---

## The Problem

Medium has some friction points:

- **Free article limits**: Readers hit a wall after 3–5 stories per month

- **Account requirements:** Not everyone wants to sign up

- **Paywall changes:** Policies shift, and your content gets caught in it

- **No real backup:** Export exists, but it's manual and messy

I wanted an alternative that's accessible and automatic.

---

## The Solution: Medium API (RapidAPI) + Astro

<!-- Image Source: https://misterfunable.github.io/medium-backup-blog/ | Local: images/29/img-02.html -->
![[Blog Link](images/29/img-02.html)](https://miro.medium.com/1*2qkwnkoBaQRo9-Wy98Y5vg.png)

Here's the flow:

```scss
Medium Platform
    ↓ (RapidAPI)
Python script fetches posts
    ↓
Converts to Markdown + downloads images
    ↓
Syncs to Astro static site
    ↓
Deploys to GitHub Pages (free hosting)
```

---

## What You Need

- **Medium API via RapidAPI:** Free tier gives you 150 calls/month (enough for testing)

- **Python:** For the fetch script

---

## How It Works

1. **Fetch posts** from Medium using their API

2. **Convert to Markdown** with full metadata (title, date, tags)

3. **Download images locally** so you're not dependent on Medium's CDN

4. **Sync to Astro** which generates a fast static site

5. **Deploy to GitHub Pages** for free hosting

The whole thing runs with `make fetch && make build`. That's it.

---

## Why This Matters

- **Content ownership:** My writing stays mine, even if Medium changes policies or pricing.

- **No paywalls:** Readers can access everything without hitting limits.

- **Speed:** Static sites load instantly. No Medium bloat.

- **Custom design:** I can make it look however I want (still working on that part).

- **Backups:** Git version control means nothing gets lost.

---

## The Setup (Quick Version)

Download the [repository](https://github.com/MisterFunable/medium-backup-blog/tree/main) and execute:

```bash
# 1. Install dependencies
pip install medium-api
cd site && npm install

# 2. Get a RapidAPI key (free tier works)
export RAPIDAPI_KEY="your-key"

# 3. Fetch and build
make fetch
make build

# 4. Preview
make preview
```

Visit `http://localhost:4321/` and your posts are there.

To deploy, just push to GitHub and enable GitHub Pages. Free hosting, done.

---

## Costs

The free tier (150 API calls/month) is enough for monthly backups. Each fetch uses 1–3 calls per post, so if you have 30 posts, that's ~90 calls. You're good.

If you want daily syncs or automation, the Pro plan is $4.99/month for 2,500 calls. Still way cheaper than paying for hosting elsewhere.

---

## What's Next

This is just backup and hosting, but the Medium API can do way more:

- Track engagement over time (claps, responses)

- Aggregate content from specific publications

- Build custom analytics dashboards

- Cross-post to Dev.to, Hashnode, WordPress automatically

- Research trends and topics at scale

I'm exploring some of those, but for now I just wanted my posts in a place I control. Mission accomplished.

---

## Resources

- [Medium API Documentation](https://mediumapi.com/)

- [RapidAPI Hub](https://rapidapi.com/nishujain199719-vgIfuFHZxVZ/api/medium2/)

- [Astro Docs](https://docs.astro.build/)

And that's it. Now I have backups, no paywalls, and peace of mind.

Time will tell if I actually maintain this or if it just becomes another abandoned project, but at least the automation is there.
