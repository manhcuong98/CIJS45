const controller = {};
controller.register = (data) => {
    if(data.firstName === ''){
        document.getElementById('first-name-error').innerText = 'Plese input First name' ;
    } 
    else{
        document.getElementById('first-name-error').innerText ='' ; 
    };
    if(data.email === ''){
        document.getElementById('last-name-error').innerText = 'Plese input Last name' ;
    } 
    else{
        document.getElementById('last-name-error').innerText ='' ; 
    } ;
    if(data.email === ''){
        document.getElementById('email-error').innerText = 'Plese input Email' ;
    } 
    else{
        document.getElementById('email-error').innerText ='' ; 
    } ;

    if(data.password ===''){
        document.getElementById('password-error').innerText = 'Plese input Password' ;
    } 
    else{
        document.getElementById('password-error').innerText ='' ; 
    }
    if(data.email === ''){
        document.getElementById('confirm-password-error').innerText = 'Plese input Confirm password' ;
    } 
    else{
        document.getElementById('confirm-password-error').innerText ='' ; 
    } ;
    
   
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
};
//thu swich case