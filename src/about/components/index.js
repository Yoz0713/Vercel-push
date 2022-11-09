
import React,{useState,useRef,useLayoutEffect} from "react"
import { SplitText } from "../../share_components/splitText";
import { gsap} from "gsap"
const requireWebp = require.context("../../home/img/about", true, /^\.\/.*\.webp$/);
const requireWebp2 = require.context("../../home/img", true, /^\.\/.*\.webp$/);
const requireSvg = require.context("../../home/img/about", true, /^\.\/.*\.svg$/);
const requireSvg2 = require.context("../../home/img//SVG/SVG", true, /^\.\/.*\.svg$/);
const svg = requireSvg.keys().map(requireSvg);
const svg2 = requireSvg2.keys().map(requireSvg2);
const webp = requireWebp.keys().map(requireWebp);
const webp2 = requireWebp2.keys().map(requireWebp2);

function FirstPage(props){
        let [title]= useState(`為城市種下美的種子，\r為你築起一輩子的好宅。`)
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
                 <div className="first-page-bg magic-hover magic-hover__square">
                <img src={webp[3]} className="computer" alt=""/>
                <img src="./img/ph-banner/about_ph.webp" className="phone" alt=""/>
                </div>
                <div className="first-page-title word_level">
                <h2 className="ch_text_xl">
                    <SplitText word={title}/>
                </h2>
                <div className="imgBox">
                    <img src={svg2[1]} alt=""/>
                    <div className="para">
                        <h2 className="ch_text_l">關於<br/>
                            我們</h2>
                        <h4 className="en_text_xs">ABOUT</h4>
                    </div>
                
                </div>
               
            </div>
            </section>
        )
    
}

function SecondPage (){

        return(
            <section className="second-page">
            
                <div className="second-page-left">
                <div className="imgBox">
                    <div className="cover-glowing">

                    </div>
                    <img src={webp[0]} alt=""/>
                </div>
            </div>
            <div className="second-page-right">
                <div className="second-page-right-para word_level">
                    <div className="second-page-right-para-para1">
                        <h3 className="en_text_xl">MICASASUCASA</h3>
                    
                    </div>
                    <div className="second-page-right-para-para2">
                        <p className="ch_text_s">你的家，就是我們的家</p>
                    </div>
                    <div className="second-page-right-para-para3">
                        <p className="ch_text_s">家的模樣是什麼?<br/>是家前的那棵櫻花樹，隨四季變化<br/>還是倚坐在陽台，享受風光的流動<br/>一家人，因為家的每一處而幸福，<br/>那就是我夢想的家!<br/>也是你的家!</p>
                    </div>
             
               
                </div>
            </div>
            </section>
        )

}
export function ThirdPage(){
    return(
        <section className="third-page">
                   <div className="third-page-left">
                        <div className="third-page-left-para word_level">
                            <h2 className="ch_text_xl">不只好宅，更是美宅</h2>
                            <p className="ch_text_s">典長蓋的房子，不只要好，更要美!用一份良心，把建築細磨到最好，讓生活在此的人，能安心一輩子，用一式美學，妝點空間裡的每個細節，從植樹、造景、線條、光影，每一個呈現，都象徵著我們的祝福，讓回家的人，時刻感受到美與幸福</p>
                        </div>
                    </div>
                    <div className="third-page-right">
                        <div className="imgBox">
                            <div className="cover-glowing">

                            </div>
                            <img src={webp[1]} alt="" />
                        </div>
                    </div>
                    <div className="third-page-bg">
                        <img src={svg[0]} alt=""/>
                    </div>
        </section>
    )
}

export function ForthPage(){
    return(
        <section className="forth-page">
                 <div className="forth-page-left">
        
        <div className="forth-page-left-box word_level">
            <h3 className="ch_text_l">三心良意</h3>
            <div className="box">
                <img src={svg[10]} alt=""/>
            </div>
            <div className="box">
                <img src={svg[11]} alt=""/>
            </div>
            <div className="box">
                <img src={svg[8]} alt=""/>
            </div>
            <div className="box">
                <img src={svg[9]} alt=""/>
            </div>
            <div className="line">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0.5 67" className="straight">
                  
                <g className="g1">
                    <line className="cls-1 " x1="0.25" x2="0.25" y2="67"  fill="none" stroke="#254179" strokeWidth="0.5px"/>
                </g>    
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0.5 67" className="straight2">
                    
                <g className="g1">
                    <line className="cls-1 " x1="0.25" x2="0.25" y1="67" y2="0"  fill="none" stroke="#254179" strokeWidth="0.5px"/>
                </g>    
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.85 89.8" className="left-bottom">
                    
                    <line className="cls-1" x1="104.69" y1="0.19" x2="0.16" y2="89.61" fill="none" stroke="#254179" strokeWidth="0.5px"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.85 89.8" className="right-bottom">
                  
                    <line className="cls-1" x1="0.16" y1="0.19" x2="104.69" y2="89.61"  fill="none" stroke="#254179" strokeWidth="0.5px"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.78 136" className="path-left">
                  
                        <path className="cls-1" d="M3.56,5.48S41.78,97,128,132.44" fill="none" stroke="#254179" strokeWidth="0.5px"/><circle className="cls-2" cx="3.56" cy="3.56" r="3.56" fill="#254179"/><circle className="cls-2" cx="130.22" cy="132.44" r="3.56" fill="#254179"/>
                    </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.78 136" className="path-right">
                    
                    <path className="cls-1" d="M130.22,5.48S92,97,5.78,132.44" fill="none" stroke="#254179" strokeWidth="0.5px"/><circle className="cls-2" cx="130.22" cy="3.56" r="3.56" fill="#254179"/><circle className="cls-2" cx="3.56" cy="132.44" r="3.56" fill="#254179"/>
                    </svg>
            </div>
        </div>
       
    </div>
        </section>
    )
}
export function FifthPage(){
    return(
        <section className="fifth-page">
            <div className="fifth-page-top">
                <div className="imgBox">
                    <div className="cover-glowing">

                    </div>
                    <img src={webp[2]} alt=""/>
                </div>
            </div>
            <div className="fifth-page-bottom">
                <div className="fifth-page-bottom-para word_level">
                    <h2 className="ch_text_xl">典長的精神，從北長開始</h2>
                    <p className="ch_text_s">30多年的北長建設，是我們的母親，孕育出新一代的典長，北長建設，以細膩嚴謹的態度，美學優雅的底蘊，在城市中打造無數的至美建築。一路以來堅持品質工藝與美學兼容；一樹一景、角隅的藝術，以及勾勒天際的美學建築，都是為居住者營造的美好生活。30年來，因為同心共美，住戶成為了我們的知音，見證北長成為悠遠永續的善美企業。</p>
                </div>
            </div>
            <div className="fifth-page-bg">
                <img src={svg[1]} alt=""/>
            </div>
        </section>
    )
}
export {FirstPage,SecondPage}