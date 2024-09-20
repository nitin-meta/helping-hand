import React,{useEffect} from 'react'
import "../../Styles/GallaryStyle.css"
import img1 from "../../assets/img1.jpeg"
import im3 from "../../assets/img2.jpg"
import im2 from "../../assets/im2.jpg"
import im from "../../assets/im.jpg"
import im0 from "../../assets/im0.jpg"
import im4 from "../../assets/im4.jpg"
import im5 from "../../assets/im5.jpg"
function Section4() {

    useEffect(() => {
        let items = document.querySelectorAll('.slider .slide .item');
        let next = document.getElementById('next');
        let prev = document.getElementById('prev');
        let thumbnails = document.querySelectorAll('.thumbnail .item');
    
        // config param
        let countItem = items.length;
        let itemActive = 0;
    
        // event next click
        next.onclick = function () {
          itemActive = itemActive + 1;
          if (itemActive >= countItem) {
            itemActive = 0;
          }
          showSlider();
        };
    
        // event prev click
        prev.onclick = function () {
          itemActive = itemActive - 1;
          if (itemActive < 0) {
            itemActive = countItem - 1;
          }
          showSlider();
        };
    
        // auto run slider
        let refreshInterval = setInterval(() => {
          next.click();
        }, 5000);
    
        function showSlider() {
          // remove item active old
          let itemActiveOld = document.querySelector('.slider .slide .item.active');
          let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
          itemActiveOld.classList.remove('active');
          thumbnailActiveOld.classList.remove('active');
    
          // active new item
          items[itemActive].classList.add('active');
          thumbnails[itemActive].classList.add('active');
    
          // clear auto time run slider
          clearInterval(refreshInterval);
          refreshInterval = setInterval(() => {
            next.click();
          }, 5000);
        }
    
        // click thumbnail
        thumbnails.forEach((thumbnail, index) => {
          thumbnail.addEventListener('click', () => {
            itemActive = index;
            showSlider();
          });
        });
    
        return () => {
          // Clean up event listeners and intervals when the component unmounts
          next.onclick = null;
          prev.onclick = null;
          clearInterval(refreshInterval);
        };
      }, []);
  return (
    <section className='gallary_section '>
            <div className='text-center about_text mb-5'>
         <p style={{fontWeight:"900",fontSize:"3.5rem"}}>Our
          <span style={{color:"#fc9f32"}}> &nbsp;Causes</span></p>
         </div>
            
    <div className="slider">

    <div className="slide">
                  
    

        <div className="item active" >
              <img src={im2} className='img-fluid' alt=""/>
            <div className="content">
                <div className="name" style={{color:"white",textShadow:"1px 2.5px 3px black"}}>
                <h1 style={{fontFamily:"fantasy",fontSize:"3.3rem"}}>Our mission</h1>
                </div>
                <div className="des" style={{color:"white"}}>
                <p>
                Our mission is to support the hopeless, homeless, abandoned, and disabled by connecting 
                them to NGOs through our website.
                 We aim to help them gain recognition and contribute to the nation's development.
                </p>
                </div>
                <button className='read_more'>See More</button>
            </div>
        </div>
                         
        <div className="item " >
              <img src={im3}  alt=""/>
            <div className="content">
            <div className="name" style={{color:"white",textShadow:"1px 2.5px 3px black"}}>
            <h1 style={{fontFamily:"fantasy",fontSize:"2.4rem"}}>From Despair to Hope: A Journey to a Better Life</h1>
            </div>
                <div className="des" style={{color:"white"}}>
                <p>
                Once wandering the streets, sad, helpless, and hungry, these individuals now live a better life. 
                With support, they’ve found companionship, regained their smiles, and embraced happiness. 
                Today, they no longer struggle but thrive, filled with hope and purpose.
                
                </p>
                </div>
                <button className='read_more'>See More</button>
            </div>
        </div>

        <div className="item " >
             <img src={im4}  alt=""/>
        <div className="content">
        
        <div className="name" style={{color:"white"}}>
        <div className="name" style={{color:"white",textShadow:"1px 2.5px 3px black"}}>
        <h1 style={{fontFamily:"fantasy",fontSize:"3.1rem"}}>Empowering Young Lives</h1>
        </div>
        </div>
        <div className="des" style={{color:"white"}}>
        <p>
        
        I am providing education and medical facilities to street children who previously
         roamed and solicited. By offering these essential services, 
        I aim to help them become independent, build successful careers, and achieve a brighter future.
        </p>
        </div>
            <button className='read_more'>See More</button>
        </div>
    </div>
        
    </div>

    <div  className='arrows d-flex justify-content-center align-items-start'>
       <div>
       <button id='prev' className='prev ms-3'>&lt;</button>
       <button id='next' className='next ms-3'>&gt;</button>
       </div>
     </div>


     {/*thumbnail */}
     <div  className='thumbnail'>
              <div className='item active'>
              <img src={im}  alt=""/>
              <div className='content' style={{color:"white"}}>OUR MISSION</div>
              </div>
              <div className='item'>
              <img src={im3}  alt=""/>
              <div className='content' style={{color:"white"}}>From Despair to Hope</div>
              </div>
              <div className='item'>
              <img src={im5}  alt=""/>
              <div className='content' style={{color:"white"}}>Empowering Young Lives</div>
              </div>
     </div>

</div>
      
    </section>
  )
}

export default Section4