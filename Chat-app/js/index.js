const init = () => {
    console.log('Windown loaded');
    // document.getElementById('app').innerHTML = components.welcomeScreen ; 
    view.setActiveScreen('registerScreen');
    view.setActiveScreen('loginScreen');

};
window.onload = init ;
