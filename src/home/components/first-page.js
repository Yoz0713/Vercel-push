import React, { useLayoutEffect } from "react";
import {useState,useRef,} from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import { gsap} from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from "../../share_components/splitText";
gsap.registerPlugin(ScrollTrigger);
const requireWebp = require.context("../img/index", true, /^\.\/.*\.webp$/);
const requireSvg = require.context("../img/index", true, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const webp = requireWebp.keys().map(requireWebp);

    function Swiper1(){
        return (
            <Swiper
            modules={[ Pagination,Autoplay,EffectFade]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
         
              autoplay={{
                delay: 5000,
              
                disableOnInteraction: false,
              }}
              effect={"fade"}
              speed={2500}
        
            >
              <SwiperSlide><img src={webp[3]} className="banner computer" alt="banner1"/></SwiperSlide>
              <SwiperSlide><img src={webp[4]} className="banner computer" alt="banner2"/></SwiperSlide>
            </Swiper>
          );
    }

 function FirstPage(props){
        let [title] = useState(`優雅是一種態度，\r從一而終的追求至美，\r永恆在時代中綻放。`)
    
        let animation = useRef()
        let gg = useRef()
        useLayoutEffect(()=>{
            let ctx = gsap.context(()=>{
                gg.current = gsap.timeline()
                gg.current.fromTo(".split",{
                   
                    opacity:0,
                },{
                    y:0,
                    opacity:1,
                    duration:0.8,
                    stagger:0.08
                }).fromTo(".imgBox",{
                    x:-30,
                    opacity:0,
                },{
                    x:0,
                    opacity:1,
                    duration:0.8,
          
                },">-0.6")
            },animation)
            return()=>ctx.revert()
        })
        return(
        <section className="first-page" ref={animation}>
            <div className="first-page-title word_level">
                <h2 className="ch_text_xl">
                    <SplitText word={title}/>
                  
                </h2>
                <div className="imgBox">
                    <img src={svg[4]} alt="leaf"/>
                </div>
            </div>
            <Swiper1 />
        </section>
        )
   
}
function SecondPage(){
        let animation = useRef()
        let gg = useRef()
        useLayoutEffect(()=>{
            let ctx = gsap.context(()=>{
                gg.current = gsap.timeline({
                    scrollTrigger:{
                        trigger:".second-page-left",
                        start:"top 80%"
                    }
                })
                let delay = window.innerWidth > 1440 ? 1.2 : 0
                gg.current.fromTo(".second-page-left",{
                    
                    autoAlpha:0,
                    y:30
                },{ 
                    autoAlpha:1,
                    delay:delay,
                    y:0,    
                    duration:0.8
                }).fromTo(".second-page-right-para-para1",{
                    
                    autoAlpha:0,
                    y:30
                },{ 
                    autoAlpha:1,
                 
                    y:0,    
                    duration:0.8
                },"<+0.3").fromTo(".second-page-right-para-para2",{
                    
                    autoAlpha:0,
                    y:30
                },{ 
                    autoAlpha:1,
                 
                    y:0,    
                    duration:0.8
                },"<+0.3").fromTo(".second-page-right-para-para3",{
                    
                    autoAlpha:0,
                    y:30
                },{ 
                    autoAlpha:1,
                 
                    y:0,    
                    duration:0.8
                },"<+0.3").fromTo(".second-page-right .readmore",{
                    
                    autoAlpha:0,
                    y:30
                },{ 
                    autoAlpha:1,
                 
                    y:0,    
                    duration:0.8
                },"<+0.3")
                
            },animation)
            return ()=>ctx.revert()
        })
        return(
        <section className="second-page" ref={animation}>
           
           <div className="second-page-left">
                <div className="imgBox">
                    <img src={webp[8]} alt=""/>
                    <div className="cover-glowing">
                        
                    </div>
                </div>
            </div>
            <div className="second-page-right">
                <div className="second-page-right-para word_level">
                    <div className="second-page-right-para-para1">
                        <p className="en_text_s">NEW&ensp;PROJECT</p>
                        <p className="ch_text_m">至美新作</p>
                    </div>
                    <div className="second-page-right-para-para2">
                        <h2 className="ch_text_xl">典長成美</h2>
                        <p className="ch_text_xs">彰化高鐵特區<br/>成家成美</p>
                    </div>
                    <div className="second-page-right-para-para3">
                        <h3 className="ch_text_l">收藏一家人的幸福時光</h3>
                        <p className="ch_text_s">一座現代優雅的美墅聚落，刻劃家的美感，實現幸福樣貌，逐層陽台，是風光流暢的日常，舒適的空間，是家人的嚮往。</p>
                    </div>
                    <a href="./portfolio.html#portfolio-second-page">
                        <div className="readmore">
                            <p>更多內容</p>
                            <img src={svg[0]} alt=""/>
                        </div>
                    </a>
                    
                </div>
            </div>
            <div className="second-page-bg">
                <img src={svg[2]} alt=""/>
            </div>
        </section>
        )
   
}
class ThirdPage extends React.Component{
    render(){
        return(
            <section className="third-page">
                 <div className="third-page-top">
                    <div className="third-page-top-title word_level">
                        <p className="en_text_s">ABOUT&ensp;US</p>
                        <h3 className="ch_text_m">關於我們</h3>
                    </div>
                </div>
                <div className="third-page-bottom">
                <div className="third-page-bottom-left">
                    <div className="third-page-bottom-left-para word_level">
                        <div className="third-page-bottom-left-para-para1">
                            <h3 className="en_text_m">MI&ensp;CASA &ensp;SU&ensp; CASA</h3>
                        
                        </div>
                        <div className="third-page-bottom-left-para-para2">
                            <p className="ch_text_s">你的家，就是我們的家</p>
                        </div>
                        <div className="third-page-bottom-left-para-para3">
                            <p className="ch_text_s">家的模樣是什麼?<br/>是家前的那棵櫻花樹，隨四季變化<br/>還是倚坐在陽台，享受風光的流動<br/>一家人，因為家的每一處而幸福，<br/>那就是我夢想的家!<br/>也是你的家!</p>
                        </div>
                        <a href="./about.html">
                            <div className="readmore">
                                <p >更多內容</p>
                                <img src={svg[0]} alt=""/>
                            </div>
                        </a>
                     
                   
                    </div>
                </div>
                <div className="third-page-bottom-right">
                    <div className="imgBox">
                        <div className="cover-glowing">

                        </div>
                        <img src={webp[1]} alt=""/>
                    </div>
                </div>
                
                </div>
                <div className="third-page-bg">
                    <img src={svg[3]} alt=""/>
                </div>
            </section>
        )
    }
}
class ForthPage extends React.Component{
    render(){
        return(
            <section className="forth-page">
                <div className="forth-page-left">
                    <div className="imgBox">
                        <div className="cover-glowing">

                        </div>
                        <img src={webp[2]} alt=""/>
                    </div>
                </div>
                <div className="forth-page-right">
                <div className="forth-page-right-para word_level">
                    <h2 className="ch_text_xl">傳承恩典，成為更好</h2>
                    <p className="ch_text_s">從土地到生活，北長建設總是全力以赴將建築的本事，慢慢細磨，做到最好!典長是北長所孕育的孩子，我們承接這份善美的心念，帶著使命，成為更好!</p>
                </div>
                </div>
                <div className="forth-page-bg">
                    <img src={svg[1]} alt=""/>
                </div>
            </section>
        )
    }
}
class FifthPage extends React.Component{
    render(){
        return(
            <section className="fifth-page">
                     <div className="fifth-page-left">
                <div className="fifth-page-left-top">
                    <div className="fifth-page-left-top-left">
                        <div className="imgBox">
                            <div className="cover-glowing"></div>
                            <img src={webp[6]} alt=""/>
                        </div>
                     
                    </div>
                    <div className="fifth-page-left-top-right">
                        <div className="fifth-page-left-top-right-para word_level">
                            <div className="para1">
                                <h3 className="ch_text_l">擁抱綠意，自然為鄰</h3>
                            </div>
                            <div className="para2">
                                <p className="ch_text_s">一座現代優雅的美墅聚落，刻劃家的美感，實現幸福樣貌，逐層陽台，是風光流暢的日常，舒適的空間，是家人的嚮往。</p>
                            </div>
                            <a href="blog.html">
                                <div className="readmore">
                                    <p>更多內容</p>
                                    <img src={svg[0]} alt=""/>
                                </div>
                            </a>
                          
                        </div>
                    </div>
                </div>
                <div className="fifth-page-left-bottom">
                    <div className="fifth-page-left-bottom-left">
                        <div className="fifth-page-left-bottom-left-para word_level">
                            <div className="para1">
                                <h3 className="ch_text_l">擁抱綠意，自然為鄰</h3>
                            </div>
                            <div className="para2">
                                <p className="ch_text_s">一座現代優雅的美墅聚落，刻劃家的美感，實現幸福樣貌，逐層陽台，是風光流暢的日常，舒適的空間，是家人的嚮往。</p>
                            </div>
                            <a href="blog.html">
                                <div className="readmore">
                                    <p>更多內容</p>
                                    <img src={svg[0]} alt=""/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="fifth-page-left-bottom-right">
                        <div className="imgBox">
                            <div className="cover-glowing">

                            </div>
                            <img src={webp[6]} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fifth-page-right">
                <div className="imgBox">
                    <div className="cover-glowing">

                    </div>
                    <img src={webp[5]} alt=""/>
                </div>
                <div className="bg-title word_level">
                    <p className="en_text_s">BLOG</p>
                    <h3 className="ch_text_m">美宅札記</h3>
                    <p className="ch_text_s">家的趨勢與生活</p>
                    <img src={svg[5]} alt=""/>
                </div>
            </div>
            </section>
        )
    }
}
class SixthPage extends React.Component{
    render(){
        return(
            <section className="sixth-page">
                <div className="sixth-page-bg-title word_level">
                    <p className="ch_text_l">最<span className="ch_text_xl">新鮮</span>的事，<br/>
                    分享給最要好的你</p>
                </div>
                <div className="sixth-page-top">
                    <div className="sixth-page-top-title word_level">
                        <p className="en_text_s">LATEST&ensp;NEWS</p>
                        <h3 className="ch_text_m">典長新訊</h3>
                    </div>
                </div>
                <div className="sixth-page-bottom">
                <ul className="word_level">
                    <li>
                        <div className="imgBox">
                            <div className="cover-glowing"></div>
                            <img src={webp[7]} alt=""/>
                        </div>
                        <div className="news-date">
                            <p className="date">2022/07/06</p>
                        </div>
                        <div className="para1">
                            <h3 className="ch_text_l">擁抱綠意 自然為鄰</h3>
                        </div>
                        <div className="para2">
                            <p className="ch_text_s">一座現代優雅的美墅聚落，刻劃家的美感，實現幸福樣貌，逐層陽台，舒適的空間，是家人的嚮往。</p>
                        </div>
                        <a href="news.html">
                            <div className="readmore">
                                <p>更多內容</p>
                                <img src={svg[0]} alt=""/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <div className="imgBox">
                            <div className="cover-glowing">

                            </div>
                            <img src={webp[7]} alt=""/>
                        </div>
                        <div className="news-date">
                            <p className="date">2022/07/06</p>
                        </div>
                        <div className="para1">
                            <h3 className="ch_text_l">擁抱綠意 自然為鄰</h3>
                        </div>
                        <div className="para2">
                            <p className="ch_text_s">一座現代優雅的美墅聚落，刻劃家的美感，實現幸福樣貌，逐層陽台，舒適的空間，是家人的嚮往。</p>
                        </div>
                        <a href="news.html">
                            <div className="readmore">
                                <p>更多內容</p>
                                <img src={svg[0]} alt=""/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <div className="imgBox">
                            <div className="cover-glowing">

                            </div>
                            <img src={webp[7]} alt=""/>
                        </div>
                        <div className="news-date">
                            <p className="date">2022/07/06</p>
                        </div>
                        <div className="para1">
                            <h3 className="ch_text_l">擁抱綠意 自然為鄰</h3>
                        </div>
                        <div className="para2">
                            <p className="ch_text_s">一座現代優雅的美墅聚落，刻劃家的美感，實現幸福樣貌，逐層陽台，舒適的空間，是家人的嚮往。</p>
                        </div>
                        <a href="news.html">
                            <div className="readmore">
                                <p>更多內容</p>
                                <img src={svg[0]} alt=""/>
                            </div>
                        </a>
                       
                    </li>
                </ul>
            </div>
            </section>
        )
    }
}
export {FirstPage,SecondPage,ThirdPage,ForthPage,FifthPage,SixthPage}