import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={`w-full h-full ${styles.loaderContainer}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
