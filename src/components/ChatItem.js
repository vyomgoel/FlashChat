import { React } from "react";

const ChatItem = (props) => {
  const { chat2 } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          {/* <h5 className="card-title">{chat2.fromusername}</h5>
          <h5 className="card-title">{chat2.fromuserid}</h5> */}
          <p className="card-title">{chat2.message}</p>
          {/* <h5 className="card-title">{chat2.tousername}</h5>
          <h5 className="card-title">{chat2.touserid}</h5> */}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
