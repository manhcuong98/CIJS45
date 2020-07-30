const init = () => {
    // console.log('Windown loaded');
    // document.getElementById('app').innerHTML = components.welcomeScreen ; 
    view.setActiveScreen('loginScreen');
    view.setActiveScreen('registerScreen');
    view.setActiveScreen('loginScreen');
    var firebaseConfig = {
        apiKey: "AIzaSyB3vGabZrlCK9xkZQmDYvjqrQ_5gAD1pI0",
        authDomain: "chat-app-d1081.firebaseapp.com",
        databaseURL: "https://chat-app-d1081.firebaseio.com",
        projectId: "chat-app-d1081",
        storageBucket: "chat-app-d1081.appspot.com",
        messagingSenderId: "401176780142",
        appId: "1:401176780142:web:75c8424bf3ebbb571a757f"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      // console.log(firebase.app().name);
      // view.setActiveScreen('loginScreen');

      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          // User is signed in.
            model.currentUser = {
              displayName: user.displayName,
              email: user.email
            }

          view.setActiveScreen('chatScreen');
        } else {
          view.setActiveScreen('loginScreen')
        }
      });
};

window.onload = init ;
    

