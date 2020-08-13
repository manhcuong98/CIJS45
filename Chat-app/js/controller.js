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

controller.createConversation = (dataCreateConversation) =>{
    if(dataCreateConversation.conversationTitle ===''){
        document.getElementById('conversation-name-error').innerHTML='Please input Conversation name' ;
    } else{
        document.getElementById('conversation-name-error').innerHTML='' ;
    }
    if(dataCreateConversation.conversationEmail ===''){
        document.getElementById('conversation-email-error').innerHTML='Please input Friend email' ;
    } else{
        document.getElementById('conversation-email-error').innerHTML='' ;
    }
    if(dataCreateConversation.conversationTitle !=='' && dataCreateConversation.conversationEmail !==''){
        model.createConversation(dataCreateConversation);
    }
}

