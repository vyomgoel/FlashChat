import React, { useContext, useEffect, useRef, useState } from "react";
import chatContext from "../context/chat/chatContext";

import { useNavigate } from "react-router-dom";
import AddChat from "./AddChat";
import ChatItem from "./ChatItem";

const Chats = (props) => {
  const context = useContext(chatContext);
  let navigate = useNavigate();
  const { chat, getChat } = context;

  const [Chats, setChats] = useState({
    // fromusername: "",
    // fromuserid: "",
    message: "",
    // tousername: "",
    // touserid: "",
  });
  console.log(chat);
  const onChange = (e) => {
    setChats({ ...Chats, [e.target.username]: e.target.value });
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getChat();
    } else {
      navigate("/login");
    }
    console.log(useEffect);
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);

  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-body">
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      username="username"
                      minLength={2}
                      required
                      value={Chats.username}
                      onChange={onChange}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <h2>Your Chats</h2>

        {chat.map((item) => {
          return <ChatItem key={item._id} chat2={item} />;
        })}
      </div>
      <AddChat showAlert={props.showAlert} />
    </>
  );
};

export default Chats;
