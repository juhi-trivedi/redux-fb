import React from "react"
import { Provider } from "react-redux"
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import rootReducer from './src/store/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import fire from './src/firebase'

const store = createStore(rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reactReduxFirebase(fire, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
      reduxFirestore(fire) // redux bindings for firestore
    )
);

// eslint-disable-next-line react/display-name,react/prop-types
// store.firebaseAuthIsReady.then(() => {
//   export default ({ element }) => <Provider store={store}>{element}</Provider>
// });

export default ({ element }) => <Provider store={store}>{element}</Provider>