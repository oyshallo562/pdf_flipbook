 // FlipBook.js

import React, { useEffect, useRef } from 'react';
import { PageFlip } from 'page-flip';
//46 pages
import page1 from '../src/page/01.png';
import page2 from '../src/page/02.png';
import page3 from '../src/page/03.png';
import page4 from '../src/page/04.png';
import page5 from '../src/page/05.png';
import page6 from '../src/page/06.png';
import page7 from '../src/page/07.png';
import page8 from '../src/page/08.png';
import page9 from '../src/page/09.png';
import page10 from '../src/page/10.png';
import page11 from '../src/page/11.png';
import page12 from '../src/page/12.png';
import page13 from '../src/page/13.png';
import page14 from '../src/page/14.png';
import page15 from '../src/page/15.png';
import page16 from '../src/page/16.png';
import page17 from '../src/page/17.png';
import page18 from '../src/page/18.png';
import page19 from '../src/page/19.png';
import page20 from '../src/page/20.png';
import page21 from '../src/page/21.png';
import page22 from '../src/page/22.png';
import page23 from '../src/page/23.png';
import page24 from '../src/page/24.png';
import page25 from '../src/page/25.png';
import page26 from '../src/page/26.png';
import page27 from '../src/page/27.png';
import page28 from '../src/page/28.png';
import page29 from '../src/page/29.png';
import page30 from '../src/page/30.png';
import page31 from '../src/page/31.png';
import page32 from '../src/page/32.png';
import page33 from '../src/page/33.png';
import page34 from '../src/page/34.png';
import page35 from '../src/page/35.png';
import page36 from '../src/page/36.png';
import page37 from '../src/page/37.png';
import page38 from '../src/page/38.png';
import page39 from '../src/page/39.png';
import page40 from '../src/page/40.png';
import page41 from '../src/page/41.png';
import page42 from '../src/page/42.png';
import page43 from '../src/page/43.png';
import page44 from '../src/page/44.png';
import page45 from '../src/page/45.png';
import page46 from '../src/page/46.png';


const styles = {

};


const FlipBook = () => {
    const flipBookRef = useRef(null);
    const flipinstanceRef = useRef(null);

    const handleNextPage = () => {
        if (flipBookRef.current) {
            flipBookRef.current.flipNext('bottom'); 
        }
    }
    
    const handlePrevPage = () => {
        if (flipBookRef.current) {
            flipBookRef.current.flipPrev('bottom'); 
        }
    }


    useEffect(() => {
        if (flipBookRef.current) {
            flipinstanceRef.current = new PageFlip(flipBookRef.current, {
                width: 770, 
                height: 1080,
                showCover: false
            });

            const pages = flipBookRef.current.querySelectorAll('.my-page');
            if (pages && pages.length > 0) {
                flipinstanceRef.current.loadFromHTML(pages);
            }
    
            return () => {
                if (flipinstanceRef.current) {
                    //pageFlipInstanceRef.current.destroy();
                    //pageFlipInstanceRef.current = null;
                }
            };
        }
    }, []);

    return (
        <div style={styles}>

            <div id ="book" className="flip-book" ref={flipBookRef}>
            <div className="my-page"><img src={page1} alt="Page 1" /></div>
            <div className="my-page"><img src={page2} alt="Page 2" /></div>
<div className="my-page"><img src={page3} alt="Page 3" /></div>
<div className="my-page"><img src={page4} alt="Page 4" /></div>
<div className="my-page"><img src={page5} alt="Page 5" /></div>
<div className="my-page"><img src={page6} alt="Page 6" /></div>
<div className="my-page"><img src={page7} alt="Page 7" /></div>
<div className="my-page"><img src={page8} alt="Page 8" /></div>
<div className="my-page"><img src={page9} alt="Page 9" /></div>
<div className="my-page"><img src={page10} alt="Page 10" /></div>
<div className="my-page"><img src={page11} alt="Page 11" /></div>
<div className="my-page"><img src={page12} alt="Page 12" /></div>
<div className="my-page"><img src={page13} alt="Page 13" /></div>
<div className="my-page"><img src={page14} alt="Page 14" /></div>
<div className="my-page"><img src={page15} alt="Page 15" /></div>
<div className="my-page"><img src={page16} alt="Page 16" /></div>
<div className="my-page"><img src={page17} alt="Page 17" /></div>
<div className="my-page"><img src={page18} alt="Page 18" /></div>
<div className="my-page"><img src={page19} alt="Page 19" /></div>
<div className="my-page"><img src={page20} alt="Page 20" /></div>
<div className="my-page"><img src={page21} alt="Page 21" /></div>
<div className="my-page"><img src={page22} alt="Page 22" /></div>
<div className="my-page"><img src={page23} alt="Page 23" /></div>
<div className="my-page"><img src={page24} alt="Page 24" /></div>
<div className="my-page"><img src={page25} alt="Page 25" /></div>
<div className="my-page"><img src={page26} alt="Page 26" /></div>
<div className="my-page"><img src={page27} alt="Page 27" /></div>
<div className="my-page"><img src={page28} alt="Page 28" /></div>
<div className="my-page"><img src={page29} alt="Page 29" /></div>
<div className="my-page"><img src={page30} alt="Page 30" /></div>
<div className="my-page"><img src={page31} alt="Page 31" /></div>
<div className="my-page"><img src={page32} alt="Page 32" /></div>
<div className="my-page"><img src={page33} alt="Page 33" /></div>
<div className="my-page"><img src={page34} alt="Page 34" /></div>
<div className="my-page"><img src={page35} alt="Page 35" /></div>
<div className="my-page"><img src={page36} alt="Page 36" /></div>
<div className="my-page"><img src={page37} alt="Page 37" /></div>
<div className="my-page"><img src={page38} alt="Page 38" /></div>
<div className="my-page"><img src={page39} alt="Page 39" /></div>
<div className="my-page"><img src={page40} alt="Page 40" /></div>
<div className="my-page"><img src={page41} alt="Page 41" /></div>
<div className="my-page"><img src={page42} alt="Page 42" /></div>
<div className="my-page"><img src={page43} alt="Page 43" /></div>
<div className="my-page"><img src={page44} alt="Page 44" /></div>
<div className="my-page"><img src={page45} alt="Page 45" /></div>
<div className="my-page"><img src={page46} alt="Page 46" /></div>

            </div>
        </div>
    );
}

export default FlipBook;
