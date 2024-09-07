import styles from './MissionSection.module.css';
import mainImg from './../../../public/images/img-202211171417481.png'


const MissionSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.missionBadge}>
          <div className={styles.missionText}>OUR MISSION</div>
        </div>
        <div className={styles.title}>ARVIX FOR STUDENTS</div>
        <div className={styles.description}>
          At Arvix, our mission is to empower students with practical, market-relevant skills through engaging live bootcamps, preparing them for success in the technology-driven world.
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>Hands-on Learning</div>
          <div className={styles.cardContent}>
            Interactive, live bootcamps that make learning practical and fun.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>Industry-Relevant Skills:</div>
          <div className={styles.cardContent}>
            Learn market-driven skills like design, development, and digital marketing that open doors to future careers.
          </div>
        </div>
        <div className={styles.card} style={{border:0}}>
          <div className={styles.cardHeader}>Flexible & Accessible:</div>
          <div className={styles.cardContent}>
            Access high-quality education from anywhere with expert mentors guiding each step of the way.
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.exploreButton}>
            <div className={styles.exploreText}>Explore Workshops</div>
          </div>
          <div className={styles.enquireButton}>
            <div className={styles.enquireText}>Enquire</div>
           <img src='images/enquire.png'/>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={mainImg} alt="Placeholder" />
        </div>
        <div className={styles.liveWorkshops}>
          <div className={styles.liveWorkshopsBadge}></div>
          <div className={styles.liveWorkshopsText}>Live Interactive workshops</div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
