let socket = io('ws://localhost:8080');
let connected = true;
socket.on('message', (text) => {
    let elem=document.createElement('div');
    elem.className='message';
    elem.innerHTML=text+'<br><br>';
    document.querySelector('.messages').appendChild(elem);
});
document.querySelector('#sendbtn').onclick= (e)=>{
    e.preventDefault();
    if(connected)
    {
        const inputField=document.querySelector('textarea');
        const input = inputField.value;
        // console.log(input);
        socket.emit('message',input);
        inputField.value = '';
    }
    else
    {
        const inputField=document.querySelector('textarea');
        const input = inputField.value;
        inputField.value = '';
    }
};
document.querySelector('#disbtn').onclick = (e) => {
    e.preventDefault();
    if(connected)
    {
        document.querySelector('#disbtn').textContent = 'Connect';
        connected = !connected;
    }
    else
    {
        document.querySelector('#disbtn').textContent = 'Disconnect';
        connected = !connected;
    }
};
let vody = document.querySelector('body');
vody.onload((e) => {
    e.preventDefault();
    const inputField=document.querySelector('textarea');
    inputField.value = '';
})