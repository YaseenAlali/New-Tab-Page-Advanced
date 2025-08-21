chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'download') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      const url = tab.url;

      fetch(`http://localhost:5000/api/${message.endpoint}?url=${encodeURIComponent(url)}`)
        .then(response => {
          sendResponse({ ok: response.ok });

          if (response.ok) {
            chrome.browserAction.setBadgeText({ text: "✔" });
            chrome.browserAction.setBadgeBackgroundColor({ color: "green" });
          } else {
            chrome.browserAction.setBadgeText({ text: "✖" });
            chrome.browserAction.setBadgeBackgroundColor({ color: "red" });
          }

          chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.png", 
            title: message.endpoint === 'downloadAudio' ? 'Audio Download' : 'Video Download',
            message: response.ok ? "Download successful!" : "Download failed!"
          });
        })
        .catch(err => {
          console.error(err);
          sendResponse({ ok: false });

          chrome.browserAction.setBadgeText({ text: "✖" });
          chrome.browserAction.setBadgeBackgroundColor({ color: "red" });

          chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.png",
            title: message.endpoint === 'downloadAudio' ? 'Audio Download' : 'Video Download',
            message: "Download failed!"
          });
        });
    });
    return true;
  }
});
