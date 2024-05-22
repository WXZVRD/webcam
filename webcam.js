document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('webcam');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            // Attach the video stream to the video element
            videoElement.srcObject = stream;
        })
        .catch(error => {
            console.error("Error accessing webcam: ", error);
            alert("Error accessing webcam: " + error.message);
        });
});
