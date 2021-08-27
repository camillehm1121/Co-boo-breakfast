import React from "react";
import Component9964 from "../Component9964";
import HomeHeading from "../HomeHeading";
import Group2718 from "../Group2718";
import Group2594 from "../Group2594";
import Component9412 from "../Component9412";
import Title from "../Title";
import IconSearch from "../IconSearch";
import Group2671 from "../Group2671";
import Button from "../Button";
import Component106272 from "../Component106272";
import Group1 from "../Group1";
import Layer23 from "../Layer23";
import Iconadd from "../Iconadd";
import "./Breakfast.css";

function Breakfast(props) {
  const {
    rectangle2308,
    rectangle2371,
    rectangle2372,
    rectangle2373,
    bread,
    color,
    place,
    x100G,
    x200G,
    x100G2,
    homeHeadingProps,
    group2718Props,
    group2594Props,
    component9412Props,
    titleProps,
    iconSearchProps,
    buttonProps,
    component106272Props,
    group1Props,
    layer23Props,
    iconaddProps,
    iconSearch2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="breakfast screen">
        <div className="group-2742">
          <div className="overlap-group">
            <Component9964 />
            <HomeHeading
              todaysFeed={homeHeadingProps.todaysFeed}
              component9512Props={homeHeadingProps.component9512Props}
            />
            <Group2718 layer2Props={group2718Props.layer2Props} />
            <Group2594
              discoverByMeal={group2594Props.discoverByMeal}
              path11543={group2594Props.path11543}
              card132Props={group2594Props.card132Props}
            />
            <img className="rectangle-2308" src={rectangle2308} />
            <div className="group-2657">
              <div className="overlap-group1">
                <div className="group-2653">
                  <div className="overlap-group1">
                    <Component9412 component941Props={component9412Props.component941Props} />
                    <Title>{titleProps.children}</Title>
                  </div>
                </div>
                <IconSearch src={iconSearchProps.src} />
              </div>
            </div>
            <div className="group-2723">
              <div className="overlap-group12">
                <div className="group-2721">
                  <div className="rectangle-2358"></div>
                  <div className="rectangle-2358-1"></div>
                  <div className="rectangle-2358-2"></div>
                  <div className="rectangle-2358-3"></div>
                  <div className="rectangle-2358-4"></div>
                  <Group2671 />
                  <Button xcontinue={buttonProps.xcontinue} />
                </div>
                <div className="group-2722">
                  <div className="flex-col">
                    <img className="rectangle-2371" src={rectangle2371} />
                    <img className="rectangle-237" src={rectangle2372} />
                    <img className="rectangle-237" src={rectangle2373} />
                  </div>
                  <div className="flex-col-1">
                    <div className="bread acuminprosemicondensed-medium-shadow-blue-16px">{bread}</div>
                    <div className="flex-col-item acuminprosemicondensed-medium-shadow-blue-16px">{color}</div>
                    <div className="flex-col-item acuminprosemicondensed-medium-shadow-blue-16px">{place}</div>
                  </div>
                  <div className="flex-col-2">
                    <div className="x100g acuminprosemicondensed-medium-shadow-blue-16px">{x100G}</div>
                    <div className="flex-col-item-1 acuminprosemicondensed-medium-shadow-blue-16px">{x200G}</div>
                    <div className="flex-col-item-1 acuminprosemicondensed-medium-shadow-blue-16px">{x100G2}</div>
                  </div>
                </div>
              </div>
            </div>
            <Component106272 home={component106272Props.home} setting={component106272Props.setting} />
          </div>
        </div>
        <Group1 className={group1Props.className} networkProps={group1Props.networkProps} />
        <Layer23 src={layer23Props.src} className={layer23Props.className} />
        <Iconadd className={iconaddProps.className} />
        <IconSearch src={iconSearch2Props.src} className={iconSearch2Props.className} />
      </div>
    </div>
  );
}

export default Breakfast;
