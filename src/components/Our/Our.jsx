import React, { useContext } from "react";
import style from "./Our.module.css";
import grapes from "../../assets/images/grapes.jpg";
import pomidor from "../../assets/images/pomidor.jpg";
import nar from "../../assets/images/nar.jpg";
import { FreshContext } from "../../contexts/FreshsContext";

const Our = (props) => {
  console.log(props);
  const { infos } = useContext(FreshContext);
  console.log(infos);
  return (
    <div className={style.allOfOur}>
      <div className={style.allOur}>
        <h1 className={style.ours}>Our News</h1>
        <p className={style.impus}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas <br /> itaque eveniet beatae optio.
        </p>
        <div></div>
        <div className={style.allFruits}>
          {infos.map((mehsul, idx) => (
            <div className={style.fruit} key={idx}>
              <div>
                {" "}
                <img
                  className={style.nar}
                  src={mehsul.img}
                  alt=""
                />
              </div>
              <div
                className={style.look}
                style={{ color: "black", fontSize: "20px" }}
              >
                {mehsul.name}
              </div>
              <div className={style.yanashi}>
                <div>{mehsul.titleOne}</div>
                <div>{mehsul.titleTwo}</div>
              </div>
              <div className={style.title}>{mehsul.describtion}</div>
              {/* <div className={style.more}>{mehsul.more}</div> */}
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default Our;
