import React from "react";

export const Sidebar = () => {
  return (
    <div id="page">
      <div id="header">
        <div>
          <a href="index.html" className="logo">
            <img src="images/logo.png" alt="" />
          </a>
          <ul id="navigation">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="selected">
              <a href="about.html">About</a>
            </li>
            <li className="menu">
              <a href="projects.html">Projects</a>
              <ul className="primary">
                <li>
                  <a href="proj1.html">proj 1</a>
                </li>
              </ul>
            </li>
            <li className="menu">
              <a href="blog.html">Blog</a>
              <ul className="secondary">
                <li>
                  <a href="singlepost.html">Single post</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="body" className="about">
        <div className="header">
          <div>
            <h1>About</h1>
            <h2>We Have Free Templates for Everyone</h2>
            <p>
              Our website templates are created with inspiration, checked for
              quality and originality and meticulously sliced and coded. What’s
              more, they’re absolutely free! You can do a lot with them. You can
              modify them. You can use them to design websites for clients, so
              long as you agree with the{" "}
              <a href="https://freewebsitetemplates.com/about/terms/">
                Terms of Use
              </a>
              . You can even remove all our links if you want to.
            </p>
          </div>
        </div>
        <div className="body">
          <div>
            <img src="images/earth-satellite.jpg" alt="" />
            <h2>We Have More Templates for You</h2>
            <p>
              Looking for more templates? Just browse through all our{" "}
              <a href="https://freewebsitetemplates.com/">
                Free Website Templates
              </a>{" "}
              and find what you’re looking for. But if you don’t find any
              website template you can use, you can try our{" "}
              <a href="https://freewebsitetemplates.com/freewebdesign/">
                Free Web Design
              </a>{" "}
              service and tell us all about it. Maybe you’re looking for
              something different, something special. And we love the challenge
              of doing something different and something special.
            </p>
          </div>
        </div>
        <div className="footer">
          <div>
            <img src="images/space-shuttle.png" alt="" />
            <h2>Be Part of Our Community</h2>
            <p>
              If you’re experiencing issues and concerns about this website
              template, join the discussion{" "}
              <a href="https://freewebsitetemplates.com/forums/">
                on our forum
              </a>{" "}
              and meet other people in the community who share the same
              interests with you.
            </p>
          </div>
        </div>
        <div className="section">
          <div>
            <h2>Template Details</h2>
            <p>
              Design Version 1. Code version 3. Website Template details,
              discussion and updates for this{" "}
              <a href="https://freewebsitetemplates.com/discuss/spacescience/">
                {" "}
                Space Science Website Template
              </a>
              . Website Template design by{" "}
              <a href="https://freewebsitetemplates.com/">
                Free Website Templates
              </a>
              . Please feel free to remove some or all the text and links of
              this page and replace it with your own About content.
            </p>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="connect">
          <div>
            <h1>FOLLOW OUR MISSIONS ON</h1>
            <div>
              <a
                href="http://freewebsitetemplates.com/go/facebook/"
                className="facebook"
              >
                facebook
              </a>
              <a
                href="http://freewebsitetemplates.com/go/twitter/"
                className="twitter"
              >
                twitter
              </a>
              <a
                href="http://freewebsitetemplates.com/go/googleplus/"
                className="googleplus"
              >
                googleplus
              </a>
              <a
                href="http://freewebsitetemplates.com/go/pinterest/"
                className="pinterest"
              >
                pinterest
              </a>
            </div>
          </div>
        </div>
        <div className="footnote">
          <div>
            <p>&copy; 2023 BY SPACE PROSPECTION | ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </div>
  );
};
