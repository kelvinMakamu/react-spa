import { Route } from "react-router-dom";

const Welcome = () => {
    return (
        <div>
            <h2>The Welcome Page</h2>
            <Route path="/welcome/new-user">
                <p>Welcome, new user</p>
            </Route>
        </div>

    );
}

export default Welcome;