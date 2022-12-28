import {useState} from "react";
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Accordion = (res) => {
    const [show, setShow] = useState(false)
  return (
    <div className="user" key={res.id}>
      <div className="item">
        <div className="inneritem">
         { <SpeedOutlinedIcon className="speedicon" />}
          <span>{res.title}</span>
        </div>
        {show ? (
          <KeyboardArrowDownIcon
            className="cheveron"
            onClick={() => setShow(!show)}
          />
        ) : (
          <ChevronRightOutlinedIcon
            className="cheveron"
            onClick={() => setShow(!show)}
          />
        )}
      </div>
      {show && (
        <div className="main">
          <div className="inner-item">
            <ChevronRightOutlinedIcon className="cheveron" />
            <span>{res.admin}</span>
          </div>
          <div className="inner-item">
            <ChevronRightOutlinedIcon className="cheveron" />
            <span>{res.student}</span>
          </div>
          <div className="inner-item">
            <ChevronRightOutlinedIcon className="cheveron" />
            <span>{res.teacher}</span>
          </div>
          <div className="inner-item">
            <ChevronRightOutlinedIcon className="cheveron" />
            <span>{res.parent}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion