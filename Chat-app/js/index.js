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
  console.log(firebase.app().name);
  // view.setActiveScreen('loginScreen');
  firestoreFuntion();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      if (user.emailVerified) {
        model.currentUser = {
          displayName: user.displayName,
          email: user.email
        }
        view.setActiveScreen('chatScreen');
      }
      else {
        view.setActiveScreen('loginScreen');
        alert('Please verify your email!');
      }

      // console.log(user);

      // view.setActiveScreen('chatScreen');
    } else {
      view.setActiveScreen('loginScreen')
    }
  });
};

window.onload = init;


firestoreFuntion = async () => {
  //***************get one document******************//
  const documentId = 'dfvdeERUylaxBecpyNLS';
  const response = await firebase.firestore().collection('conversations').doc(documentId).get()
  const user = getDataFromdoc(response);
  // user.id = response.id ;
  // console.log(user) ;


  //***************get many document*****************//
  // const response2 = await firebase.firestore().collection('users').where('address','==','Hà Nội').get()
  const response2 = await firebase.firestore().collection('conversations').where('phoneNumber', 'array-contains', '091').get()
  // const response2 = await firebase.firestore().collection('users').where('name','==','test').get()
  // console.log(getDataFromdoc(response2.docs[1]));

  const listUser = getDataFromdocs(response2.docs)
  // console.log(listUser);

  //*********************add document*****************  // chi 1 document khong duoc nhieu 
  // const userToAdd = {
  //   name: 'ABC',
  //   age: 23,
  //   email: 'abcxyz@gmail.com'
  // };
  //  
  // firebase.firestore().collection('users').add(userToAdd)
  //****************update document*****************//
  documentIdUpdate = 'dfvdeERUylaxBecpyNLS';
  const dataToUpdate = {
    messages: firebase.firestore.FieldValue.arrayUnion({
      content:"test",
      createdAt:"test",
      owner: "test"})
  }
  // firebase.firestore().collection('conversations').doc(documentIdUpdate).update(dataToUpdate);
  
  //*****************delete document***************//
  const docToDeltete = 'lgIxiQM5Lng6wnzaAbjs';
  firebase.firestore().collection('users').doc(docToDeltete).delete();




};

getDataFromdoc = (doc) => {
  const data = doc.data();
  data.id = doc.id;
  return data;
}

getDataFromdocs = (docs) => {
  return listData = docs.map(item => getDataFromdoc(item));
  // for(let index = 0; index < docs.length; index ++){
  //   const element = getDataFromdoc(docs[index]);
  //   listData.push(element)
  //   // console.log(element);
  // }
  // return listData;
}

// view.addMessage = (message) => {
//   const dataToUpdate = {
//     messages: firebase.firestore.FieldValue.arrayUnion({message})
//   }
//   firebase.firestore().collection('conversations').doc(documentIdUpdate).update(dataToUpdate);
// }