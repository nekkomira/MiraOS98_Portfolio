# miraOS 98 — Portfolio

A Windows 98-themed personal portfolio website.

## Project Structure

```
miraOS/
  index.html          ← main page
  css/
    style.css         ← all styles
  js/
    main.js           ← all JavaScript (includes embedded images)
  audio/
    tomorrow.mp3      ← BTS - Tomorrow
    swim-good.mp3     ← Frank Ocean - Swim Good
    sky-full-of-stars.mp3  ← Coldplay - A Sky Full of Stars
  assets/
    mira.png          ← profile photo (optional, already base64 embedded)
  README.md
```

## Step 1 — Add your MP3 files

Place your three MP3 files in the `audio/` folder with these exact names:
- `tomorrow.mp3`
- `swim-good.mp3`
- `sky-full-of-stars.mp3`

## Step 2 — Update main.js to use MP3 files

In `js/main.js`, find the `tracks` array (search for `const tracks`) and update it:

```javascript
const tracks = [
  { artist: "BTS",         track: "Tomorrow",            dur: [4,36], src: "audio/tomorrow.mp3" },
  { artist: "Frank Ocean", track: "Swim Good",           dur: [3,42], src: "audio/swim-good.mp3" },
  { artist: "Coldplay",    track: "A Sky Full of Stars", dur: [4,27], src: "audio/sky-full-of-stars.mp3" },
];
```

Then find `function ytLoad` and replace the whole ytLoad/ytStop/cdToggle section with:

```javascript
let audioPlayer = new Audio();

function ytLoad(autoplay) {
  const t = tracks[cdIdx];
  if (!t.src) return;
  audioPlayer.src = t.src;
  const total = t.dur[0]*60 + t.dur[1];
  audioPlayer.currentTime = Math.round(total * cdProgress / 100);
  if (autoplay) audioPlayer.play();
}

function ytStop() {
  audioPlayer.pause();
  audioPlayer.src = '';
}
```

## Step 3 — Deploy to GitHub Pages (free)

1. Create a GitHub account at https://github.com if you don't have one
2. Click **New Repository** → name it `portfolio` → set to **Public**
3. Clone the repo:
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   ```
4. Copy all files from this folder into the cloned repo
5. Push to GitHub:
   ```bash
   cd portfolio
   git add .
   git commit -m "initial deploy"
   git push origin main
   ```
6. Go to repo **Settings** → **Pages** → Source: `main` branch, `/ (root)` → **Save**
7. Live at: `https://YOUR_USERNAME.github.io/portfolio`

## Updating the site

```bash
git add .
git commit -m "update"
git push origin main
```

GitHub Pages rebuilds in ~30 seconds.

## Step 4 — Coming next: Clippy RAG chatbot

The Clippy chatbot will be added as `js/clippy.js` using transformers.js for
in-browser semantic search over your portfolio content. No backend, no API costs.
