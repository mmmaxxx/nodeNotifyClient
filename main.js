const { app, Menu, Tray, Notification } = require('electron');

const io = require('socket.io-client');

let tray = null;



app.on('ready', () => {

    tray = new Tray('assets/monkey.png');
    tray.setToolTip('Max\'s notification app.');
    tray.on('click', () => {

    });

    const socket = io.connect('http://mmmaxxxnotifyserver.herokuapp.com');
    socket.on('connect', () => {
        socket.on('notif', (message) => {
            console.log('Notification received', JSON.stringify(message));
            let myNotification = new Notification({
                title: 'Alert!',
                body: JSON.stringify(message),
                'icon': 'assets/monkey.png'
            });
            myNotification.show();
        });
        console.log('Succesfully connected!');
    })

});
