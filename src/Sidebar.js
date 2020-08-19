import React from 'react'
import './Sidebar.css';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Clever</h2>
          <h3>
            <FiberManualRecordIcon />
            Slava Polishchuk
          </h3>
        </div>
        <CreateIcon style={{color: 'blue'}} />
      </div>
    </div>
  )
}

export default Sidebar;
