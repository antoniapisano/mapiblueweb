import YoutubeIcon from "/public/youtubeplay.svg";
import InstagramIcon from "/public/instagram2.svg";

const Footer = () => {
    return ( 
        <div className="Footer">
            <ul>
                <li>Copyright © 2023 Full Stack Ahead. All rights reserved</li>
                    <li><a href="https://www.youtube.com/@jamesevansmusic231"><YoutubeIcon /></a></li>
                        <li><a href="https://www.instagram.com/james_evans_music/?hl=en"><InstagramIcon /></a></li>
            </ul>
        
    </div>
    );
}
 
export default Footer;