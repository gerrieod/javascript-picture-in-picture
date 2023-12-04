const videoElement = document.getElementById('video');
const button = document.getElementById('button');
// promp the user to select a media stream, pass that to video element
async function selectMediaStream() {
    try{

        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata = () => {
            videoElement.play();
        };

    } catch (error) {
        // catch error
    }
}


button.addEventListener('click', async () => {
    // Disable the button
    button.disabled = true;
    // start picture in picture mode
    await videoElement.requestPictureInPicture();
    // reset the button
    button.disable = false;
});

// On Load
selectMediaStream();
