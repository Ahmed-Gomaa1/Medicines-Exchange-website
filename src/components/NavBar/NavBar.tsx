import { Link } from "react-router-dom";
import './NavBar.css'; 
function NavBar() {
	return (
		<nav>
		<ul>
		  <li>
			<Link to="/"><h3>Home</h3></Link>
		  </li>
		</ul>
	  </nav>
	);
  }

  export default NavBar;