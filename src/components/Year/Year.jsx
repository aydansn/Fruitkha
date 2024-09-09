import style from "./Year.module.css";

const Year = () => {
  //   console.log(props);
  //   const { years } = useContext(YearContext);
  //   console.log(years);

  return (
    <div className={style.video}>
      <div className={style.allYear}>
        <div className={style.leftYearr}>
          <iframe className={style.if}
           
            src="https://www.youtube.com/embed/DBLlFWYcIGQ?si=WBRIz7FeBL0rJAKQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className={style.rightYear}>
          <p className={style.since}>Since Year 1999</p>
          <h1 className={style.are}>
            <strong>We are Fruitkha</strong>
          </h1>
          <p className={style.etiam}>
            Etiam vulputate ut augue vel sodales. In sollicitudin neque et{" "}
            <br /> massa porttitor vestibulum ac vel nisi. Vestibulum placerat
            eget <br /> dolor sit amet posuere. In ut dolor aliquet, aliquet
            sapien sed, <br /> interdum velit. Nam eu molestie lorem.
          </p>
          <p className={style.sit}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
            Sapiente facilis illo repellat veritatis minus, et labore minima{" "}
            <br /> mollitia qui ducimus.
          </p>
          {/* <button className={style.know}>know more</button> */}
        </div>
      </div>
    </div>
  );
};

export default Year;
