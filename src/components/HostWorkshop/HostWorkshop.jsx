import styles from './HostWorkshop.module.css'; // Import your CSS module

const HostWorkshop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon}></div>
      </div>
      <div className={styles.text}>Host a Workshop With Us</div>
    </div>
  );
};

export default HostWorkshop;
