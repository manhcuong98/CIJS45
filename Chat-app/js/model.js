const model = {}
model.currentUser = undefined;
model.conversations = undefined;
model.currentConversation = undefined;
model.collectionName = 'conversations';



model.register = async (data) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + ' ' + data.lastName
        });
        firebase.auth().currentUser.sendEmailVerification();
        alert('The email has been registered, please check your emai')
        view.setActiveScreen('loginScreen')
    } catch (err) {
        console.log(err);
        alert(err.message);
    }




    // then((res) =>{
    //     firebase.auth().currentUser.updateProfile({
    //         displayName: data.firstName + ' ' +data.lastName
    //     });
    //     firebase.auth().currentUser.sendEmailVerification()
    // }).catch((err) => {
    //     console.log(err);
    // }) ;
}

model.login = async (dataLogin) => {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(dataLogin.email, dataLogin.password);
        // console.log(response);
        // if(response.user.emailVerified === false){
        //     alert('Please verify your email!')
        // } else {
        //     model.currentUser ={
        //         displayName: response.user.displayName,
        //         email: response.user.email 
        //     }
        //     view.setActiveScreen('chatScreen');
        // }
    } catch (err) {
        console.log(err);
        alert(err.message);
    }
}

model.addMessage = (message) => {
    const dataToUpdate = {
        messages: firebase.firestore.FieldValue.arrayUnion(message)
    }
    firebase.firestore().collection(model.collectionName).doc('dfvdeERUylaxBecpyNLS').update(dataToUpdate);
}

model.loadConversations = async () => {
    const response = await firebase.firestore().collection(model.collectionName).where('users', 'array-contains', model.currentUser.email).get()
    model.conversations = getDataFromdocs(response.docs)  //lay du lieu firebase (list luu vao conversation => check >0 => gan cho cuoc tro chuyen dau tien)
    if(model.conversations.length >0) {
        model.currentConversation = model.conversations[0];
        view.showCurrentConversation()
    };
}

model.listenConversationsChange = () => {
    let isFirstRun =true ;
    firebase.firestore().collection(model.collectionName).where('users', 'array-contains', model.currentUser.email).onSnapshot((res) =>{
        // console.log(getDataFromdocs(res.docChanges()));
        if(isFirstRun){
            isFirstRun =false ;
            return
        }
        const docChanges = res.docChanges()
    
        for(oneChange of docChanges){
            const type = oneChange.type;
            if(type === 'modified'){
            const docData = getDataFromdoc(oneChange.doc)

            //update lai model.conversations
            for(let i =0 ; i < model.conversations.length; i++){
                if(model.conversations[i].id === docData.id){
                    model.conversations[i] = docData
                }
            };

            //update model.currenConversation
            if(docData.id === model.currentConversation.id) {
                model.currentConversation = docData 
                const lastMessage = docData.messages[docData.messages.length -1]
                view.addMessage(lastMessage);
                view.scrollToEndElement()
            }
            }
        };
    })
}