"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserDocumentFromAuth = exports.db = exports.signInWithGooglePopup = exports.auth = void 0;

var _app = require("firebase/app");

var _auth = require("firebase/auth");

var _firestore = require("firebase/firestore");

var firebaseConfig = {
  apiKey: 'AIzaSyCk_PsbVG-8v5WlMgRZTNamqTQPp6Vatek',
  authDomain: 'crwn-clothing-db-d5da9.firebaseapp.com',
  projectId: 'crwn-clothing-db-d5da9',
  storageBucket: 'crwn-clothing-db-d5da9.firebasestorage.app',
  messagingSenderId: '674252949553',
  appId: '1:674252949553:web:6a0266915f773b95fead10'
};
var firebaseApp = (0, _app.initializeApp)(firebaseConfig);
var provider = new _auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
var auth = (0, _auth.getAuth)();
exports.auth = auth;

var signInWithGooglePopup = function signInWithGooglePopup() {
  return (0, _auth.signInWithPopup)(auth, provider);
};

exports.signInWithGooglePopup = signInWithGooglePopup;
var db = (0, _firestore.getFirestore)();
exports.db = db;

var createUserDocumentFromAuth = function createUserDocumentFromAuth(userAuth) {
  var userDocRef, userSnapshot, displayName, email, createAt;
  return regeneratorRuntime.async(function createUserDocumentFromAuth$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          userDocRef = (0, _firestore.doc)(db, 'users', userAuth.uid);
          console.log(userDocRef);
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.getDoc)(userDocRef));

        case 4:
          userSnapshot = _context.sent;
          console.log(userSnapshot);

          if (userSnapshot.exists()) {
            _context.next = 17;
            break;
          }

          displayName = userAuth.displayName, email = userAuth.email;
          createAt = new Date();
          _context.prev = 9;
          _context.next = 12;
          return regeneratorRuntime.awrap((0, _firestore.setDoc)(userDocRef, {
            displayName: displayName,
            email: email,
            createAt: createAt
          }));

        case 12:
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](9);
          console.log('error creating the user', _context.t0.message);

        case 17:
          return _context.abrupt("return", userDocRef);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[9, 14]]);
};

exports.createUserDocumentFromAuth = createUserDocumentFromAuth;
//# sourceMappingURL=firebase.utils.dev.js.map
