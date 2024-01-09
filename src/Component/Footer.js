import React from 'react';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';

export const Footer = () => {
  
  return (
   <>
      <footer className='footer-mainbox desktopboxdisplay'>
     <div className='footer-container'>
        <div>
            <img src='/assets/FooterLogo.svg' alt='logo.svg'/>
            <h5 className='download-title'>Download our app</h5>
            <div className='apple-container'><img src='assets/App store icon.svg'/><img  src='assets/Google play icon.svg'/></div>
             <ul className='social-media-container mb-3'>
              <li><Link href="https://www.youtube.com/@localtasker"><a target="_blank">       <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 24" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M4.84021 0.700164C2.2687 0.902244 0.325109 2.99307 0.200027 5.56942C0.0967975 7.69217 0 10.1346 0 11.8208C0 13.5262 0.0991104 16.0058 0.203625 18.145C0.327706 20.6884 2.22676 22.7653 4.76248 22.9995C7.56926 23.2585 11.6302 23.5195 16.6071 23.5195C21.5711 23.5195 25.6239 23.2601 28.43 23.0016C30.9755 22.7671 32.8784 20.6765 33.0006 18.1234C33.1088 15.8709 33.2143 13.2935 33.2143 11.8208C33.2143 10.364 33.1111 7.82603 33.0042 5.59105C32.8807 3.00468 30.934 0.900979 28.3527 0.698661C25.59 0.482162 21.605 0.269531 16.607 0.269531C11.5961 0.269531 7.60338 0.483197 4.8401 0.70021L4.84021 0.700164ZM13.2862 6.89127L21.8483 11.8208L13.2862 16.7505V6.89127Z" fill="#FDB633"/>
</svg></a></Link></li>
<li><Link href="https://www.tiktok.com/@localtaskeruk"><a target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="34" viewBox="0 0 28 34" fill="none">
<g clipPath="url(#clip0_1668_16959)">
<path d="M27.8536 14.2285C25.212 14.2352 22.6352 13.3652 20.4872 11.7415V23.066C20.4864 25.1634 19.8794 27.2106 18.7472 28.9338C17.6149 30.657 16.0115 31.9742 14.1513 32.7091C12.2911 33.444 10.2627 33.5617 8.3375 33.0463C6.41226 32.531 4.68187 31.4073 3.37772 29.8254C2.07357 28.2435 1.25782 26.2788 1.03955 24.1941C0.821284 22.1094 1.21089 20.004 2.15629 18.1594C3.10169 16.3149 4.5578 14.8191 6.32994 13.872C8.10208 12.925 10.1058 12.5719 12.0731 12.8599V18.5557C11.1728 18.2567 10.2061 18.2657 9.31102 18.5814C8.41591 18.8972 7.63817 19.5036 7.08887 20.314C6.53956 21.1244 6.24679 22.0973 6.25234 23.0939C6.2579 24.0905 6.56151 25.0598 7.11982 25.8633C7.67812 26.6668 8.46257 27.2634 9.36114 27.5681C10.2597 27.8727 11.2264 27.8696 12.1233 27.5594C13.0201 27.2492 13.8012 26.6477 14.355 25.8407C14.9088 25.0337 15.207 24.0626 15.207 23.066V0.927734H20.4872C20.4835 1.39862 20.5209 1.86886 20.5988 2.33252C20.7823 3.36757 21.1638 4.3522 21.7199 5.2262C22.2761 6.1002 22.9953 6.8452 23.8335 7.41561C25.026 8.24828 26.4241 8.69208 27.8536 8.69177V14.2285Z" fill="#FDB633"/>
</g>
<defs>
<clipPath id="clip0_1668_16959">
<rect width="26.881" height="32.4425" fill="white" transform="translate(0.972656 0.927734)"/>
</clipPath>
</defs>
</svg></a></Link></li>
<li><Link href="https://www.instagram.com/localtaskeruk/"><a target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
<path d="M17.2896 11.1208C14.226 11.1208 11.7258 13.621 11.7258 16.6847C11.7258 19.7485 14.226 22.2487 17.2896 22.2487C20.3533 22.2487 22.8535 19.7485 22.8535 16.6847C22.8535 13.621 20.3533 11.1208 17.2896 11.1208ZM33.977 16.6847C33.977 14.3807 33.9979 12.0975 33.8685 9.79763C33.7391 7.12627 33.1297 4.75543 31.1763 2.802C29.2187 0.84439 26.8521 0.23916 24.1808 0.109766C21.8768 -0.0196286 19.5936 0.00124153 17.2938 0.00124153C14.9898 0.00124153 12.7067 -0.0196286 10.4068 0.109766C7.73551 0.23916 5.36472 0.848564 3.41132 2.802C1.45375 4.75961 0.84853 7.12627 0.719139 9.79763C0.589747 12.1017 0.610617 14.3849 0.610617 16.6847C0.610617 18.9846 0.589747 21.272 0.719139 23.5718C0.84853 26.2432 1.45792 28.614 3.41132 30.5675C5.36889 32.5251 7.73551 33.1303 10.4068 33.2597C12.7108 33.3891 14.994 33.3682 17.2938 33.3682C19.5978 33.3682 21.8809 33.3891 24.1808 33.2597C26.8521 33.1303 29.2229 32.5209 31.1763 30.5675C33.1339 28.6099 33.7391 26.2432 33.8685 23.5718C34.002 21.272 33.977 18.9888 33.977 16.6847ZM17.2896 25.2456C12.5522 25.2456 8.7289 21.4222 8.7289 16.6847C8.7289 11.9472 12.5522 8.12385 17.2896 8.12385C22.027 8.12385 25.8504 11.9472 25.8504 16.6847C25.8504 21.4222 22.027 25.2456 17.2896 25.2456ZM26.201 9.77259C25.0949 9.77259 24.2017 8.87935 24.2017 7.77324C24.2017 6.66713 25.0949 5.77389 26.201 5.77389C27.3071 5.77389 28.2003 6.66713 28.2003 7.77324C28.2006 8.03589 28.1491 8.29602 28.0488 8.53875C27.9484 8.78147 27.8011 9.002 27.6154 9.18773C27.4297 9.37345 27.2092 9.52071 26.9665 9.62107C26.7237 9.72143 26.4636 9.77292 26.201 9.77259Z" fill="#FDB633"/>
</svg></a></Link></li>
<li><Link href="https://twitter.com/LocalTasker"><a target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
<g clipPath="url(#clip0_1668_16956)">
<path d="M33.9526 7.08933C32.7174 7.63114 31.4013 7.99027 30.0291 8.16465C31.4408 7.32183 32.5181 5.99741 33.0247 4.40105C31.7085 5.18574 30.2554 5.74 28.7068 6.04931C27.4571 4.71866 25.676 3.89453 23.733 3.89453C19.9631 3.89453 16.9282 6.9544 16.9282 10.7055C16.9282 11.2453 16.9738 11.7642 17.0859 12.2583C11.425 11.9822 6.41585 9.26902 3.05083 5.13592C2.46335 6.15518 2.11875 7.32183 2.11875 8.57775C2.11875 10.936 3.33315 13.0264 5.14333 14.2366C4.04933 14.2159 2.97609 13.8983 2.06685 13.398C2.06685 13.4187 2.06685 13.4457 2.06685 13.4727C2.06685 16.7817 4.42714 19.5302 7.5223 20.1633C6.96804 20.3149 6.36395 20.3875 5.73703 20.3875C5.3011 20.3875 4.86101 20.3626 4.4479 20.2713C5.33016 22.9678 7.83369 24.9503 10.8105 25.0147C8.49382 26.8269 5.55228 27.9189 2.36786 27.9189C1.80944 27.9189 1.27386 27.8939 0.738281 27.8254C3.75456 29.7706 7.32925 30.8812 11.1842 30.8812C23.7143 30.8812 30.5647 20.5017 30.5647 11.5048C30.5647 11.2038 30.5543 10.9131 30.5398 10.6246C31.8912 9.66552 33.0267 8.46773 33.9526 7.08933Z" fill="#FDB633"/>
</g>
<defs>
<clipPath id="clip0_1668_16956">
<rect width="33.2143" height="33.2143" fill="white" transform="translate(0.738281 0.78125)"/>
</clipPath>
</defs>
</svg></a></Link></li>
<li><Link href="https://www.facebook.com/profile.php?id=100089029999045"><a target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="34" viewBox="0 0 18 34" fill="none">
<path d="M11.9311 33.0948V17.9998H17.027L17.7915 12.1153H11.9311V8.35888C11.9311 6.6557 12.4051 5.49501 14.8652 5.49501L17.9978 5.49373V0.23039C17.4561 0.160419 15.5965 0 13.4321 0C8.91252 0 5.81835 2.74185 5.81835 7.77608V12.1153H0.707031V17.9998H5.81835V33.0948H11.9311Z" fill="#FDB633"/>
</svg></a></Link></li></ul>
        </div>
        <div className='footer-subpart'>
        <div><h4>EXPLORE</h4>
             <ul className='footer-subpart-ul'>
                <li><Link href="/Howitwork" style={{color:"white",textDecoration:"none"}}><a>How It Works</a></Link></li>
                <li><Link href="/become_a_tasker" style={{color:"white",textDecoration:"none"}}><a>Earn Money</a></Link></li>
                <li><Link href="https://app.localtasker.co.uk/login" style={{color:"white",textDecoration:"none"}}>Search Jobs</Link></li>
                <li><Link href="/FAQ" style={{color:"white",textDecoration:"none"}}><a>New Users F&Q</a></Link></li>
             </ul>
        </div>
        <div><h4>OUR STORY</h4>
        <ul className='footer-subpart-ul'>
                <li><Link href="/Whoweare" style={{color:"white",textDecoration:"none"}}><a>Who We Are</a></Link></li>
                <li><Link href="/career" style={{color:"white",textDecoration:"none"}}><a>Careers</a></Link></li>
                <li><Link href="/pressroom" style={{color:"white",textDecoration:"none"}}><a>Press Room</a></Link></li>
                <li><Link href="/CommunityGuidlines" style={{color:"white",textDecoration:"none"}}><a>Community Guidlines</a></Link></li>
                <li><Link href="/EtiquetteGuide" style={{color:"white",textDecoration:"none"}}><a>Tasker etiquette</a></Link></li>
                <li><Link href="/Blog" style={{color:"white",textDecoration:"none"}}><a>Get Inspired</a></Link></li>
                <li><Link href="/Contact_us" style={{color:"white",textDecoration:"none"}}><a>Reach Out</a></Link></li>
                <li><Link href='/Privacy_policy'><a>Privacy Policy</a></Link></li>
                <li><Link href='/terms&condition' style={{color:"white",textDecoration:"none"}}>Terms & Conditions</Link></li>
             </ul>
             </div>
        <div><h4>POPULAR SERVICES</h4>
        <ul className='footer-subpart-ul'>
        <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Business+Services&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Business Services</Link></li>
                <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Car+Maintenance&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Car Maintenance & Repair</Link></li>
                <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Handyman+%26+Assembly&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Handyman & Assembly</Link></li>
                <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Home+Improvement&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Home Improvement</Link></li>
                <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Home+Services&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Home Services</Link></li>
                <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Pet+Care&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Pet Care</Link></li>
                <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Personal+Care&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Personal Care</Link></li>
                <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Removals+%26+Clearance&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Removals & Clearance</Link></li>
                <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Wellness+%26+Fitness&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Wellness & Fitness</Link></li>
             </ul></div>
        </div>
    </div>
      <p className='copyrightpara'>&copy; Copyright 2023 Local Tasker. All rights reserved.<br/>Developed by <Link href="https://thedatech.com/"><a id="datechhover">DA Tech</a></Link></p>
    </footer>
    <footer className='mobiledisplay footer-mainbox' style={{marginTop:"0rem"}}>
      <div className='container mx-4 pt-3'>
           <div className='row'>
      
            <div className='footerdropdownmenu'>
            <div className='row-footermobiletitlerow'><div><h1 className="footermobiletitleh1">Explore</h1></div>
              <div className='footermobileicon' id="tamar1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 12 19" fill="none">
<path d="M2.87422 18.575L11.2992 10.175C11.3992 10.075 11.4699 9.96667 11.5112 9.85C11.5532 9.73333 11.5742 9.60833 11.5742 9.475C11.5742 9.34167 11.5532 9.21667 11.5112 9.1C11.4699 8.98333 11.3992 8.875 11.2992 8.775L2.87422 0.35C2.64089 0.116667 2.34922 0 1.99922 0C1.64922 0 1.34922 0.125 1.09922 0.375C0.849219 0.625 0.724219 0.916667 0.724219 1.25C0.724219 1.58333 0.849219 1.875 1.09922 2.125L8.44922 9.475L1.09922 16.825C0.865886 17.0583 0.749219 17.3457 0.749219 17.687C0.749219 18.029 0.874219 18.325 1.12422 18.575C1.37422 18.825 1.66589 18.95 1.99922 18.95C2.33255 18.95 2.62422 18.825 2.87422 18.575Z" fill="#FDB633"/>
</svg></div>
             </div>
              <ul className='footer-subpart-ul'>
                <li><Link href="/Howitwork" style={{color:"white",textDecoration:"none"}}><a>How It Works</a></Link></li>
                <li><Link href="/become_a_tasker" style={{color:"white",textDecoration:"none"}}><a>Earn Money</a></Link></li>
                <li><Link href="https://app.localtasker.co.uk/login" style={{color:"white",textDecoration:"none"}}>Search Jobs</Link></li>
                <li><Link href="/FAQ" style={{color:"white",textDecoration:"none"}}><a>New Users F&Q</a></Link></li>
             </ul>
            </div>
            <div className='footerdropdownmenu'>
            <div className='row-footermobiletitlerow'>
              <h1 className="footermobiletitleh1">Our story</h1>
              <div className='footermobileicon' id="tomara"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 12 19" fill="none">
<path d="M2.87422 18.575L11.2992 10.175C11.3992 10.075 11.4699 9.96667 11.5112 9.85C11.5532 9.73333 11.5742 9.60833 11.5742 9.475C11.5742 9.34167 11.5532 9.21667 11.5112 9.1C11.4699 8.98333 11.3992 8.875 11.2992 8.775L2.87422 0.35C2.64089 0.116667 2.34922 0 1.99922 0C1.64922 0 1.34922 0.125 1.09922 0.375C0.849219 0.625 0.724219 0.916667 0.724219 1.25C0.724219 1.58333 0.849219 1.875 1.09922 2.125L8.44922 9.475L1.09922 16.825C0.865886 17.0583 0.749219 17.3457 0.749219 17.687C0.749219 18.029 0.874219 18.325 1.12422 18.575C1.37422 18.825 1.66589 18.95 1.99922 18.95C2.33255 18.95 2.62422 18.825 2.87422 18.575Z" fill="#FDB633"/>
</svg></div>
            </div>
              <ul className='footer-subpart-ul'>
                <li><Link href="/Whoweare" style={{color:"white",textDecoration:"none"}}><a>Who We Are</a></Link></li>
                <li><Link href="https://app.localtasker.co.uk/career" style={{color:"white",textDecoration:"none"}}><a>Careers</a></Link></li>
                <li><Link href="/pressroom" style={{color:"white",textDecoration:"none"}}><a>Press Room</a></Link></li>
                <li><Link href="/CommunityGuidlines" style={{color:"white",textDecoration:"none"}}><a>Community Guidlines</a></Link></li>
                <li><Link href="/EtiquetteGuide" style={{color:"white",textDecoration:"none"}}><a>Tasker etiquette</a></Link></li>
                <li><Link href="/Blog" style={{color:"white",textDecoration:"none"}}><a>Get Inspired</a></Link></li>
                <li><Link href="/Contact_us" style={{color:"white",textDecoration:"none"}}><a>Reach Out</a></Link></li>
                <li><Link href='/Privacy_policy' style={{color:"white",textDecoration:"none"}}><a>Privacy Policy</a></Link></li>
                <li><Link href='/terms&condition' style={{color:"white",textDecoration:"none"}}><a>Terms & Conditions</a></Link></li>
             </ul>
        
            </div>   
            <div className='footerdropdownmenu'>
              <div className='row-footermobiletitlerow'><div><h1 className="footermobiletitleh1">Popular services</h1></div>
          <div className='footermobileicon'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 12 19" fill="none">
<path d="M2.87422 18.575L11.2992 10.175C11.3992 10.075 11.4699 9.96667 11.5112 9.85C11.5532 9.73333 11.5742 9.60833 11.5742 9.475C11.5742 9.34167 11.5532 9.21667 11.5112 9.1C11.4699 8.98333 11.3992 8.875 11.2992 8.775L2.87422 0.35C2.64089 0.116667 2.34922 0 1.99922 0C1.64922 0 1.34922 0.125 1.09922 0.375C0.849219 0.625 0.724219 0.916667 0.724219 1.25C0.724219 1.58333 0.849219 1.875 1.09922 2.125L8.44922 9.475L1.09922 16.825C0.865886 17.0583 0.749219 17.3457 0.749219 17.687C0.749219 18.029 0.874219 18.325 1.12422 18.575C1.37422 18.825 1.66589 18.95 1.99922 18.95C2.33255 18.95 2.62422 18.825 2.87422 18.575Z" fill="#FDB633"/>
</svg></div></div>
              <ul className='footer-subpart-ul'>
            <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Business+Services&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Business Services</Link></li>
                <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Car+Maintenance&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Car Maintenance & Repair</Link></li>
                <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Handyman+%26+Assembly&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Handyman & Assembly</Link></li>
                <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Home+Improvement&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Home Improvement</Link></li>
                <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Home+Services&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Home Services</Link></li>
                <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Pet+Care&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Pet Care</Link></li>
                <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Personal+Care&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Personal Care</Link></li>
                <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Removals+%26+Clearance&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Removals & Clearance</Link></li>
                <li><Link href='https://app.localtasker.co.uk/search?skillandcategory=&post_code=&parent_category_id=Wellness+%26+Fitness&subcategory=&subcategory=&subcategorychild=&gender=all_gender&post_code=&type=freelancer&type=freelancer'>Wellness & Fitness</Link></li>
             </ul>
            </div>
           </div>
          <ul className='social-media-container mb-3'>
            <li><Link href="https://www.youtube.com/@localtasker"><a target="_blank"><img src='/assets/Youtube.svg'/></a></Link></li>
            <li><Link href="https://www.tiktok.com/@localtaskeruk"><a target="_blank"><img src='/assets/tiktok.svg'/></a></Link></li>
            <li><Link href="https://www.instagram.com/localtaskeruk/"><a target="_blank"><img src='/assets/Instagram.svg'/></a></Link></li>
            <li><Link href="https://twitter.com/LocalTasker"><a target="_blank"><img src='/assets/Twitter.svg'/></a></Link></li>
            <li><Link href="https://www.facebook.com/profile.php?id=100089029999045"><a target="_blank"><img src='/assets/Facebook.svg'/></a></Link></li></ul>
          <h5 className='download-title'>Download our app</h5>
            <div className='apple-container'><img src='/assets/App store icon.svg'/><img  src='/assets/Google play icon.svg'/></div>
            <img src='/assets/FooterLogo.svg' alt='logo.svg' className='mt-5 foot200'/>
            <p className='copyrightpara'>&copy; Copyright 2023 Local Tasker. All rights reserved.<br/>Developed by <Link href="https://thedatech.com/"><a id="datechhover">DA Tech</a></Link></p>
      </div>
    </footer>
   </>
  
  )
}
