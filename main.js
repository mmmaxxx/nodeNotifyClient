const { app, Menu, Tray, Notification } = require('electron');

let tray = null;



app.on('ready', () => {
    let myNotification = new Notification({
        title: 'You received a new notification from Slack',
        body: 'Hello buddy, this is the notification you received',
        'icon': 'assets/monkey.png'
    });
    tray = new Tray('assets/monkey.png');
    tray.setToolTip('Max\'s notification app.');
    tray.on('click', () => {
        myNotification.show();
    })
});
