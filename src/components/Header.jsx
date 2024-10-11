import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Header.css";
import { CiMail, CiMobile3, CiMicrophoneOn } from "react-icons/ci";
import { LiaLaptopCodeSolid, LiaHeadsetSolid } from "react-icons/lia";
import { FaChartPie, FaWhatsapp } from "react-icons/fa6";
import { PiUserSwitchBold, PiUserSoundLight } from "react-icons/pi";
import { BsAirplane } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiVibratingSmartphone } from "react-icons/gi";
import { ImTree } from "react-icons/im";
import { Link } from "react-router-dom";

function Header() {
  const [dropdownsOpen, setDropdownsOpen] = useState(0);

  const handleDropDowns = (numb) => {
    setDropdownsOpen(numb);
    if (numb === dropdownsOpen) {
      setDropdownsOpen(0);
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="navList">
          <li className="dropdown">
            <button
              onClick={() => handleDropDowns(1)}
              className="dropdownButton navItem"
            >
              Phone Numbers <IoMdArrowDropdown />
            </button>
            {dropdownsOpen === 1 && (
              <div className="dropdownMenu" style={{ minWidth: "450px" }}>
                <h3 className="dropdownTitle">Phone Numbers</h3>
                <p className="dropdownDescription">
                  Connect With Your Customers, Pick Your Perfect Number
                </p>
                <ul className="dropdownList">
                  <li className="dropdownItem">
                    <span className="dot"></span>
                    <div className="itemContent">
                      <strong className="itemTitle">01,02 Local Numbers</strong>
                      <p className="itemDescription">Mobile landline numbers</p>
                    </div>
                  </li>
                  <li className="dropdownItem">
                    <span className="dot"></span>
                    <div className="itemContent">
                      <strong className="itemTitle">0800 Numbers</strong>
                      <p className="itemDescription">
                        Free to call from landlines & mobiles
                      </p>
                    </div>
                  </li>
                  <li className="dropdownItem">
                    <span className="dot"></span>
                    <div className="itemContent">
                      <strong className="itemTitle">0333 Numbers</strong>
                      <p className="itemDescription">
                        Numbers for a nationwide presence
                      </p>
                    </div>
                  </li>
                  <li className="dropdownItem">
                    <span className="dot"></span>
                    <div className="itemContent">
                      <strong className="itemTitle">0300 Numbers</strong>
                      <p className="itemDescription">
                        For charities & public bodies
                      </p>
                    </div>
                  </li>
                  <li className="dropdownItem">
                    <span className="dot"></span>
                    <div className="itemContent">
                      <strong className="itemTitle">VoIP System</strong>
                      <p className="itemDescription">
                        Complete Business Phone Solution
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="dropdown">
            <button
              onClick={() => handleDropDowns(2)}
              className="dropdownButton navItem"
            >
              Number Features <IoMdArrowDropdown />
            </button>
            {dropdownsOpen === 2 && (
              <div
                className="dropdownMenu featuresDropDown"
              >
                <div>
                  <h3 className="dropdownTitle">FREE Features</h3>
                  <p className="dropdownDescription">
                    With every Tamar number, you'll get the below features
                    completely free
                  </p>
                </div>
                <div className="bglight" style={{ padding: "30px" }}>
                  <h3 className="dropdownTitle">FREE Features</h3>
                  <p className="dropdownDescription">
                    With every Tamar number, you'll get the below features
                    completely free
                  </p>
                  <ul className="dropdownList">
                    <li className="dropdownItem">
                      <span>
                        <PiUserSoundLight className="extraSvg" />
                      </span>
                      <div className="itemContent">
                        <strong className="itemTitle">
                          01,02 Local Numbers
                        </strong>
                        <p className="itemDescription">
                          Mobile landline numbers
                        </p>
                      </div>
                    </li>
                    <li className="dropdownItem">
                      <span>
                        <GiVibratingSmartphone className="extraSvg" />
                      </span>
                      <div className="itemContent">
                        <strong className="itemTitle">0800 Numbers</strong>
                        <p className="itemDescription">
                          Free to call from landlines & mobiles
                        </p>
                      </div>
                    </li>
                    <li className="dropdownItem">
                      <span>
                        <ImTree className="extraSvg" />
                      </span>
                      <div className="itemContent">
                        <strong className="itemTitle">0333 Numbers</strong>
                        <p className="itemDescription">
                          Numbers for a nationwide presence
                        </p>
                      </div>
                    </li>
                    <li className="dropdownItem">
                      <span>
                        <CiMicrophoneOn className="extraSvg" />
                      </span>
                      <div className="itemContent">
                        <strong className="itemTitle">0300 Numbers</strong>
                        <p className="itemDescription">
                          For charities & public bodies
                        </p>
                      </div>
                    </li>
                    <li className="dropdownItem">
                      <span>
                        <LiaHeadsetSolid className="extraSvg" />
                      </span>
                      <div className="itemContent">
                        <strong className="itemTitle">VoIP System</strong>
                        <p className="itemDescription">
                          Complete Business Phone Solution
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li className="dropdown">
            <button
              onClick={() => handleDropDowns(3)}
              className="dropdownButton navItem"
            >
              Solutions <IoMdArrowDropdown />
            </button>
            {dropdownsOpen === 3 && (
              <div className="dropdownMenu" style={{ minWidth: "300px" }}>
                <ul>
                  <li className="hover:bg-gray-300 px-2 py-1 rounded-md"> <Link to="/voip" className="text-lg font-sans font-bold"> VoIP Solutions </Link></li>
                  <li className="hover:bg-gray-300 px-2 py-1 rounded-md"> <Link to="/whatsapp-bussiness" className="text-lg font-sans font-bold"> WhatsApp Bussiness </Link></li>
                  <li className="hover:bg-gray-300 px-2 py-1 rounded-md"> <Link to="/outbound-call" className="text-lg font-sans font-bold"> Outbound Calling </Link></li>
                  <li className="hover:bg-gray-300 px-2 py-1 rounded-md"> <Link to="/isdn" className="text-lg font-sans font-bold"> ISDN Switch Off </Link></li>
                </ul>
              </div>
            )}
          </li>
          <li className="dropdown">
            <button
              onClick={() => handleDropDowns(4)}
              className="dropdownButton navItem"
            >
              Partners <IoMdArrowDropdown />
            </button>
            {dropdownsOpen === 4 && (
              <div className="dropdownMenu" style={{ minWidth: "450px" }}>
                <h3 className="dropdownTitle">Phone </h3>
                <p className="dropdownDescription">
                  Connect With Your Customers, Pick Your Perfect Number
                </p>

              </div>
            )}
          </li>
          <li className="dropdown">
            <button
              onClick={() => handleDropDowns(5)}
              className="dropdownButton navItem"
            >
              Help Center <IoMdArrowDropdown />
            </button>
            {dropdownsOpen === 5 && (
              <div className="dropdownMenu" style={{ minWidth: "450px" }}>
                <h3 className="dropdownTitle">Phone </h3>
                <p className="dropdownDescription">
                  Connect With Your Customers, Pick Your Perfect Number
                </p>

              </div>
            )}
          </li>
          <li className="dropdown">
            <button
              onClick={() => handleDropDowns(6)}
              className="dropdownButton navItem"
            >
              Team Tamar <IoMdArrowDropdown />
            </button>
            {dropdownsOpen === 6 && (
              <div className="dropdownMenu" style={{ minWidth: "450px" }}>
                <h3 className="dropdownTitle">Phone </h3>
                <p className="dropdownDescription">
                  Connect With Your Customers, Pick Your Perfect Number
                </p>

              </div>
            )}
          </li>
          <li className="navItem mt10"> <Link to="/contact-us"> Contact </Link></li>
        </ul>
      </nav>
      <Link to="/control-panel" className="accountButton">
        My Account
        <IoMdArrowDropdown style={{ transform: "translateY(4px)" }} />
      </Link>
    </header>
  );
}

export default Header;
