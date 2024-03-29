import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
      <svg width="200" min-height="50" viewBox="0 0 345.41368078175896 80">
        <link type="text/css" rel="stylesheet" id="dark-mode-custom-link"/>
        <link type="text/css" rel="stylesheet" id="dark-mode-general-link"/>
        <style lang="en" type="text/css" id="dark-mode-custom-style"/>
        <style lang="en" type="text/css" id="dark-mode-native-style"/>
        <style lang="en" type="text/css" id="dark-mode-native-sheet"/>
        <defs id="SvgjsDefs2201">
        <linearGradient id="SvgjsLinearGradient2206">
        <stop id="SvgjsStop2207" stop-color="#2d388a" offset="0"/>
        <stop id="SvgjsStop2208" stop-color="#00aeef" offset="1"/>
        </linearGradient>
        </defs>
        <g id="SvgjsG2202" featurekey="FRM3ZD-0" transform="matrix(6.420245541912071,0,0,6.420245541912071,1.7897486497551194,-48.40477613612929)" fill="url(#SvgjsLinearGradient2206)">
        <path d="M7.1 13.92 c0.38666 0.32 0.69336 0.68998 0.92002 1.11 s0.34 0.87666 0.34 1.37 s-0.12 0.96 -0.36 1.4 s-0.57 0.82334 -0.99 1.15 s-0.91 0.58332 -1.47 0.76998 s-1.16 0.28 -1.8 0.28 s-1.2367 -0.09334 -1.79 -0.28 s-1.0367 -0.44 -1.45 -0.76 l1.1 -4.14 c-0.58666 -0.54666 -0.88 -1.1867 -0.88 -1.92 c0 -0.44 0.11666 -0.85334 0.35 -1.24 s0.55 -0.72332 0.95 -1.01 s0.86666 -0.51332 1.4 -0.67998 s1.1 -0.25 1.7 -0.25 c0.54666 0 1.0667 0.06666 1.56 0.2 s0.93334 0.33334 1.32 0.6 z"/>
        </g>
        <g id="SvgjsG2203" featurekey="vMvB0T-0" transform="matrix(2.391158723814394,0,0,2.391158723814394,69.28265420716501,15.557401399376527)" fill="#ffffff">
        <path d="M0.3 18.82 q0.06 -0.66 0.41 -1.32 t0.83 -1.08 q2.14 1.3 4.06 1.3 q0.84 0 1.23 -0.38 t0.39 -0.94 q0 -0.94 -1.26 -1.48 l-2.36 -1 q-1.38 -0.62 -2.12 -1.49 t-0.74 -2.21 q0 -0.92 0.37 -1.68 t1.04 -1.32 t1.59 -0.87 t2.04 -0.31 q2.24 0 4.52 1.14 q-0.1 1.54 -1.08 2.4 q-2.04 -0.98 -3.6 -0.98 q-0.8 0 -1.2 0.36 t-0.4 0.82 q0 0.78 1.18 1.26 l2.4 1.02 q1.52 0.64 2.27 1.64 t0.75 2.32 q0 0.94 -0.34 1.72 t-1.01 1.35 t-1.67 0.89 t-2.34 0.32 q-2.6 0 -4.96 -1.48 z M23.42 19.22 q-0.68 0.96 -2.12 0.96 q-0.82 0 -1.23 -0.42 t-0.71 -1.42 l-0.76 -2.34 q-0.3 -0.94 -0.72 -1.34 t-1.14 -0.4 q-0.24 0 -0.88 0.04 l0 5.7 q-0.62 0.12 -1.6 0.12 t-1.6 -0.12 l0 -13.66 q0.62 -0.12 1.6 -0.12 t1.6 0.12 l0 5.28 l0.52 -0.02 q0.36 0 0.52 -0.13 t0.38 -0.55 l1.9 -3.58 q0.3 -0.62 0.64 -0.87 t1.06 -0.25 q0.8 0 1.86 0.1 l0.18 0.22 l-2.44 4.6 q-0.46 0.92 -1.12 1.46 q0.94 0.2 1.41 0.76 t0.79 1.5 l0.82 2.48 q0.16 0.46 0.24 0.68 t0.4 0.74 q0.14 0.2 0.4 0.46 z M25.12 20 l0 -13.66 q0.62 -0.12 1.6 -0.12 t1.62 0.12 l0 13.66 q-0.64 0.12 -1.62 0.12 t-1.6 -0.12 z M36.480000000000004 17.3 l3.46 0 q0 0.8 -0.1 1.37 t-0.64 0.98 t-1.42 0.41 l-4.52 0 q-0.86 0 -1.36 -0.5 t-0.5 -1.36 l0 -11.86 l0.14 -0.14 l1.18 0 q1.88 0 1.88 2.04 l0 9.14 q0.88 -0.08 1.88 -0.08 z M46.92 17.3 l3.46 0 q0 0.8 -0.1 1.37 t-0.64 0.98 t-1.42 0.41 l-4.52 0 q-0.86 0 -1.36 -0.5 t-0.5 -1.36 l0 -11.86 l0.14 -0.14 l1.18 0 q1.88 0 1.88 2.04 l0 9.14 q0.88 -0.08 1.88 -0.08 z M55.36000000000001 9.72 l1.34 -3.38 q0.52 -0.12 1.34 -0.12 q0.88 0 1.52 0.24 l0.14 0.16 l-3.88 9.18 l0 4.2 q-0.62 0.12 -1.6 0.12 t-1.6 -0.12 l0 -4.28 l-3.86 -9 q0.92 -0.54 1.76 -0.54 t1.21 0.29 t0.65 0.99 l0.96 2.38 q0.52 1.28 0.9 2.86 l0.12 0 q0.32 -1.26 1 -2.98 z M62.3 18.68 l-2.36 -12.16 q0.96 -0.36 1.7 -0.36 q0.84 0 1.22 0.37 t0.54 1.39 l0.84 5.16 q0.38 2.32 0.48 3.24 t0.13 0.96 t0.13 0.04 l1.66 -10.72 q0.74 -0.14 2.06 -0.14 t2.04 0.14 l1.52 10.46 q0.02 0.18 0.07 0.22 t0.15 0.04 q0.18 -1.88 0.6 -4.26 l1.12 -6.72 q0.58 -0.12 1.34 -0.12 q0.92 0 1.62 0.22 l0.14 0.18 l-2.64 13.36 q-1.3 0.14 -2.44 0.14 t-1.62 -0.28 t-0.62 -1.16 l-0.68 -4.34 q-0.36 -2.36 -0.58 -4.64 l-0.14 0 q-0.22 1.94 -0.66 4.64 l-0.9 5.64 q-1.36 0.14 -2.47 0.14 t-1.59 -0.28 t-0.66 -1.16 z M82.04 16.28 q0.54 1.56 2.18 1.56 q0.82 0 1.33 -0.41 t0.8 -1.04 t0.39 -1.41 t0.1 -1.54 q0 -0.7 -0.05 -1.56 t-0.29 -1.61 t-0.76 -1.26 t-1.52 -0.51 q-0.96 0 -1.47 0.49 t-0.76 1.21 t-0.31 1.53 t-0.06 1.43 q0 0.92 0.09 1.64 t0.33 1.48 z M80.42 19.04 q-2.14 -1.78 -2.14 -5.86 q0 -1.76 0.41 -3.09 t1.18 -2.23 t1.87 -1.36 t2.48 -0.46 t2.49 0.46 t1.88 1.37 t1.18 2.24 t0.41 3.07 t-0.41 3.07 t-1.18 2.23 t-1.88 1.36 t-2.49 0.46 q-2.28 0 -3.8 -1.26 z M102.22 10.56 q0 0.66 -0.2 1.25 t-0.53 1.06 t-0.78 0.82 t-0.93 0.53 q1.04 0.38 1.54 1.84 l0.6 1.7 q0.34 1 1 1.48 q-0.3 0.4 -0.9 0.67 t-1.32 0.27 t-1.12 -0.41 t-0.74 -1.43 l-0.72 -2.1 q-0.22 -0.6 -0.59 -0.92 t-1.11 -0.32 l-0.82 0 l0 5 q-0.64 0.12 -1.6 0.12 t-1.58 -0.12 l0 -13.56 l0.14 -0.14 q1.74 -0.04 2.93 -0.06 t1.87 -0.02 q1.1 0 2 0.27 t1.53 0.81 t0.98 1.36 t0.35 1.9 z M95.60000000000001 8.62 l0 3.92 q0.9 0 1.54 -0.03 t1.03 -0.24 t0.59 -0.59 t0.2 -1.1 q0 -1.94 -1.88 -1.94 l-0.83 0 t-0.65 -0.02 z M115.48 19.22 q-0.68 0.96 -2.12 0.96 q-0.82 0 -1.23 -0.42 t-0.71 -1.42 l-0.76 -2.34 q-0.3 -0.94 -0.72 -1.34 t-1.14 -0.4 q-0.24 0 -0.88 0.04 l0 5.7 q-0.62 0.12 -1.6 0.12 t-1.6 -0.12 l0 -13.66 q0.62 -0.12 1.6 -0.12 t1.6 0.12 l0 5.28 l0.52 -0.02 q0.36 0 0.52 -0.13 t0.38 -0.55 l1.9 -3.58 q0.3 -0.62 0.64 -0.87 t1.06 -0.25 q0.8 0 1.86 0.1 l0.18 0.22 l-2.44 4.6 q-0.46 0.92 -1.12 1.46 q0.94 0.2 1.41 0.76 t0.79 1.5 l0.82 2.48 q0.16 0.46 0.24 0.68 t0.4 0.74 q0.14 0.2 0.4 0.46 z"/>
        </g>
      </svg>
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        © 2023 SkillyWork. All rights reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
