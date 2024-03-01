"use client"
import styles from "./Footer.module.css";
import Image from "next/image";
import smpLogo from "@/images/SMP-Logo.png"
import twitterIcon from '@/images/common/footer/twitterIcon.svg'
import instagramIcon from '@/images/common/footer/instagramIcon.svg'
import gmailIcon from '@/images/common/footer/gmailIcon.svg'
import facebookIcon from '@/images/common/footer/facebookIcon.svg'
import linkedinIcon from '@/images/common/footer/linkedinIcon.svg'
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    if(pathname == "/about-us"){
        return <></>;
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_main}>
                <div className={styles.footer_main_left}>
                    <div className={styles.footer_main_left_heading}>
                        <div className={styles.footer_main_left_heading_logo}>
                            <Image src={smpLogo} />
                        </div>
                        <hr />
                        <div className={styles.footer_main_left_heading_text}>
                            <span>
                                Student
                                <br />
                                Mentorship
                                <br />
                                Program
                            </span>
                        </div>
                    </div>
                    <div className={styles.footer_main_left_text}>
                        <span>It is one of the largest on-campus student body initiatives which assigns a mentor (a Pre-Final or Final year student) to all the freshmen within the same branch.</span>
                    </div>
                    <div className={styles.footer_main_left_button}>
                        <button>
                            Learn more
                        </button>
                    </div>
                </div>
                <div className={styles.footer_main_middle}>
                    <div className={styles.footer_middle_container}>
                        <div className={styles.footer_middle_content}>
                            <div>Help</div>
                            <span>Contact Us</span>
                            <span>Become a Mentor</span>
                        </div>
                        <div className={styles.footer_middle_content}>
                            <div>Visit</div>
                            <span>Office of DoSW</span>
                            <span>
                                Indian Institute of Technology Roorkee <br />
                                Roorkee, Haridwar District, Uttarakhand, India <br />
                                Pin: 24667
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_main_right}>
                    <div className={styles.footer_main_right_icons}>
                        {
                            [twitterIcon, instagramIcon, gmailIcon, facebookIcon, linkedinIcon].map((icon, index) => {
                                return (
                                    <Image src={icon} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </footer>

        // <footer className={styles.footer}>
        //     <div className={styles.footer_main}>
        //         <div className={styles.footer_main_top}>
        //             <div className={styles.footer_main_top_heading}>
        //                 <span className={styles.footer_main_top_heading_1}>SMP</span>
        //                 <span className={styles.footer_main_top_heading_2}>-IITR</span>
        //             </div>
        //             <div className={styles.footer_main_top_logo}>
        //                 <Image 
        //                     src={smpLogo}
        //                     width={52.8}
        //                     height={51.36}
        //                 />
        //                 <Image 
        //                     src={iitrLogo}
        //                     width={52.8}
        //                     height={52.8}
        //                 />
        //             </div>
        //         </div>
        //         <div className={styles.footer_main_middle}>
        //             <hr />
        //         </div>
        //         <div className={styles.footer_main_bottom}>
        // <table className={styles.footer_main_bottom_table}>
        //     <thead >
        //         <tr className={styles.footer_main_bottom_table_head_row}>
        //             <td className={styles.footer_main_bottom_table_head_1}>Follow</td>
        //             <td className={styles.footer_main_bottom_table_head_2}>Help</td>
        //             <td className={styles.footer_main_bottom_table_head_3}>Visit</td>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr className={styles.footer_main_bottom_table_row_1}>
        //             <td className={styles.footer_main_bottom_table_row_1_option_1}>Facebook</td>
        //             <td className={styles.footer_main_bottom_table_row_1_option_2}>Contact us</td>
        //             <td>Office of DoSW</td>
        //         </tr>
        //         <tr className={styles.footer_main_bottom_table_row_2}>
        //             <td className={styles.footer_main_bottom_table_row_2_option_1}>LinkedIn</td>
        //             <td className={styles.footer_main_bottom_table_row_2_option_2}>Become a Mentor</td>
        //             <td>
        //                 Indian Institue of Technology Roorkee 
        //                 <br /> 
        //                 Roorkee, Haridwar District, Uttrakahand, India
        //                 <br />
        //                 Pin: 247667
        //             </td>
        //         </tr>
        //     </tbody>
        // </table>
        //         </div>
        //     </div>
        // </footer>
    );
}

export default Footer;