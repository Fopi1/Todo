import React, { useContext, useState } from "react";
import Task from "../../components/task/Task";
import { dateToSeconds } from "../../functions/dateToSeconds";
import { CurrentPageContext } from "../../Context/PageContext";

const ToDoClosest = ({ taskStyles, deleteStyle }) => {
  const { currentPage } = useContext(CurrentPageContext);
  const [closestTask, setClosestTask] = useState(null);

  const currentPageTaskStyles = taskStyles[currentPage];

  if (currentPageTaskStyles.length > 0) {
    const tempClosestTask = currentPageTaskStyles.reduce((acc, task) => {
      console.log(taskStyles);

      const taskEndTime = dateToSeconds(task.endTime, task.endDate);
      const accEndTime = dateToSeconds(acc.endTime, acc.endDate);
      return taskEndTime < accEndTime ? task : acc;
    }, currentPageTaskStyles[0]);
    if (tempClosestTask !== closestTask) {
      setClosestTask(tempClosestTask);
    }
  }
  return (
    <div style={{ backgroundColor: "rgba(34,32,32,0.5)" }}>
      {closestTask ? <Task {...closestTask} deleteStyle={deleteStyle} /> : null}
    </div>
  );
};

export default ToDoClosest;
