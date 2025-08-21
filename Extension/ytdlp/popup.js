const audioBtn = document.getElementById('audioBtn');
const videoBtn = document.getElementById('videoBtn');
const statusDiv = document.getElementById('status');
const body = document.body;

function sendUrl(endpoint) {
  body.style.backgroundColor = 'yellow';
  statusDiv.textContent = 'Loading...';
  audioBtn.disabled = true;
  videoBtn.disabled = true;

  chrome.runtime.sendMessage({ action: 'download', endpoint }, (response) => {
    if (response && response.ok) {
      body.style.backgroundColor = 'green';
      statusDiv.textContent = 'Success!';
    } else {
      body.style.backgroundColor = 'red';
      statusDiv.textContent = 'Failed!';
    }

    audioBtn.disabled = false;
    videoBtn.disabled = false;
  });
}

audioBtn.addEventListener('click', () => sendUrl('downloadAudio'));
videoBtn.addEventListener('click', () => sendUrl('downloadVideo'));
