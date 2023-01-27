import React, { useState, useEffect } from "react";
import Styles from "../styles/chat.module.css";
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set, onChildAdded } from "firebase/database";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const chat = () => {
  const [name, setName] = useState("");
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState(" ");
  const provider = new GoogleAuthProvider();

  const firebaseConfig = {
    apiKey: "AIzaSyB-LuN8dMfZx8fw7uvrcc5Xhh2CrlIDP4M",
    authDomain: "chatbot-8a2ea.firebaseapp.com",
    projectId: "chatbot-8a2ea",
    storageBucket: "chatbot-8a2ea.appspot.com",
    messagingSenderId: "657153112974",
    appId: "1:657153112974:web:969b8e5b71ada11938c2df",
    measurementId: "G-YFBWWCX231",
  };
  
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    // Initialize Firebase
    const db = getDatabase(app);
    const auth = getAuth(app);
    const chatListRef = ref(db, "chats");
    onChildAdded(chatListRef, (data) => {
      setChats((chats) => [...chats, data.val()]);
    });
  }, []);
  const send = () => {
    const newChatRef = push(chatListRef);
    set(newChatRef, {
      name,
      message: msg,
    });
    setMsg(" ");
  };
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setName(user.displayName);
        console.log(token, user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="container">
      <div className="row  py-2">
        <h5 className="fs-2 text-center">Welcome to Chat Box</h5>
        <div className="col-md-10 mx-auto py-2">
          <div className="d-flex justify-content-between mb-2">
            <input
              type="text"
              placeholder="enter name"
              onChange={(e) => setName(e.target.value)}
              className={Styles.input1}
            />
            <button onClick={googleLogin} className={Styles.googl_login}>
              Google SingIn
            </button>
          </div>
          <div className={Styles.chat_wrapper}>
            User:{name}
            {chats.map((a) => {
              return (
                <div
                  className={`  ${
                    a.name === name ? Styles.front_user : Styles.second_user
                  } `}
                  key={a?.id}
                >
                  <span> {a?.name}</span>:<p className="m-0">{a?.message}</p>
                </div>
              );
            })}
            {/* <div className="row ">
              {chats.map((a) => {
                return (
                  <div className="col-md-12 text-center " key={a?.id}>
                    <div className={Styles.second_user}>
                      {a?.name}:<p className="m-0">{a?.message}</p>
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>
          <div className={Styles.msg}>
            <div className="col-md-10">
              <input
                type="text"
                className={Styles.msg_wrapper}
                placeholder="enter mesage"
                onChange={(e) => setMsg(e.target.value)}
                value={msg}
              />{" "}
            </div>
            <div className="col-md-2">
              <button onClick={send} className={Styles.googl_login}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default chat;
