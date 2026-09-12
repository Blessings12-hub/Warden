# Warden — 3D Adventure

A phone-first, open-world 3D adventure game built with Three.js (via CDN — no build step required).

## What's inside
- `index.html` — the entire game (HTML + CSS + JS in one file)
- `api/chat.js` — serverless function powering Nolu's live AI dialogue (optional — see note below)
- `vercel.json` — deployment config
- `package.json` / `package-lock.json` — dependency for the AI dialogue feature
- `.gitignore` — keeps `.vercel` and system files out of the repo

## How to deploy
1. Create a new GitHub repository
2. Upload all files in this zip using GitHub's "Add file → Upload files" web uploader
3. Connect the repo to Vercel — no build command or output directory needs to be set
4. Open the deployed URL on your phone

## Fixed: game not starting / buttons unresponsive
A CSS rule was forcing a full-screen, undismissable "rotate your phone" overlay to cover the entire screen (above every button, including Start) any time the phone was held in normal portrait orientation. It's now a small dismissible tip instead — it no longer blocks any input, in either orientation.

## About the Nolu dialogue feature (`api/chat.js`)
This calls Vercel's AI Gateway to generate live NPC dialogue. It needs Vercel's AI Gateway configured (an API key or OIDC) to work — without that, the TALK button just shows one of the built-in offline lines, which is a safe fallback and won't break the rest of the game. If you don't want this feature or its extra dependency, you can delete `api/chat.js`, `package.json`, and `package-lock.json`, and remove the `ai` dependency entirely — the game runs the same without it.

## Current features
- Open 3D area ("The Hills") with a touch joystick, attack, and dodge controls
- Scripted intro cutscene (camera pan + text) with a Start button
- Shrine-driven quest: defeat 3 shades to open a portal
- A second zone ("The Ashen Ruins") with tougher enemies and a boss fight, reachable through the portal, with a return portal back
- Minimap, stamina bar, health bar, game-over/restart flow
- Optional live NPC dialogue with voice playback (browser speech synthesis)

## Next steps to keep building
- Add real character animation: export a rigged model + animations from mixamo.com (free), then load it with Three.js's GLTFLoader in place of the placeholder character
- Add a save/checkpoint system so quest progress persists on reload
- Copy the "zone2" block in index.html to add a third explorable area

## Editing without a terminal
Since `index.html` needs no build step, you can edit it directly in GitHub's web-based file editor (pencil icon) and commit — Vercel redeploys automatically.
