import React, { createContext, useState } from "react";

const PageContext = createContext();
const CurrentPageContext = createContext();
const TaskContext = createContext();

const PageProvider = ({ children }) => {
  const savedTodos = JSON.parse(localStorage.getItem("todos"));

  const [pages, addPages] = useState(loadPages());
  const [currentPage, addCurrentPage] = useState(0);
  const [taskStyles, setTaskStyles] = useState(loadTodos());

  function loadPages() {
    return savedTodos ? savedTodos.length - 1 : 0;
  }

  function loadTodos() {
    return savedTodos ? savedTodos : [[]];
  }

  const handleAddPages = (value) => {
    if (value > 0) {
      addPages((prevPages) => prevPages + 1);
    } else if (value < 0 && pages !== 0) {
      addPages((prevPages) => prevPages - 1);
    }
  };

  const handleAddCurrentPage = (value) => {
    if (value > 0 && currentPage < pages) {
      addCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    } else if (value < 0 && currentPage !== 0) {
      addCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    }
  };

  return (
    <PageContext.Provider value={{ pages, addPages: handleAddPages }}>
      <CurrentPageContext.Provider
        value={{ currentPage, addCurrentPage: handleAddCurrentPage }}
      >
        <TaskContext.Provider value={{ taskStyles, setTaskStyles }}>
          {children}
        </TaskContext.Provider>
      </CurrentPageContext.Provider>
    </PageContext.Provider>
  );
};

export { PageContext, CurrentPageContext, TaskContext };
export default PageProvider;
