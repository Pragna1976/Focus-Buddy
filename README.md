# FocusBuddy — Local Development Notes

This workspace contains `index (1).html` — a single-file Focus Timer web app with PWA support, background sounds, and Supabase integration.

What I changed
- Added PWA SVG icons at `icons/icon-192.svg` and `icons/icon-512.svg`, and updated `manifest.json`.
- Enhanced sound handling to support optional looped audio samples (`sounds/*.mp3`) with crossfade and per-sound gain. If sample files are not present, the app falls back to synthesized noise generators (white/brown/rain/lofi).
- Added persistent `sound`, `soundVolume`, and `soundMuted` settings via `localStorage`.
- Implemented graceful autoplay behavior: audio starts after a user gesture.

How to provide better looped audio files
1. Create a folder `sounds/` next to `index (1).html`.
2. Add looped audio files named exactly:
   - `sounds/lofi.mp3`
   - `sounds/rain.mp3`
   - `sounds/brown.mp3`
   - `sounds/white.mp3`

Files should be reasonably short looped clips (10–60s). When present the app will load and use them; otherwise the synth fallback is used.

Local testing
1. Start a simple static server in the folder containing `index (1).html`:

```bash
# from PowerShell / cmd
python -m http.server 8000
```

2. Open http://localhost:8000/index%20(1).html in a browser.
3. Click anywhere to enable audio, then pick a background sound and adjust volume/mute.

Next steps you might want me to do
- Add example looped audio files to `sounds/` (I can add placeholder loops if you want).
- Improve offline caching of sound files in `service-worker.js`.
- Add per-sound EQ presets and smoother crossfades.

If you want me to add placeholder sample files now, say "Add placeholders" and I'll create short silent sample files you can replace later.
