
import { ProgressProps } from "@/interfaces";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({progress}: ProgressProps) => {
  return (
    <div className={styles.progressMain}>
      <progress className="progress progress-accent w-56" value={progress} max="100"></progress>
    </div>
  );
};

export default ProgressBar;
