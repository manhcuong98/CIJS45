const controller = {};
controller.register = (data) => {
    if(data.firstName.trim() === ''){
        document.getElementById('first-name-error').innerText = 'Plese input First name' ;
    } 
    else{
        document.getElementById('first-name-error').innerText ='' ; 
    };
    if(data.lastName.trim() === ''){
        document.getElementById('last-name-error').innerText = 'Plese input Last name' ;
    } 
    else{
        document.getElementById('last-name-error').innerText ='' ; 
    } ;
    if(data.email.trim() === ''){
        document.getElementById('email-error').innerText = 'Plese input Email' ;
    } 
    else{
        document.getElementById('email-error').innerText ='' ; 
    } ;

    if(data.password.trim() ===''){
        document.getElementById('password-error').innerText = 'Plese input Password' ;
    } 
    else{
        document.getElementById('password-error').innerText ='' ; 
    }
    if(data.confirmPassword.trim() === ''){
        document.getElementById('confirm-password-error').innerText = 'Plese input Confirm password' ;
    } 
    else if(data.password !== data.confirmPassword){
        document.getElementById('confirm-password-error').innerText ="Password didn't match"
    }
    else {
        document.getElementById('confirm-password-error').innerText ='' ; 
    } ;
    if(data.firstName !== '' && data.lastName !== ''&& data.email !== '' && data.password !== '' &&
       data.confirmPassword !=='' && data.password ===data.confirmPassword){
           model.register(data);
       }
    
   
};

controller.login = (dataLogin) => {
    if(dataLogin.email === ''){
        document.getElementById('email-error').innerText = 'Plese input Email' ;
    } 
    else{
        document.getElementById('email-error').innerText ='' ; 
    } ;

    if(dataLogin.password ===''){
        document.getElementById('password-error').innerText = 'Plese input Password' ;
    } 
    else{
        document.getElementById('password-error').innerText ='' ; 
    }
    if(dataLogin.email !== '' &&
    dataLogin.password !== '')
    {
        model.login(dataLogin);
    }
};

controller.createConversation = ({conversationTitle, conversationEmail}) =>{
    if(conversationTitle.trim() ===''){
        view.setErrorMessage('conversation-name-error', 'Please input Conversation name')
    } else{
        view.setErrorMessage('conversation-name-error', '');
    }
    if(conversationEmail.trim() ===''){
        view.setErrorMessage('conversation-email-error','Please input Friend email')
    }else{
        view.setErrorMessage('conversation-email-error', '');
    }
    
    if(conversationTitle.trim() !=='' && conversationEmail.trim() !==''){
        const data = {
            title: conversationTitle, 
            users: [conversationEmail,  model.currentUser.email],
            createdAt: (new Date()).toISOString(),
            messages: []
        }
        model.createConversation(data);
    }
}

controller.addUser = (user) => {
    if(user.trim() === ''){
        view.setErrorMessage('add-user-email-error', 'Please input email');
    }else{
        view.setErrorMessage('add-user-email-error', '')
    }
    if(user.trim() !== ''){
        model.addUser(user);
    }
}