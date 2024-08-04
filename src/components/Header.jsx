import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Header.css";

function Header() {
  const [dropdownsOpen, setDropdownsOpen] = useState();

  const handleDropDowns = (numb) => {
    if (dropdownsOpen === numb) {
      setDropdownsOpen(0);
    }
    setDropdownsOpen(numb);
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
              <div className="dropdownMenu" style={{ minWidth: "450px" }}>
                <h3 className="dropdownTitle">Phone </h3>
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
            <button onClick={() => handleDropDowns(3)} className="dropdownButton navItem">
              Solutions <IoMdArrowDropdown />
            </button>
            {dropdownsOpen === 3 && (
              <div className="dropdownMenu" style={{ minWidth: "450px" }}>
                <h3 className="dropdownTitle">Phone </h3>
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
            <button onClick={() => handleDropDowns(4)} className="dropdownButton navItem">
              Partners <IoMdArrowDropdown />
            </button>
            {dropdownsOpen === 4 && (
              <div className="dropdownMenu" style={{ minWidth: "450px" }}>
                <h3 className="dropdownTitle">Phone </h3>
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
            <button onClick={() => handleDropDowns(5)} className="dropdownButton navItem">
              Help Center <IoMdArrowDropdown />
            </button>
            {dropdownsOpen === 5 && (
              <div className="dropdownMenu" style={{ minWidth: "450px" }}>
                <h3 className="dropdownTitle">Phone </h3>
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
            <button onClick={() => handleDropDowns(6)} className="dropdownButton navItem">
              Team Tamar <IoMdArrowDropdown />
            </button>
            {dropdownsOpen === 6 && (
              <div className="dropdownMenu" style={{ minWidth: "450px" }}>
                <h3 className="dropdownTitle">Phone </h3>
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
          <li className="navItem mt10">Contact</li>
        </ul>
      </nav>
      <button className="accountButton">
        My Account
        <IoMdArrowDropdown style={{ transform: "translateY(4px)" }} />
      </button>
    </header>
  );
}

export default Header;
