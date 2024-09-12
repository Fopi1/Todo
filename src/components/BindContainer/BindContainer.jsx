import React from "react";
import BindTemplate from "../BindTemlpate/BindTemplate";
import "./BindContainer.css";

const BindContainer = () => {
  const bindTemplateValues = [
    {
      name: "Окно фильтрации",
      description: "Открыть окно сортировки тудушек",
      binds: ["R"],
    },
    {
      name: "Создание тудушки",
      description: "Открыть модальное окно для создания тудушки",
      binds: ["A", ",", "Q"],
    },
    {
      name: "Перелистка страниц",
      description: "Листает страницы по убыванию",
      binds: ["A", ",", "←"],
    },
    {
      name: "Перелистка страниц",
      description: "Листает страницы по возрастанию",
      binds: ["D", ",", "→"],
    },
  ];
  return (
    <div className="bind-container">
      {bindTemplateValues.map((value, index) => (
        <BindTemplate
          key={index}
          name={value.name}
          description={value.description}
          binds={value.binds}
        />
      ))}
    </div>
  );
};

export default BindContainer;
