import React, { useContext, useEffect, useRef, useState } from "react";
import ContactContext from "../context/contact/contactContext";

import { useNavigate } from "react-router-dom";
import ContactItem from "./ContactItem";
import AddContact from "./AddContact";

const Contacts = (props) => {
  const context = useContext(ContactContext);
  let navigate = useNavigate();
  const { contacts, getcontacts } = context;
  // console.log("contacts", contacts);
  const [Contacts, setContacts] = useState({
    name: "",
    email: "",
  });
  // const onChange = (e) => {
  //   setContacts({ ...Contacts, [e.target.name]: e.target.value });
  //};
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getcontacts();
    } else {
      navigate("/login");
    }
    console.log(useEffect);
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);

  return (
    <>
      <AddContact showAlert={props.showAlert} />
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
                  {/* <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      username="username"
                      minLength={2}
                      required
                      value={contacts.name}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      username="username"
                      minLength={2}
                      required
                      value={contacts.email}
                      onChange={onChange}
                    />
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-block">
        <h2>Your Contacts</h2>

        {contacts.map((item) => {
          return <ContactItem contacts={item} />;
        })}
      </div>
    </>
  );
};

export default Contacts;
