import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./ToDoHeader.css";
import Button from "../../components/buttons/button";
import ButtonArrow from "../../components/arrows/ButtonArrow";
import { CurrentPageContext, PageContext } from "../../Context/PageContext";
import BindsLogo from "../../components/BindsLogo/BindsLogo";

const TodoHeader = ({ stateOfFilter, stateOfModal }) => {
  const { pages } = useContext(PageContext);
  const { currentPage } = useContext(CurrentPageContext);
  return (
    <div className="Todo-Header">
      <div className="Todo-Header-wrapper">
        <Button
          onClick={() => {
            stateOfFilter((state) => !state);
          }}
        >
          <ButtonArrow style={{ marginTop: 5, rotate: "90deg" }} />
          <span>Фильтр</span>
        </Button>
        <Link to="/binds">
          <Button>
            <BindsLogo>B</BindsLogo>
            Бинды
          </Button>
        </Link>
        <Button
          onClick={() => {
            console.log("da");
            localStorage.clear();
          }}
        >
          Clear
        </Button>
      </div>
      <div className="pages-container">
        <span>Количество страниц:</span>
        <div className="pages">
          {currentPage + 1}/{pages + 1}
        </div>
      </div>
      <Button
        stateCallback={stateOfModal}
        styleButton={{
          marginRight: 20,
          fontSize: 50,
        }}
        styleComponents={{
          marginBottom: 6,
        }}
      >
        +
      </Button>
    </div>
  );
};

export default TodoHeader;
