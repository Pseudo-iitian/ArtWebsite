// For Fiimport { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage, listAll, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3AUSnQ67_rEdnKIWD1FM_5R7Y73yMWoA",
  authDomain: "uploadart-2fa1d.firebaseapp.com",
  projectId: "uploadart-2fa1d",
  storageBucket: "uploadart-2fa1d.appspot.com",
  messagingSenderId: "341485444920",
  appId: "1:341485444920:web:18cbc1f96f9a1ec014ebcd",
  measurementId: "G-4NBMPYLGKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const imgRef = ref(storage, "/images");
let items = document.getElementById('putcardshere');

listAll(imgRef)
  .then((totalBranches) => {
    totalBranches.items.forEach(async (img) => {
      try {
        const url = await getDownloadURL(ref(storage, `/images/${img.name}`));
        items.innerHTML += `
          <div class="cards">
            <img src="${url}" alt="${img.name}" onclick="previewImage('${url}')">
          </div>
        `;
      } catch (error) {
        console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });


const featureRef = ref(storage,"/features");
let feautredItems = document.getElementById('featureItemsPutHere');

listAll(featureRef)
  .then((totalBranches) => {
    totalBranches.items.forEach(async (img) => {
      try {
        const url = await getDownloadURL(ref(storage, `/features/${img.name}`));
        feautredItems.innerHTML += `
        <div class="cards">
          <img src="${url}" alt="${url.name}" onclick="previewImage('${url}')">
        </div>
        `;
      } catch (error) {
        console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });