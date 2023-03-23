import './WriteButton.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function WriteButton() {

  return (
    <div>
        <button className='write__button'>
            <Link to="/write">
            <i><FontAwesomeIcon icon={faPlus} size="4x"/></i>
            </Link>
        </button>
    </div>
  );
}

export default WriteButton;
