# cdc-vit-sequential-video-automation
CDC automation script for sequential video playback
# 🎬 Sequential Video Automation Script

## 📌 Overview

This project is a browser-based automation script that simulates sequential interaction with video content on a webpage.

It automatically:

* Detects the currently active video
* Tracks playback duration vs. required time
* Waits until completion threshold
* Moves to the next available video
* Repeats the process without page reloads

---

## ⚙️ Features

* 🔁 Continuous execution loop
* ⏱️ Smart time tracking (duration vs. time spent)
* ▶️ Auto-play trigger using iframe messaging
* 📂 Auto-expands hidden sections
* ⏭️ Skips already completed items

---

## 🧠 Concepts Used

* DOM manipulation (`querySelector`, traversal)
* Asynchronous JavaScript (`async/await`, Promises)
* Event simulation
* Browser scripting
* State detection via UI parsing

---

## How to Use

1. Open the target webpage, then the chapter you want to see the videos of, then go to the video from where you want to start(clicking the watched videos might confuse the system's functionality, so click an unwatched video)
2. Expand all VIDEO content sections (ONLY) manually (important)
3. Open browser DevTools (Console tab)
4. Paste and run the script
5. Click the first video to initialize(Don’t Play)
6. Take care of YouTube videos, it doesn’t play them automatically, either leave them(don’t open those sections) or click the play button for YouTube videos alone once they are loaded by the automation.
7. REMEMBER TO KEEP THE SIDEBAR ALWAYS VISIBLE ON SCREEN WHILE AUTOMATION IS GOING ON, SO THAT THE VIDEO FILES ARE ACCESSIBLE(Ctrl & - (or) cmd & - will do the work)

---

## ⚠️ Disclaimer

This script is intended for educational purposes to demonstrate browser automation techniques.
Do not use it in ways that violate the platform's terms of service.

---

## 📷 Demo


https://github.com/user-attachments/assets/2d5bbb89-3928-4447-bbba-14a70c71f552






---

## 💡 Future Improvements

* Convert into a browser extension
* Add UI controls (start/stop)
* Smarter detection using MutationObserver
* Support for multiple platforms
