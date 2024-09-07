import React from 'react';
import styles from './BootCamp.module.css';

const BootCamp = () => {
    return (
        <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <div className={styles.iconContainer}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Bold / Design, Tools / Ruler Cross Pen">
                <g id="Vector">
                <path d="M8.09074 10.9833L10.9833 8.09074C13.7105 5.36358 15.0741 4 16.7685 4C18.463 4 19.8265 5.36358 22.5537 8.09074L17.7327 12.9117L8.09075 22.5537L8.09073 22.5537C5.36358 19.8265 4 18.463 4 16.7685C4 15.0741 5.36358 13.7105 8.09074 10.9833L8.09074 10.9833Z" fill="url(#paint0_linear_1809_1923)"/>
                <path d="M39.9093 37.0167L37.0167 39.9093C34.2895 42.6364 32.9259 44 31.2315 44C29.537 44 28.1735 42.6364 25.4463 39.9093L25.4463 39.9093L35.0883 30.2673L39.9093 25.4463C42.6364 28.1735 44 29.537 44 31.2315C44 32.9259 42.6364 34.2895 39.9093 37.0167Z" fill="url(#paint1_linear_1809_1923)"/>
                </g>
                <g id="Vector_2">
                <path d="M22.8002 36.3224L22.8002 36.3223L37.5919 21.5306C35.5788 20.6927 33.1944 19.3164 30.9393 17.0614C28.6839 14.806 27.3075 12.4212 26.4696 10.4078L11.6776 25.1998L11.6776 25.1999C10.5233 26.3541 9.94614 26.9313 9.4498 27.5677C8.86427 28.3184 8.36227 29.1306 7.95268 29.99C7.60547 30.7186 7.34735 31.493 6.83112 33.0416L4.1089 41.2083C3.85486 41.9704 4.05321 42.8107 4.62126 43.3787C5.18932 43.9468 6.02956 44.1451 6.79168 43.8911L14.9584 41.1689C16.507 40.6527 17.2814 40.3945 18.01 40.0473C18.8694 39.6377 19.6816 39.1357 20.4323 38.5502C21.0687 38.0539 21.6459 37.4766 22.8002 36.3224Z" fill="url(#paint2_linear_1809_1923)"/>
                <path d="M41.6964 17.4261C44.7678 14.3547 44.7678 9.37496 41.6964 6.30356C38.625 3.23215 33.6453 3.23215 30.5739 6.30356L28.7998 8.07763C28.8241 8.15099 28.8493 8.22537 28.8754 8.30071C29.5257 10.175 30.7526 12.632 33.0606 14.94C35.3687 17.2481 37.8257 18.475 39.7 19.1252C39.775 19.1513 39.849 19.1763 39.922 19.2005L41.6964 17.4261Z" fill="url(#paint3_linear_1809_1923)"/>
                </g>
                </g>
                <defs>
                <linearGradient id="paint0_linear_1809_1923" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF4343"/>
                <stop offset="1" stop-color="#FF511A"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1809_1923" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF4343"/>
                <stop offset="1" stop-color="#FF511A"/>
                </linearGradient>
                <linearGradient id="paint2_linear_1809_1923" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF4343"/>
                <stop offset="1" stop-color="#FF511A"/>
                </linearGradient>
                <linearGradient id="paint3_linear_1809_1923" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF4343"/>
                <stop offset="1" stop-color="#FF511A"/>
                </linearGradient>
                </defs>
                </svg>
          </div>
          <div className={styles.durationContainer}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Bold / Time / Calendar">
                <g id="Subtract">
                <path d="M7.75 2.5C7.75 2.08579 7.41421 1.75 7 1.75C6.58579 1.75 6.25 2.08579 6.25 2.5V4.07926C4.81067 4.19451 3.86577 4.47737 3.17157 5.17157C2.47737 5.86577 2.19451 6.81067 2.07926 8.25H21.9207C21.8055 6.81067 21.5226 5.86577 20.8284 5.17157C20.1342 4.47737 19.1893 4.19451 17.75 4.07926V2.5C17.75 2.08579 17.4142 1.75 17 1.75C16.5858 1.75 16.25 2.08579 16.25 2.5V4.0129C15.5847 4 14.839 4 14 4H10C9.16097 4 8.41527 4 7.75 4.0129V2.5Z" fill="#D6D7D9"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 11.161 2 10.4153 2.0129 9.75H21.9871C22 10.4153 22 11.161 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12ZM17 14C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13C16 13.5523 16.4477 14 17 14ZM17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18ZM13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17ZM7 14C7.55228 14 8 13.5523 8 13C8 12.4477 7.55228 12 7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14ZM7 18C7.55228 18 8 17.5523 8 17C8 16.4477 7.55228 16 7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18Z" fill="#D6D7D9"/>
                </g>
                </g>
                </svg>

            <div className={styles.durationText}>6 weeks</div>
          </div>
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.detailHeader}>
            <div className={styles.detailTitle}>
              <div className={styles.dot}></div>
              <div className={styles.titleText}>Live Bootcamp</div>
            </div>
            <div className={styles.startDate}>
              <div>Starts on<br/>16 October 2024</div>
            </div>
          </div>
          <div className={styles.imageBackground} style={{backgroundImage:`url('../../../public/images/rectangle-41994.png')`}}/>
          <div className={styles.descriptionContainer}>
            <div className={styles.title}>Design Live</div>
            <div className={styles.subtitle}>Master design fundamentals in real-time sessions.</div>
          </div>
          <div className={styles.footer}>
            <div className={styles.previewButton}>
              <div className={styles.previewText}>Preview</div>
              <div className={styles.previewIcon}><img src='images/preview-arrow.png'/></div>
            </div>
            <div className={styles.priceContainer}>
              <span className={styles.currentPrice}>₹249 </span>
              <span className={styles.originalPrice}>₹359</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default BootCamp;
