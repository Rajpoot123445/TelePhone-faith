import React from 'react';
import "./MainPage.scss";
import Logo from "../assets/logo.png"

const Trust = () => {
  return (
    <div className='main-page'>
      <header className="main-page__header">
        <img
          src={Logo}
          alt="Faith Logo"
          className="main-page__logo"
        />
        <div className="flex justify-around items-center">
          <img
            src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/tp_reviews.png"
            alt="Tamar Logo"

            className="h-7 md:w-[42%]"
          />

          <a href="#" className="flex justify-center items-center">
            <img
              src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/basketico.png"
              alt="Tamar Logo"
            />
            <span className=" mt-3">View Basket</span>
          </a>
        </div>
      </header>
    </div>

  )
}

export default Trust