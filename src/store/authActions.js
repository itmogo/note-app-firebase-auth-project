
export const registerWithEmail = (email, password) => {
    return( dispatch, state, {getFirebase}) =>{
        let firebase = getFirebase()
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) =>{
            console.log(response)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}