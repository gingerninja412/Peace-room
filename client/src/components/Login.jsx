function Login() {
  return ( 
    <div className="flex justify-center items-center">
      <div>
        <form >
          <div id="form-item">
            <label >Enter your username</label>
            <input type="text" />
          </div>
          <div id="form-item">
            <label >Enter your password</label>
            <input type="text" />
          </div>
          <div id="user-type">
            <div id="form-item">
              <label>Student</label>
              <input type="radio" name="user-type"/>
            </div>
            <div id="form-item">
              <label>Teacher</label>
              <input type="radio" name="user-type"/>
            </div>
            <div id="form-item">
              <label>Admin</label>
              <input type="radio" name="user-type"/>
            </div>
          </div>
        </form>
      </div>
    </div>
   );
}

export default Login;