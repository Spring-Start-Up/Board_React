import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";


function Header() {
  return (
    <div className='header'>
        <div className='header__back'>
            <i><FontAwesomeIcon icon={faArrowLeft} size="lg" /></i>
            <h3> 공대생 게시판 </h3>
        </div>
        <div className='header__more'>
            <i><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" /></i>
            <i><FontAwesomeIcon icon={faEllipsisVertical} size="lg" /></i>
        </div>
    </div>
  );
}

export default Header;
