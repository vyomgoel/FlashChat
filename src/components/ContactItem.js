import { React } from "react";

const ChatItem = (props) => {
  const { contacts } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title"> ={contacts.name}</h5>
          <h5 className="card-title"> ={contacts.email}</h5>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
