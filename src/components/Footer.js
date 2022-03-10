import "../styles.css";
import { GrInstagram, GrTwitter, GrFacebook } from "react-icons/gr";
import Secfooter from "./Secfooter";
const footerdatas= [
    {
        title: "icon"

    },
    {
        title: "Company",
        item: <ul>
            <li>about</li>
            <li>jobs</li>
            <li>For the record</li>
        </ul>
    },
    {
        title: "Communities",
        item: <ul>
            <li>For artist</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
        </ul>
    },
    {
        title: "usefull",
        item: <ul>
            <li>Support</li>
            <li>Web Player</li>
            <li>Free Mobile App</li>
        </ul>
   
    },
    {
        title: "",
        icon: <ul>
            <li><GrInstagram size={30} /></li>
            <li><GrTwitter size={30}/></li>
            <li><GrFacebook size={30}/></li>
        </ul>
    },
  
]


function Footer(){
   const footerdatasUI = footerdatas.map(function(footerdata){
       return(
           <div >
              <div className="footer-title">
                {footerdata.title}
              </div> <br/>
               {footerdata.item} 
               <div className="footer-icon">
               {footerdata.icon}
               </div>
            
               {/* {footerdata.links} */}
               {/* {footerdata.link1} {footerdata.link2}{footerdata.link3} */}
           </div>
       );
   });
   return(
      <div className="footer">
        <div className="footer-cont">
           {footerdatasUI}
          
       </div>
       <Secfooter />
      </div>
   )
};
export default Footer;