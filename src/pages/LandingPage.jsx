import { Link } from "react-router-dom";
const LandingPage=()=>{
    return(
        <div className="outer">
            <h1>Welcome Liquor Store</h1>
            <h3>Please Login or Register to continue</h3>
            <div className="inner">
                <Link to="/login">Login</Link>
                <Link to="/register-customer">Register as Customer</Link>
                <Link to="/register-owner">Register as Owner</Link>

            </div>
        </div>
    );
}
export default LandingPage;