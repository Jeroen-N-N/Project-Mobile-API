import Pusher from 'pusher-js/react-native';

//Pusher.logToConsole = true;

const pusher = new Pusher('0e853728c75e2a469064', {
    cluster: 'eu'
});

export default pusher;