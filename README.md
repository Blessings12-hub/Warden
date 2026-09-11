# Warden — 3D Adventure Starter

A phone-first, open-world 3D adventure game starter built with Three.js (via CDN — no build step required).

## What's inside
- `index.html` — the entire game (HTML + CSS + JS in one file)

## How to deploy
1. Create a new GitHub repository
2. Upload `index.html` using GitHub's "Add file → Upload files" web uploader
3. Connect the repo to Vercel (or your existing Vercel project) — it will auto-deploy on every push, no build configuration needed
4. Open the deployed URL on your phone

## Current features
- Open 3D area ("The Hills") with a touch joystick, attack, and dodge controls
- Scripted intro cutscene (camera pan + text)
- Shrine-driven quest: defeat 3 shades to open a portal
- A second zone ("The Ashen Ruins") with tougher enemies, reachable through the portal, with a return portal back

## Next steps to keep building
- Add real character animation: export a rigged model + animations from mixamo.com (free), then load it with Three.js's GLTFLoader in place of the placeholder capsule
- Add a save/checkpoint system so quest progress persists on reload
- Copy the "zone2" block in index.html to add a third explorable area
- Swap placeholder geometric enemies/rocks for custom or purchased 3D assets as the project grows

## Editing without a terminal
Since this is a single static HTML file with no build step, you can edit it directly in GitHub's web-based file editor (click the pencil icon on `index.html` in your repo) and commit — Vercel will redeploy automatically.
