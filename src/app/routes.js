import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { SideBarMail } from "../components/sidebarmail";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [showSideBarMail, setShowSideBarMail] = useState(false);
  const [showAnimatedRoutes, setAnimatedRoutes] = useState(false);

  useEffect(() => {
    const socialIconsTimeout = setTimeout(() => {
      setShowSocialIcons(true);
    }, 500);

    const sideBarMailTimeout = setTimeout(() => {
      setShowSideBarMail(true);
    }, 500);

    const AnimatedRoutesTimeout = setTimeout(() => {
      setAnimatedRoutes(true);
    }, 1000);

    return () => {
      clearTimeout(socialIconsTimeout);
      clearTimeout(sideBarMailTimeout);
      clearTimeout(AnimatedRoutesTimeout);
    };
  }, []);

  return (
    <div className="s_c">
      <FadeInComponent show={showAnimatedRoutes}>
        <AnimatedRoutes />
      </FadeInComponent>
      <FadeInComponent show={showSocialIcons}>
        <Socialicons />
      </FadeInComponent>
      <FadeInComponent show={showSideBarMail}>
        <SideBarMail />
      </FadeInComponent>
    </div>
  );
}

function FadeInComponent({ show, children }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let interval;
    if (show) {
      interval = setInterval(() => {
        setOpacity((prevOpacity) => {
          const newOpacity = prevOpacity + 0.1;
          return newOpacity >= 1 ? 1 : newOpacity;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [show]);

  return (
    <div style={{ opacity }}>
      {show && children}
    </div>
  );
}

export default AppRoutes;
