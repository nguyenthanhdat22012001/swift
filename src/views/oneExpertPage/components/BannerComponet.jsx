import React from "react";
import "./BannerComponetStyle.scss";
import Banner_img from "../../../assets/svg/banner.svg";
import LogoOneCommerce from "../../../assets/svg/logo-one-commerce.svg";
import { Heading, Card, ButtonGroup, Button } from "@shopify/polaris";

export default function BannerComponet() {
  return (
    <div className="BannerComponet">
      <Card>
        <div className="BannerComponet__right">
          <img src={LogoOneCommerce} alt="" className="BannerComponet__image-logo" />
          <Heading element="h2">Maximize your website's perfomance</Heading>
          <p className="BannerComponet__text">
            Slow loading pages make your store look unprofessional, and could
            lead to a dramatic decrease in revenue. We're here to help.
          </p>
          <ButtonGroup>
            <Button>Hire Experts</Button>
            {/* <button clas>Talk to an expert</button> */}
            <Button primary>Talk to an expert</Button>
          </ButtonGroup>
        </div>
        <img src={Banner_img} alt="" />
      </Card>
    </div>
  );
}
