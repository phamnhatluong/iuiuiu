// config.js
export const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

export const cloudinary = {
    cloudName: 'dkn9qkmxe',
    uploadPreset: 'mathtutor',   // phải là preset kiểu "Unsigned"
    folder: 'mathtutor'                            // thư mục gốc; ảnh nằm ở  <folder>/<uid>/cheat/…  (phải TRÙNG biến CLOUDINARY_FOLDER ở máy chủ)
  }

export const cloudinaryConfig = cloudinary;