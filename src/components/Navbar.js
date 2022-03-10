
import { useNavigate } from "react-router-dom";
import "../styles.css";
function Navbar(){

  const navigate = useNavigate();
    return(
        <div>
              <nav className="nav">
        <span className="nav-left">
        <a href="/">spotify</a>
        </span>
        <ul >
         <span className="nav-right">
         <li>  <a  onClick={()=> navigate("/Premium")}>Premium</a></li>
          <li><a href="/Support">Support</a></li>
          <li><a href="/Download">Download</a></li>
          <li>|</li>
          <li><a href="/Signup">Signup</a></li>
          <li><a href="/Login">Log in</a></li>
         </span>
         
        </ul>
      
      </nav>
 
        </div>
    )
};
export default Navbar;