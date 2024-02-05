import { useFetchSession } from "@/hooks/useSesion";
import { signIn, signOut } from "next-auth/react";
import Button from "../common/Button/Button";
import styles from "./Topbar.module.scss";

const Topbar = () => {
  let {session}  = useFetchSession();
  return (
    <div className={styles.authBtn}>
      {session ? (
        <img
          onClick={() => signOut()}
          className={styles.profileImg}
          src={session?.user.image as string}
        />
      ) : (
        <Button
          onClick={() => signIn()}
          btnClass="btn-primary"
          title="Sign Up!"
        />
      )}
    </div>
  );
};

export default Topbar;
