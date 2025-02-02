import styles from "./StarIcon.module.scss";

export default function StarIcon3() {
  return (
    <div className={styles.starIconWrapper}>
      <svg
        className={styles.starIcon}
        width="354"
        height="392"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <title>Layer 1</title>
          <ellipse
            stroke="#00ff00"
            strokeOpacity="0.1"
            fill="none"
            strokeWidth="30"
            cx="171.24239"
            cy="192.6222"
            id="svg_9"
            rx="117.99999"
            ry="117.99999"
          />
          <ellipse
            strokeOpacity="0.1"
            fill="#ffffff"
            stroke="#ff0000"
            strokeWidth="30"
            fillOpacity="0"
            cx="171.24239"
            cy="191.57675"
            id="svg_8"
            rx="148"
            ry="148"
          />
          <ellipse
            stroke="#007fff"
            strokeOpacity="0.1"
            fill="none"
            strokeWidth="30"
            cx="170.69694"
            cy="193.07673"
            id="svg_10"
            rx="88.30302"
            ry="88.30302"
          />
          <ellipse
            className={styles.textColor}
            stroke="#000"
            cx="175.06685"
            cy="185.13385"
            id="svg_3"
            rx="27.36841"
            ry="27.36841"
          />
          <rect
            className={styles.textColor}
            x="162.10754"
            y="-10.3832"
            width="16.31995"
            height="407.51078"
            id="svg_1"
            stroke="#000"
            rx="100"
            transform="rotate(33.6564 170.267 193.372)"
          />
          <rect
            className={styles.textColor}
            x="164.6083"
            y="66.63126"
            width="16.31995"
            height="235.21896"
            id="svg_2"
            rx="100"
            stroke="#000"
            transform="rotate(-56 172.768 184.241)"
          />
        </g>
      </svg>
    </div>
  );
}
