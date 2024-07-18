import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion} from "framer-motion";

const Sidebar = () => {
  const [selected, setSetected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);

  return (
    <>
      <div className="bars" style={expanded ? { left: "60%" } : { left: "5%" }} onClick={() => setExpanded(!expanded)}>
        <UilBars />
      </div>

      <motion.div className="sidebar " variants={sidebarVariants} animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div   >
{/*           {Drop your Logo} */}
            
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSetected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
