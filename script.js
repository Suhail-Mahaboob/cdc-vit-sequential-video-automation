// Sequential cdc Video Automation Script
// Runs in browser console to automate video playback flow
(async function perpetualConveyor() {
    console.clear();
    console.log("%c No-Reload Conveyor Active", "color: #00d4ff; font-size: 18px; font-weight: bold;");

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const toSec = (str) => {
        const p = str.split(':');
        return (parseInt(p[0]) * 60) + parseInt(p[1]);
    };

    while (true) {
        // 1. Ensure folders are open so we can see the list
        document.querySelectorAll('.modpointer').forEach(h => {
            if (!h.closest('.t-rounded-md')?.querySelector('.modonhover')) h.click();
        });
        await sleep(2000);

        // 2. Identify current active video
        let activeRow = document.querySelector('.selectedAcd');
        if (!activeRow) {
            console.log("⚠️ No video selected. Please click one to start the chain.");
            await sleep(5000);
            continue;
        }

        // 3. Get timing data
        let durationMatch = activeRow.innerText.match(/(\d+):(\d{2})/);
        let spentText = document.body.innerText.match(/(\d+:\d+)\s*Time Spent/);
        
        let durationSec = durationMatch ? toSec(durationMatch[0]) : 300;
        let spentSec = spentText ? toSec(spentText[1]) : 0;

        // Determine if we need to watch or skip
        if (spentSec < durationSec) {
            let waitTime = (durationSec - spentSec) + 40; 
            console.log(`📺 Watching: ${activeRow.innerText.split('\n')[0].trim()}`);
            console.log(`⏳ Remaining: ${waitTime}s...`);

            // Force Play
            let iframe = document.querySelector('iframe');
            if (iframe) iframe.contentWindow.postMessage('{"method":"play"}', '*');

            // Countdown
            for (let i = waitTime; i > 0; i--) {
                if (i % 20 === 0 || i <= 5) console.log(`⏱️ ${i}s left`);
                await sleep(1000);
            }
            console.log("✅ Video time threshold met.");
        } else {
            console.log("⏭️ Already watched. Moving to next...");
        }

        // 4. FIND AND CLICK NEXT (Without Reloading)
        let allVideos = Array.from(document.querySelectorAll('.modonhover'))
            .filter(v => v.innerText.toLowerCase().includes('video'));
        let currentIndex = allVideos.indexOf(activeRow);
        let nextTarget = allVideos.slice(currentIndex + 1).find(row => {
            return !row.innerText.includes('100%') && !row.innerHTML.includes('completed.svg');
        });

        if (nextTarget) {
            console.log(`🖱️ Clicking: ${nextTarget.innerText.split('\n')[0].trim()}`);
            nextTarget.click();
            
            // Wait for the new video to load into the player before repeating loop
            console.log("⏳ Loading next video content...");
            await sleep(5000); 
        } else {
            console.log("🏁 All videos in all modules complete!");
            break;
        }
    }
})();
