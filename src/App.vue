<template>
  <div id="app">
    <router-view v-slot="{ Component }">
    <component :is="Component"></component>
    </router-view>
  </div>
</template>

<script>
//import section
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, getDoc, addDoc, query, where, setDoc, doc} from "firebase/firestore";

// firebaseConfig Copy มาจาก Firebase

/*const firebaseConfig = {
      apiKey: "AIzaSyDp0YhVDsSOjDe0b8RDoaav2y302EK7GGU",
      authDomain: "cps-testenv.firebaseapp.com",
      databaseURL: "https://cps-testenv-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "cps-testenv",
      storageBucket: "cps-testenv.appspot.com",
      messagingSenderId: "1049533725284",
      appId: "1:1049533725284:web:83e5db3857cdd9a2753d71"
};

//init Firebase and get Firestore

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);*/

//export section
export default {
  name: 'App',
  data() {
    return {
      initializeApp,
      getFirestore,
      collection, 
      getDocs, 
      getDoc, 
      addDoc, 
      query, 
      where, 
      setDoc, 
      doc,
    }
  },
  methods : {

  },
  //beforeCreate hook สำหรับการตรวจสอบและ Init
  beforeCreate() {
    window.liff.init({ liffId : ""})
    .then(() => {
      if(!window.liff.isInClient()){
        if(!window.liff.isLoggedIn()){
          window.liff.login()
        }
      }
    })
  },
}
</script>

<style>
#app {
  font-family: sarabun;
  color: #2c3e50;
  margin: 15px;
}
</style>

