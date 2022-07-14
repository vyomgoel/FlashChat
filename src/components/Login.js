import React from "react";

const Login = () => {
  return (
    <div>
      <>
        <form>
          <div class="mb-3">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="mb-3">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              name="password"
              placeholder="Password"
            />
          </div>

          <button type="submit" class="btn btn-primary" onSubmit={}>
            Submit
          </button>
        </form>
      </>
    </div>
  );
};

export default Login;
