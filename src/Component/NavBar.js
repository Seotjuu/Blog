import {
  faMagnifyingGlass,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <>
      <div className="Bar">
        <nav>
          <span>Blog</span>
          <div>
            <a>
              <FontAwesomeIcon icon={faCircleUser} size="xl" />
            </a>
            <a>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;