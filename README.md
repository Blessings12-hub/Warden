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

## Bugs fixed in this pass
- A CSS rule forced a full-screen, undismissable "rotate your phone" overlay to cover the entire game — including the Start button — whenever the phone was in normal portrait orientation. It's now a small dismissible tip that never blocks input.
- Attack, dodge, and block were each wired to fire on **both** `pointerdown` and `touchstart` for the same tap, silently double-spending stamina and making inputs intermittently fail. Now bound once, via `pointerdown` only.
- After the first zone change, the on-screen objective text would silently freeze because a status update rebuilt its container with `innerHTML`, orphaning the JS reference to it. Objective and zone-name are now separate elements updated directly.
- A defeated boss could reappear alive after a page reload, since only `bossAwakened` was saved, not whether it had actually died. Fixed by keying it off `zone2Complete`, which is only set once the boss is actually defeated.
- Defeating the boss used to immediately end the game, which contradicted unlocking Zone 3 for continued play. It now just opens the path west and lets you keep going.
- World map, options, and pause menus visually covered the game but didn't actually freeze it — enemies could keep attacking behind an open menu. All panel overlays now pause gameplay updates while open.

## About the Nolu dialogue feature (`api/chat.js`)
This calls Vercel's AI Gateway to generate live NPC dialogue. It needs Vercel's AI Gateway configured (an API key or OIDC) to work — without that, the TALK button shows one of the built-in, zone-aware offline lines instead, which is a safe fallback and won't break the rest of the game. If you don't want this feature or its extra dependency, delete `api/chat.js`, `package.json`, and `package-lock.json` — the game runs the same without them.

## Current features
- Open-world exploration across **3 zones** — The Hills, The Ashen Ruins, and The Sunken Vale — connected by portals, plus fast-travel via the world map once a zone is unlocked
- A day/night cycle with a shifting sky gradient and matching light color
- Touch joystick movement, attack (with a 3-hit combo), dodge, and hold-to-block with a parry window
- Enemy variety: melee shades, ranged enemies that throw projectiles, shielded enemies that must be flanked, and a boss fight with a telegraphed heavy attack
- Difficulty scales up per zone
- Collectible shards spent at an upgrade altar for +Health, +Stamina, or +Attack Damage
- Save/checkpoint system (browser `localStorage`) with a "Continue" option on the start screen
- Particle effects (footstep dust, hit sparks, pickup bursts), a minimap, health/stamina bars, haptic feedback on hits and dodges
- Pause menu and an options menu (volume, SFX toggle, control sensitivity, colorblind-friendly enemy shape markers)
- All sound is synthesized live with the Web Audio API — no external audio files
- Optional live NPC dialogue with voice playback (browser speech synthesis), falling back to zone-aware offline lines

## Known limitations (honest gaps)
- The player character is still a procedural placeholder, not a rigged/animated model
- Zone 3 has no final boss or ending yet — it's an explorable area, ready for one
- Save data is per-browser (`localStorage`), not synced across devices

## Next steps to keep building
- Add real character animation: export a rigged model + animations from mixamo.com (free), then load it with Three.js's GLTFLoader in place of the placeholder character
- Give Zone 3 its own boss and a true ending
- Move save data to Supabase (which you're already using for Blescy) so progress syncs across devices

## Editing without a terminal
Since `index.html` needs no build step, you can edit it directly in GitHub's web-based file editor (pencil icon) and commit — Vercel redeploys automatically.
