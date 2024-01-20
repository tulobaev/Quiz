import React from "react";
import images from "../img/Без названия (1).jpeg";
import { questions } from "../App";

const Result = ({ result }) => {
  return (
    <div className="boxRes">
      <div className="hap">
        <div className="happy">
          <img src={images} alt="" />
        </div>
        <h2>
          {result === 3
            ? ` Поздравляю  вы ответили на ${questions.length} из 3 вопросов`
            : `Поздравляю !вы ответили на ${result} из 3 вопросов:`}
        </h2>
        <a href="/">
          <button>Try</button>
        </a>
      </div>
    </div>
  );
};

export default Result;
