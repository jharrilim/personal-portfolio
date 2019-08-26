import React, { Component } from "react";
import "./Capabilities.css";
import UArrow from "../../assets/images/header/up_arrow.png";
import AppI from "../../assets/images/header/app.png";
import SoftwareI from "../../assets/images/header/software.png";
import FullStackI from "../../assets/images/header/fullstack.png";
import Abilities from "../../components/Capabilities/Abilities/Abilities";
import Footer from "../../components/Footer/Footer";
import Technologies from "../../components/Capabilities/Technologies/Technologies";
import LineOfWork from "../../components/Capabilities/Technologies/LineOfWork/LineOfWork";
import Counter from "../../components/Capabilities/Counter/Counter";
import ReactI from "../../assets/images/header/react.png";
import Redux from "../../assets/images/header/redux.png";
import Vue from "../../assets/images/header/vue.png";
import Firebase from "../../assets/images/header/firebase.png";
import Android from "../../assets/images/header/android.png";
import WebDesign from "../../assets/images/header/web_design.png";

class Capabilities extends Component {
  state = {
    abilities: [
      {
        language: "Jokloklia",
        percentage: 90,
        href:
          "https://github.com/msanvarov?utf8=%E2%9C%93&tab=repositories&q=&type=&language=python"
      },
      {
        language: "Ubrungru",
        percentage: 95,
        href:
          "https://github.com/msanvarov?utf8=%E2%9C%93&tab=repositories&q=&type=&language=javascript"
      },
      {
        language: "NessJS",
        percentage: 80,
        href: "https://github.com/msanvarov?tab=repositories"
      },
      {
        language: "🅱️eact",
        percentage: 85,
        href:
          "https://github.com/msanvarov?utf8=%E2%9C%93&tab=repositories&q=&type=&language=java"
      }
    ],
    accolades: [
      {
        len: 2,
        description: "Enterprise Yotes Built"
      },
      {
        len: 4,
        description: "Hackathons Yeeted on"
      }
    ],
    lineOfWork: [
      {
        title: "Spicy Web Design",
        description: "Prototyping with XD and Mobirise",
        img: WebDesign
      },
      {
        title: "Full Salim Development",
        description: "MERN, FR, FV, MEVN",
        img: FullStackI
      },
      {
        title: "Software Development",
        description: "Jokloklia, Jokloklia, Jokloklia",
        img: SoftwareI
      },
      {
        title: "Ubrungru Development",
        description: "Ubrungru and Logloglia",
        img: AppI
      }
    ],
    technologies: [
      { picture: Vue, title: "Vue", description: "Nuxt" },
      { picture: ReactI, title: "React", description: "For web and native" },
      { picture: Redux, title: "Redux", description: "For React" },
      {
        picture: Firebase,
        title: "Firebase",
        description: "For React and Android"
      },
      {
        picture: Android,
        title: "Android",
        description: "Google Architectural Guides"
      }
    ]
  };
  render() {
    return (
      <div className="prt_services_wrapper prt_toppadder115">
        <div className="prt_close_wrapper">
          <img
            src={UArrow}
            alt="Close"
            className="prt_close"
            onClick={this.props.toRender}
          />
        </div>
        <LineOfWork low={this.state.lineOfWork} />
        <Counter accolades={this.state.accolades} />
        <Abilities abilities={this.state.abilities} />
        <Technologies tech={this.state.technologies} />
        <Footer />
      </div>
    );
  }
}

export default Capabilities;
