const view = {};
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'welcomeScreen':
            document.getElementById('app').innerHTML = components.welcomeScreen;
            break;
        // case 'loginScreen':
        // // in ra login // truyen tu index
        // break;
        case 'loginScreen':
            document.getElementById('app').innerHTML = components.loginScreen;
            document.getElementById('redirect-to-register').addEventListener('click', (e) => {
                view.setActiveScreen('registerScreen')
            })
            const loginForm = document.getElementById('login-form');
            loginForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const data = {
                    email: loginForm.email.value.trim(),
                    password: loginForm.password.value
                };
                // console.log(dataLogin);
                controller.login(data);
            });
            break;
        case 'registerScreen':
            document.getElementById('app').innerHTML = components.registerScreen;
            const registerForm = document.getElementById('register-form');
            registerForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value
                }; 
                // console.log(data);
                controller.register(data);
            })
            document.getElementById('redirect-to-login').addEventListener('click', () => {
                view.setActiveScreen('loginScreen');
            });
            break;
        case 'chatScreen': 
        document.getElementById('app').innerHTML =components.chatScreen;
        // document.getElementById('welcome-user').innerText = `Welcome ${model.currentUser.displayName} to the chat app` ;
        const sendMessageForm = document.getElementById('send-message-form')
        sendMessageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = {
                content: sendMessageForm.message.value,
                owner: model.currentUser.email
            };
            const botMsg = {
                content: sendMessageForm.message.value,
                owner: 'bot' 
            }
            //
            if(sendMessageForm.message.value.trim() !==''){
                view.addMessage(message)
                view.addMessage(botMsg)
            };
            
            // console.log(sendMessageForm.message.value);
            sendMessageForm.message.value ='';
        });
         break;
        

    }
};

view.addMessage =(message)  =>{
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('message-container')
    if(message.owner === model.currentUser.email){
        messageWrapper.classList.add('mine')
        messageWrapper.innerHTML= `
        <div class="content">
            ${message.content}
        </div>`
    } else {
        messageWrapper.classList.add('their');
        messageWrapper.innerHTML =`
        <div class="owner">
        ${message.owner}
        </div>
        <div class"content">
        ${message.content}
        </div>`
    }
    document.querySelector('.list-messages').appendChild(messageWrapper);

}