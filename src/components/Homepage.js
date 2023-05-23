import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

import Carbon from './carbon.jpg';

const FirstLeftText = () => <p></p>;

const FirstRightText = () => (
  <p>
  <p> Welcome to my Kubernetes Training.</p>

  <p> </p>

  <p> ©2023 Niklaus Hirt</p>

  </p>

);

const SecondLeftText = () => <p>Kubernetes Training</p>;

const SecondRightText = () => (
<p>
  
  <p></p>
  <p>You will learn about the following topics:</p>

  <li>Containers Basics</li>
  <li>Kubernetes Basics</li>
  <li>Mesh Networking</li>
  <li>Kubernetes Security Basics</li>
  
  </p>
);

const BannerText = () => <h1>Kubernetes Training</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
