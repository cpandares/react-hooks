import 
{   
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,

  } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScrenn";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./Navbar";
export const AppRouter = ()=>{

    return (
        <Router>

            <div>
                <NavBar />
                <div className="container mt-1">

                    <Switch>
                        <Route exact path="/" component={ HomeScreen } />
                        <Route exact path="/login" component={ LoginScreen } />
                        <Route   exact path="/about" component={AboutScreen } />

                        <Redirect to="/login" />

                    </Switch>

                </div>
               


            </div>


        </Router>

    )

}