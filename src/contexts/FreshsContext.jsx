import { createContext } from "react";
import grapes from "../../src/assets/images/grapes.jpg";
import pomidor from "../../src/assets/images/pomidor.jpg";
import nar from "../../src/assets/images/nar.jpg";

export const FreshContext = createContext();
export const FreshsProvider = (props) => {
  console.log(props);
  const infos = [
    {
      img: grapes,
      id: 1,
      name: "    You will vainly look for fruit on it in autumn.",
      titleOne: "Admin",
      titleTwo: "27 December, 2019",
      describtion:
        "    Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus  nisi. Praesent vitae mattis nunc, egestas viverra eros",
      more: "read more",
      type: "fruit",
    },
    {
      img: pomidor,
      id: 2,
      name: "   A man's worth has its season, like tomato.",
      titleOne: "Admin",
      titleTwo: "27 December, 2019",
      describtion:
        "    Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus  nisi. Praesent vitae mattis nunc, egestas viverra eros",
      more: "read more",
      type: "fruit",
    },
    {
      img: nar,
      id: 3,
      name: " Good thoughts bear good fresh juicy fruit.",
      titleOne: "Admin",
      titleTwo: "27 December, 2019",
      describtion:
        "    Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus  nisi. Praesent vitae mattis nunc, egestas viverra eros",
      more: "read more",
      type: "fruit",
    },
  ];
  return (
    <FreshContext.Provider value={{ infos }}>
      {props.children}
    </FreshContext.Provider>
  );
};
