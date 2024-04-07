// Check if the browser supports service workers
if ('serviceWorker' in navigator) {
    // Register the service worker
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js') // Path to your service worker file
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    });
  } else {
    console.log('Service workers are not supported.');
  }