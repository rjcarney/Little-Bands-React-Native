import firebase from 'firebase';
requestAnimationFrame('firebase/firebase-auth');

export const login = (email, password) => dispatch => new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            resolve()
        })
        .catch(() => {
            reject()
        })
})

export const register = (email, password) => dispatch => new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            resolve()
        })
        .catch(() => {
            reject()
        })
})