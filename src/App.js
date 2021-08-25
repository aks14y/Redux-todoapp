import TodoContainer from "./Pages/Todos/TodoContainer";
import './App.css'
import PostContainer from "./Pages/Posts/PostContainer";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import useAuth from "./Auth";
import { Button } from "reactstrap";

function App() {
  const [isAuth,login,logout]=useAuth(false);

  return (
    <div className="App text-secondary ">
      <Router>
        <h1 className="text-center">Welcome</h1>
        <Link to="/todos"><Button color="primary mb-4 me-4">Todos(protected)</Button></Link>
        
        <Link to="/posts"><Button className="mb-4">Posts</Button></Link>
        {isAuth ? (<><div>You are logged in</div><br/><Button onClick={logout}>Logout</Button></>) : (<><div>Your are Logged out</div><br/><Button onClick={login}>Login</Button></>)}
        <Switch>
          <Route path='/' exact component={Home}/>
         
          <Route path='/posts' component={PostContainer}/>
          <ProtectedRoutes path='/todos' component={TodoContainer} auth={isAuth}/>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
