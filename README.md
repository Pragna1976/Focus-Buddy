# FocusBuddy — ADHD Study Companion

FocusBuddy is a premium, feature-rich single-page study application tailored for ADHD brains, with built-in PWA support, local background ambient sounds, task/step management, flashcards, a weekly study calendar, rewards tracking, and Supabase integration.

## Key Features

- **Resilient Focus Timer:** Supports Pomodoro cycles, "Just 2 Mins" (to defeat task paralysis), and a "Flow State" count-up stopwatch. Includes visual minute progress ticking.
- **Resilient Notes App:** Create, select, edit, and expand notes. Automatically backed up to local storage if Supabase connection drops.
- **Step-by-Step Task Tracker:** Set priority tasks, add sub-steps, complete them, and watch your progress update in real time.
- **Flashcards & Active Recall:** Group cards, rate recall status (Again/Hard/Good) and review. Supports bulk import.
- **Ambient Sound Mixer:** Offline-friendly synthetic sound generators (Lofi, Rain, Brown, White) and WebAudio looped audio support with smooth crossfading.
- **Offline Reliability:** Automatic client fallbacks to `localStorage` for all core entities (profile, tasks, steps, flashcards, notes, weekly days, badge accomplishments).

## Local Development & Preview

To preview the app locally:
1. Make sure you have python or node/npx installed.
2. Start a local server at the root directory:
   ```bash
   # using python
   python -m http.server 8080
   
   # or using node/npx
   npx http-server -p 8080
   ```
3. Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## Deploy to Netlify (Step-by-Step)

Deploying FocusBuddy to Netlify takes less than 2 minutes and is completely free:

1. **Sign up / Log in:** Go to [Netlify](https://www.netlify.com/) and sign in using your GitHub account.
2. **Add New Site:** Click on the **Add new site** button on your dashboard and select **Import from Git**.
3. **Connect GitHub:** Select **GitHub** and authorize Netlify to access your repositories.
4. **Choose Repository:** Select the `Focus-Buddy` repository from your list.
5. **Configure Build Settings:**
   - **Branch to deploy:** `main`
   - **Base directory:** (leave blank)
   - **Build command:** (leave blank)
   - **Publish directory:** `.` (or leave blank; the `netlify.toml` file will automatically set it to the root).
6. **Deploy:** Click **Deploy site**. Netlify will build, assign a subdomain (e.g. `your-app.netlify.app`), and deploy your app instantly!

*Note: The included `netlify.toml` file automatically configures premium security headers and optimal cache rules for assets, icons, and the service worker.*
