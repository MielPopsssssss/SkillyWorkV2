import { p_marketing } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Section4 = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Faites mieux caca<br className="sm:block hidden" />en quewlques clics
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={p_marketing} alt="" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Section4;
