self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  const title = data.title || 'OtroNodo · WhatsApp';
  const options = {
    body: data.body || 'Tenés mensajes programados',
    icon: 'https://fabulous-kulfi-ff7df6.netlify.app/icon.png',
    badge: 'https://fabulous-kulfi-ff7df6.netlify.app/icon.png',
    data: { url: data.url || '/' },
    vibrate: [200, 100, 200],
    requireInteraction: false
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url || '/'));
});
