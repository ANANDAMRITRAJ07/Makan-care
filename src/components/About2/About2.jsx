import React from "react";
import "./About2.css";
import OnlyHead from "../OnlyHead/OnlyHead";
import Footer from "../Footer/Footer";
import CounterApp from "../CounterApp/CounterApp";
import CounterApp2 from "../CounterApp2/CounterApp2";
import TeamSection from "../TeamSection/TeamSection";
import BlogSite from "../Blogsite/BlogSite";
import et1 from "../../assets/et1.jpg";
import et2 from "../../assets/et2.jpg";

const AboutUs = () => {
  return (
    <div>
      <OnlyHead />
      <div className="aboutus-container">
        {/* Top Section */}
        <section className="aboutus-intro">
          <div className="aboutus-text">
            <h4 className="aboutus-subtitle">ABOUT US</h4>
            <h1 className="aboutus-title">
              Providing developer-friendly Kubernetes abstraction to unleash
              developer productivity
            </h1>
            <p className="aboutus-description">
              Rig.dev offers an application platform for Kubernetes. We empower
              developers with our developer-friendly deployment engine that
              simplifies the process of building, managing, troubleshooting, and
              scaling applications on Kubernetes. The platform provides elevated
              Kubernetes abstractions, cloud-native integrations, and powerful
              tooling that unlocks true developer experience and productivity.
            </p>
          </div>
          <div className="aboutus-image">
            <img src={et1} alt="Cart" />
            <p className="aboutus-caption">
              On a mission to remove the complexity of application development
              on Kubernetes
            </p>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="aboutus-partners">
          <p>
            We come from a wide range of global technology leaders and
            fast-paced startups.
          </p>
          <div className="aboutus-logos">
            <span>Google</span>
            <span>Uber</span>
            <span>incident.io</span>
            <span>Duffel</span>
            <span>Tradeshift</span>
            <span>Relysys</span>
            <span>Playable</span>
          </div>
        </section>

        {/* Why We Started */}
        <section className="aboutus-why">
          <div className="aboutus-why-text">
            <h2>Why we started Makan Care</h2>
            <p>
              We have experienced the immense power of platforms like Kubernetes
              in streamlining infrastructure management. However, through
              first-hand experience, we have seen how such technologies often
              suffer from being misunderstood and underutilized.
            </p>
            <p>
              Additionally, too many developers are wasting valuable time
              reinventing generic and repetitive features and infrastructure
              environments – we've been there ourselves.
            </p>
            <p>
              We founded Rig.dev to rethink the developer platform landscape by
              eliminating the complexities associated with building, deploying,
              and managing applications on Kubernetes at scale.
            </p>
            <div className="aboutus-metrics">
              <div className="aboutus-metric">
                <CounterApp />
              </div>
              <div className="aboutus-metric">
                <CounterApp2 />
              </div>
            </div>
          </div>
          <div className="aboutus-why-image">
          <img src={et2} alt="Cart" />
          </div>
        </section>
      </div>
      <TeamSection />
      <BlogSite />
      <Footer />
    </div>
  );
};

export default AboutUs;
