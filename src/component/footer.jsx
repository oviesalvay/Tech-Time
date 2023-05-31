import '../styles/footer.css'
import facebook from '../asssest/facebook.svg';
import YouTube from '../asssest/YouTube.svg';
import Instagram from '../asssest/Instagram.svg';
import Discord from '../asssest/Discord.svg';
import techtime from '../asssest/techtime.svg';

const Footer = () =>{
return(
    <div>
      <footer>
        <div className="footer-content">
        <img src={techtime} alt='techtime'/>
        <p>Reach out to us on any of our social media networks</p>
        <div className="social-icons">
          <img src={facebook} alt="facebook"/> 
          <img src={YouTube} alt='youtube'/>
          <img src={Instagram} alt='instagram'/>
          <img src={Discord} alt='discord'/>
        </div>
</div>
<div className='Usefull-Links'>
  <h4>Useful links</h4>
  <li>home</li>
  <li>about us</li>
  <li>our courses</li>
  <li>testimonials</li>
<li>our community</li>
</div>
<div className='Community'>
  <h4>Community</h4>
  <li>help centers</li>
  <li>partners</li>
  <li>suggestion</li>
  <li>blog</li>
  <li>newsletter</li>
</div>
<div className='subscribe'>
<h4>Subscribe us</h4>
<div className="input-details">
<form>
  <input type="email" id="email" placeholder='nft123@gmail.com'/>
    <button className='message'>send message</button>
</form>
</div>
</div>
</footer>
    </div>
)
}
export default Footer;