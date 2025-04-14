
import styles from "@/styles/common.module.css";

const Loading = () => {
	
	return (
		<section className={styles.loading_section}>
			<div className={styles["lds-dual-ring"]}></div>
		</section>
	);
};

export default Loading;
