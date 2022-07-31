import { React } from "react";

const UserChatitem = (props) => {
  const { userchat } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="mx-3 my-3 text-decoration-none">
          <h5 className=" text-dark text-decoration-none">
            {userchat.username}
          </h5>
          <p className=" text-dark text-decoration-none">{userchat.lastmsg}</p>
          <p className=" text-dark text-decoration-none">
            {userchat.lastmsgtime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserChatitem;
