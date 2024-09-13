import React from "react";
import styles from "./Hero.module.css";
import '../../styles/skills.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
      <div className={`${styles.redBubble}`}>
          <img className={`${styles.orangearrow}  `} src='images/vectororange.svg'/>
            <div className={styles.redBubbleText}>Social Media</div>
          </div>
          <div className={styles.redBubble1}>
          <img className={`${styles.orangearrow1}`} src='images/vectororange.svg'/>
            <div className={styles.redBubbleText1}>AI</div>
          </div>
          <div className={styles.greenBubble}>
            <img className={styles.greenarrow} src='images/vectorgreen.svg'/>
            <div className={styles.greenBubbleText}>No code</div>
          </div>
          <div className={styles.blueBubble}>
            <img className={styles.bluearrow} src='images/bluevector.svg'/>
            <div className={styles.blueBubbleText}>Design</div>
          </div>
        <div className={styles.content}>
          <div className={styles.tag}>
            <div
              className="black"
              style={{ fontSize: 13, fontWeight: 500, lineHeight: "31px" }}
            >
              Skill 4.0 For Learners
            </div>
          </div>
          <div className={styles.title}>
            <span style={{ color: "#21330F" }}>
              Shaping Student Futures with{" "}
            </span>
            <span style={{ color: "#0ACF83" }}> Live</span>
            <span style={{ color: "#21330F" }}>, Hands-On </span>
            <span style={{ color: "#0ACF83" }}>Skill 4.0 </span>
            <span style={{ color: "#21330F" }}>Training</span>
          </div>
          <div className={styles.description}>
            Live Bootcamps and Workshops to Equip Students with Essential Skills
            for Tomorrow’s World.
          </div>
          <div className={styles.buttonGroup}>
            <div className={styles.button}>
              <div
                className={styles.buttonInner}
                style={{ background: "#0ACF83" }}
              >
                <div className={styles.buttonText}> Active Camps</div>
                <img src='images/campus.png'/>
              </div>
            </div>
            <div className={styles.button}>
              <div
                className={styles.buttonInner}
              >
                <div className={styles.buttonText} style={{ color: "black",fontWeight:'700' }}>Explore</div>
                <img src='images/enquire.png'/>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.rightarrow}
          style={{ width: 450, height: 450 }}
          src='images/header-1-right-1.png'
          alt="Placeholder"
        />
        <img
          style={{ width: 550, height: 485.49, zIndex: 1000 }}
          src='images/header-1-video-call-light-mode-2.png'
          alt="Placeholder"
        />
        <img
          className={styles.leftarrow}
          style={{ width: 345, height: 280 }}
          src='images/header-1-side-left-1.png'
          alt="Placeholder"
        />
      </div>
      <div className={styles.downArrow}>
          <svg
            width="47"
            height="115"
            viewBox="0 0 47 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Shape"
              d="M2.96391 171.562L2.96391 89.7349C2.96391 78.1658 12.3426 68.7872 23.9117 68.7872V68.7872C35.4809 68.7872 44.8595 59.4085 44.8595 47.8394L44.8595 0.0522137"
              stroke="#D8DAE6"
              stroke-width="4"
              stroke-linejoin="bevel"
              stroke-dasharray="8 8"
            />
          </svg>
          <svg
            width="5"
            height="115"
            viewBox="0 0 5 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Shape"
              d="M4.40828 202.998C4.40828 204.102 3.51285 204.998 2.40828 204.998C1.30371 204.998 0.408279 204.102 0.408279 202.998L4.40828 202.998ZM0.408279 202.998L0.40828 199.095L4.40828 199.095L4.40828 202.998L0.408279 202.998ZM0.40828 191.29L0.40828 183.485L4.40828 183.485L4.40828 191.29L0.40828 191.29ZM0.408281 175.68L0.408281 167.875L4.40828 167.875L4.40828 175.68L0.408281 175.68ZM0.408281 160.07L0.408282 152.265L4.40828 152.265L4.40828 160.07L0.408281 160.07ZM0.408282 144.46L0.408282 136.655L4.40828 136.655L4.40828 144.46L0.408282 144.46ZM0.408283 128.849L0.408283 121.044L4.40828 121.044L4.40828 128.849L0.408283 128.849ZM0.408283 113.239L0.408284 105.434L4.40828 105.434L4.40828 113.239L0.408283 113.239ZM0.408284 97.6292L0.408284 89.8241L4.40828 89.8241L4.40828 97.6292L0.408284 97.6292ZM0.408285 82.019L0.408285 74.214L4.40829 74.214L4.40828 82.019L0.408285 82.019ZM0.408285 66.4089L0.408286 58.6038L4.40829 58.6038L4.40829 66.4089L0.408285 66.4089ZM0.408286 50.7987L0.408286 42.9937L4.40829 42.9937L4.40829 50.7987L0.408286 50.7987ZM0.408287 35.1886L0.408287 27.3835L4.40829 27.3835L4.40829 35.1886L0.408287 35.1886ZM0.408287 19.5785L0.408288 11.7734L4.40829 11.7734L4.40829 19.5785L0.408287 19.5785ZM0.408288 3.96834L0.408288 0.0658384L4.40829 0.0658386L4.40829 3.96834L0.408288 3.96834Z"
              fill="#D8DAE6"
            />
          </svg>
          <svg
            width="47"
            height="115"
            viewBox="0 0 47 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Shape"
              d="M44.3815 171.562L44.3815 89.7349C44.3815 78.1658 35.0029 68.7872 23.4337 68.7872V68.7872C11.8646 68.7872 2.48594 59.4085 2.48595 47.8394L2.48598 0.0522137"
              stroke="#D8DAE6"
              stroke-width="4"
              stroke-linejoin="bevel"
              stroke-dasharray="8 8"
            />
          </svg>
        </div>
    </div>
  );
}
