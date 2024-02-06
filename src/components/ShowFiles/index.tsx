import styles from "./ShowFiles.module.scss";
import { fetchFiles } from "@/hooks/fetchFiles";

const ShowFiles = () => {
  let { fileList } = fetchFiles();
  console.log(fileList);

  return <div className={styles.progressMain}>Showfiles</div>;
};

export default ShowFiles;
