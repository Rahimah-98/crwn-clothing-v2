"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAuthUserWithEmailAndPassword = exports.createUserDocumentFromAuth = exports.db = exports.signInWithGooglePopup = exports.auth = void 0;

var _app = require("firebase/app");

var _auth = require("firebase/auth");

var _firestore = require("firebase/firestore");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firebaseConfig = {
  apiKey: 'AIzaSyCk_PsbVG-8v5WlMgRZTNamqTQPp6Vatek',
  authDomain: 'crwn-clothing-db-d5da9.firebaseapp.com',
  projectId: 'crwn-clothing-db-d5da9',
  storageBucket: 'crwn-clothing-db-d5da9.firebasestorage.app',
  messagingSenderId: '674252949553',
  appId: '1:674252949553:web:6a0266915f773b95fead10'
};
var firebaseApp = (0, _app.initializeApp)(firebaseConfig);
var googleProvider = new _auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});
var auth = (0, _auth.getAuth)();
exports.auth = auth;

var signInWithGooglePopup = function signInWithGooglePopup() {
  return (0, _auth.signInWithPopup)(auth, googleProvider);
};

exports.signInWithGooglePopup = signInWithGooglePopup;
var db = (0, _firestore.getFirestore)();
exports.db = db;

var createUserDocumentFromAuth = function createUserDocumentFromAuth(userAuth) {
  var additionalInformation,
      userDocRef,
      userSnapshot,
      displayName,
      email,
      createAt,
      _args = arguments;
  return regeneratorRuntime.async(function createUserDocumentFromAuth$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          additionalInformation = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};

          if (userAuth) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return");

        case 3:
          userDocRef = (0, _firestore.doc)(db, 'users', userAuth.uid);
          console.log(userDocRef);
          _context.next = 7;
          return regeneratorRuntime.awrap((0, _firestore.getDoc)(userDocRef));

        case 7:
          userSnapshot = _context.sent;
          console.log(userSnapshot);

          if (userSnapshot.exists()) {
            _context.next = 20;
            break;
          }

          displayName = userAuth.displayName, email = userAuth.email;
          createAt = new Date();
          _context.prev = 12;
          _context.next = 15;
          return regeneratorRuntime.awrap((0, _firestore.setDoc)(userDocRef, _objectSpread({
            displayName: displayName,
            email: email,
            createAt: createAt
          }, additionalInformation)));

        case 15:
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](12);
          console.log('error creating the user', _context.t0.message);

        case 20:
          return _context.abrupt("return", userDocRef);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[12, 17]]);
};

exports.createUserDocumentFromAuth = createUserDocumentFromAuth;

var createAuthUserWithEmailAndPassword = function createAuthUserWithEmailAndPassword(email, password) {
  return regeneratorRuntime.async(function createAuthUserWithEmailAndPassword$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(!email || !password)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt("return");

        case 2:
          _context2.next = 4;
          return regeneratorRuntime.awrap((0, _auth.createUserWithEmailAndPassword)(auth, email, password));

        case 4:
          return _context2.abrupt("return", _context2.sent);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.createAuthUserWithEmailAndPassword = createAuthUserWithEmailAndPassword;
//# sourceMappingURL=firebase.utils.dev.js.map
