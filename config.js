// config.js
export const firebaseConfig = {
  apiKey: "AIzaSyD_pEXQm2b8mEXIBNZpofU21xF13zsL1SU",
  authDomain: "webcamheck.firebaseapp.com",
  projectId: "webcamheck",
  storageBucket: "webcamheck.firebasestorage.app",
  messagingSenderId: "965368984875",
  appId: "1:965368984875:web:b67dc776d9dce43f1c816e",
  measurementId: "G-5X81SV2PCT"
};

export const cloudinary = {
    cloudName: 'dkn9qkmxe',
    uploadPreset: 'mathtutor',   // phải là preset kiểu "Unsigned"
    folder: 'mathtutor'                            // thư mục gốc; ảnh nằm ở  <folder>/<uid>/cheat/…  (phải TRÙNG biến CLOUDINARY_FOLDER ở máy chủ)
  }

export const cloudinaryConfig = cloudinary;