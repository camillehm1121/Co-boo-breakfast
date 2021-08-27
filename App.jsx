import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Breakfast from "./components/Breakfast";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|breakfast)">
          <Breakfast {...breakfastData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const network4Data = {
    path67: "https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/path-67-10@1x.png",
    path68: "https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/path-68-10@1x.png",
};

const group1Data = {
    networkProps: network4Data,
};

const component9512Data = {
    overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/rectangle-2302-1@1x.png",
    group1Props: group1Data,
};

const homeHeadingData = {
    todaysFeed: "Today’s Feed",
    component9512Props: component9512Data,
};

const layer23Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/path-11542-10@1x.png",
};

const group2718Data = {
    layer2Props: layer23Data,
};

const totalCo2Data = {
    totalCo: "Total CO",
    number: "2",
    generated: "Generated",
};

const card132Data = {
    totalCo2Props2: totalCo2Data,
};

const group2594Data = {
    discoverByMeal: "Discover by Meal",
    path11543: "https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/path-11543@1x.png",
    card132Props: card132Data,
};

const component9412Data = {
    className: "group-2641",
};

const component94122Data = {
    component941Props: component9412Data,
};

const titleData = {
    children: "Breakfast",
};

const iconSearchData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/line@1x.png",
};

const buttonData = {
    xcontinue: "CONTINUE",
};

const component106272Data = {
    home: "https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/path-11535-1@1x.png",
    setting: "https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/setting-10@1x.png",
};

const network42Data = {
    path67: "https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/path-67-10@1x.png",
    path68: "https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/path-68-10@1x.png",
};

const group12Data = {
    className: "group-1-1",
    networkProps: network42Data,
};

const layer232Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/path-11542-10@1x.png",
    className: "layer-2-1",
};

const iconadd2Data = {
    className: "iconadd-1",
};

const iconSearch2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/line-2@1x.png",
    className: "icon-search-1",
};

const breakfastData = {
    rectangle2308: "https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/rectangle-2308-10@1x.png",
    rectangle2371: "https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/rectangle-2371@1x.png",
    rectangle2372: "https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/rectangle-2372@1x.png",
    rectangle2373: "https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/rectangle-2373@1x.png",
    bread: "Bread",
    color: "Orange",
    place: "Egg",
    x100G: "100g",
    x200G: "200g",
    x100G2: "100g",
    homeHeadingProps: homeHeadingData,
    group2718Props: group2718Data,
    group2594Props: group2594Data,
    component9412Props: component94122Data,
    titleProps: titleData,
    iconSearchProps: iconSearchData,
    buttonProps: buttonData,
    component106272Props: component106272Data,
    group1Props: group12Data,
    layer23Props: layer232Data,
    iconaddProps: iconadd2Data,
    iconSearch2Props: iconSearch2Data,
};

