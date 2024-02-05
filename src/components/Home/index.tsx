import { useFetchSession } from "@/hooks/useSesion";
// import { signIn, signOut } from "next-auth/react";
// import Button from "../common/Button/Button";
import styles from "./Home.module.scss";
import { UploadFiles } from "../UploadFiles";
import Topbar from "../Topbar";

const Home = () => {
  let { session } = useFetchSession();
  return (
    <div className={styles.container}>
      <Topbar />
      <UploadFiles />
    </div>
    // <div className={styles.authBtn}>
    //   {session ? (
    //     <img
    //       onClick={() => signOut()}
    //       className={styles.profileImg}
    //       src={session?.user.image as string}
    //     />
    //   ) : (
    //     <Button
    //       onClick={() => signIn()}
    //       btnClass="btn-primary"
    //       title="Sign Up!"
    //     />
    //   )}
    // </div>
  );
};

export default Home;
