
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Frame28 from "./components/Frame28";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|frame-28)">
          <Frame28 itemProps={frame28Data.itemProps} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const iconshoppingCartData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/61273750e5d09982f3a6f4f8/releases/612737d60a59a61410296668/img/vector-5@2x.png",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/61273750e5d09982f3a6f4f8/releases/612737d60a59a61410296668/img/vector-3@2x.png",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/61273750e5d09982f3a6f4f8/releases/612737d60a59a61410296668/img/vector-4@2x.png",
};

const buttonPrimaryWithIconData = {
    text1: "ADD TO CART",
    iconshoppingCartProps: iconshoppingCartData,
};

const itemData = {
    media: "https://anima-uploads.s3.amazonaws.com/projects/61273750e5d09982f3a6f4f8/releases/612737d60a59a61410296668/img/media@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/61273750e5d09982f3a6f4f8/releases/612737d60a59a61410296668/img/backdrop-base@1x.png",
    bostonLettuce: "Boston Lettuce",
    text2: "1.10",
    piece: "€ / piece",
    text: "~ 150 gr / piece",
    title: "Spain",
    text3: "Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.",
    buttonPrimaryWithIconProps: buttonPrimaryWithIconData,
};

const frame28Data = {
    itemProps: itemData,
};

