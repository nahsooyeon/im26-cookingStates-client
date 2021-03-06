import React, { useState } from "react";
import "../../pages/CSS/survey.css";
import { Link, withRouter } from "react-router-dom";

function Survey(props) {
  const [Score, setScore] = useState(0);

  const onChangeHandler = (e) => {
    if (e.target.checked) {
      setScore(Score + 1);
    } else {
      setScore(Score - 1);
    }
  };

  return (
    <div className="survey-box">
      <h1>π νμκ°μμ μΆνν©λλ€ π</h1>
      <div className="survey-title"> μνλμ μλ¦¬ λ λ²¨ νμ€νΈ!</div>
      <div className="survey-group">
        <div className="question">
          <input
            className="survey-checkbox"
            id="ckb1"
            type="checkbox"
            onChange={onChangeHandler}
          ></input>
          <label htmlFor="ckb1"> μ§κ°μ₯κ³Ό μμ‘°κ°μ₯μ μ°¨μ΄λ₯Ό μκ³  μλ€.</label>
        </div>
        <div className="question">
          <input
            className="survey-checkbox"
            id="ckb2"
            type="checkbox"
            onChange={onChangeHandler}
          ></input>
          <label htmlFor="ckb2">
            λΌλ©΄ λ§κ³  ν  μ μλ μλ¦¬κ° 2κ°μ§ μ΄μμ΄λ€.
          </label>
        </div>
      </div>
      <div className="question">
        <input
          className="survey-checkbox"
          id="ckb3"
          type="checkbox"
          onChange={onChangeHandler}
        ></input>
        <label htmlFor="ckb3">
          μ£Ό 3ν μ΄μ μ¨μ€νλΌμΈμ ν΅ν΄μ μμ¬λ£λ₯Ό κ΅¬λ§€νλ€.
        </label>
      </div>
      <div className="question">
        <label>
          κ³λ λ°μμ λ§λ€κΈ° μν΄μλ λ¬Όμ΄ λμ ν μ½
          <input className="eggScore" type="number"></input>λΆ λμ λ¬κ±μ
          μΆμμΌνλ€.
        </label>
      </div>
      <div className="question">
        <input
          className="survey-checkbox"
          id="ckb4"
          type="checkbox"
          onChange={onChangeHandler}
        ></input>
        <label htmlFor="ckb4">
          λ°±μ’μ μ μλμ λ μνΌλ₯Ό μ°Έκ³ ν΄μ μ§μ  μλ¦¬λ₯Ό λ§λ€μ΄λ³Έ μ μ΄ μλ€.
        </label>
      </div>
      <br />
      <br />
      <button
        className="survey-complete"
        onClick={() => {
          let location = {
            pathname: "/welcome",
            state: { score: Score },
          };
          if (
            [7, 8].includes(Number(document.querySelector(".eggScore").value))
          ) {
            location.state.score += 1;
          }
          props.history.push(location);
        }}
      >
        λ λ²¨ νμ€νΈ μλ£
      </button>
    </div>
  );
}

export default withRouter(Survey);
