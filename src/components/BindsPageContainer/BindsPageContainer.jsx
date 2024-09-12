import React from "react";
import "./BindsPageContainer.css";
import Button from "../buttons/button";
import ButtonArrow from "../arrows/ButtonArrow";
import { Link } from "react-router-dom";
import BindContainer from "../BindContainer/BindContainer";

const BindsPageContainer = () => {
  return (
    <div className="binds-page__container">
      <div className="binds-page__container__inner">
        <header className="binds-page__header">
          <nav className="navbar">
            <Link to="/Todo">
              <Button>
                <ButtonArrow style={{ rotate: "180deg" }} /> Назад
              </Button>
            </Link>
          </nav>
        </header>
        <main>
          <BindContainer />
        </main>
      </div>
    </div>
  );
};

export default BindsPageContainer;
