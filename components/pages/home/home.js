import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import styles from "./home.module.css"
import { contactDetails, resumeLink } from '../../../util/constant';
import ArticleIcon from '@mui/icons-material/Article';
export default function Home (){
    return (
        <section id="home" className={styles.wrap}>
            <LinkedInIcon onClick={() => { window.open(contactDetails[contactDetails.length-1].value.linkedin, "_blank") }} className={styles.socialIcons} fontSize="large" />
            <GitHubIcon onClick={() => { window.open(contactDetails[contactDetails.length-1].value.github, "_blank") }} className={styles.socialIcons} fontSize="large" />
            <GoogleIcon onClick={() => { window.open(contactDetails[contactDetails.length-1].value.gmail, "_blank") }} className={styles.socialIcons} fontSize="large" />
            <div  className={styles.resume} onClick={()=>{window.open(resumeLink,"_blank")}}>
                <ArticleIcon/> 
                <h4 style={{"margin-top":"0.2rem"}}>GET RESUME</h4>
            </div>
        </section>
    )
}
// className={styles.socialIcons}
// className={styles.socialIcons}
// className={styles.socialIcons}