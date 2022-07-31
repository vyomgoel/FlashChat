import React, { useContext, useEffect, useRef, useState } from "react";
import userchatContext from "../context/userchat/userchatContext";

import { useNavigate } from "react-router-dom";
import UserChatitem from "./UserChatitem ";
import AddUserChat from "./AddUserChat";

import { Link } from "react-router-dom";

const UserChats = (props) => {
  const context = useContext(userchatContext);
  let navigate = useNavigate();
  const { userchats, getUserChat } = context;
  console.log("userchats", userchats);
  const [UserChats, setUserChats] = useState({
    username: "",
    lastmsg: "",
    lastmsgtime: "",
  });
  const onChange = (e) => {
    setUserChats({ ...UserChats, [e.target.username]: e.target.value });
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserChat();
    } else {
      navigate("/login");
    }
    console.log(useEffect);
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);

  return (
    <>
      {/* <AddUserChat showAlert={props.showAlert} /> */}
      {/* <button
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
                      value={UserChats.username}
                      onChange={onChange}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="d-block ">
        {/* <h2>Your UserChats</h2> */}

        {userchats.map((item) => {
          return (
            <Link to="/chats" key={item._id}>
              {" "}
              <UserChatitem userchat={item} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default UserChats;
