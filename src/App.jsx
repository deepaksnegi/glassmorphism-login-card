import "./App.css";

const loginForm = (
  <form>
    <p>Login</p>
    <input type="email" placeholder="Username" />
    <br />
    <input type="password" placeholder="Password" />
    <br />
    <input type="button" value="Login" />
  </form>
);

function App() {
  return <>{loginForm}</>;
}

export default App;
