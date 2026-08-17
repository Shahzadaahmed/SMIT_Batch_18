'use client';

import React, { useEffect, useState } from 'react';
import styles from "./animated.module.css";

const TextAnimationScreen = () => {
    const [count, setCount] = useState(0);
    const [animatedText, setAnimatedText] = useState(['s', 't', 'u', 'n', 'n', 'i', 'n', 'g']);

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
            if (count == animatedText.length - 1) setCount(0);
        }, 100);
    }, [count]);

    return (
        <div className={styles.container}>
            {
                animatedText.map((item, index) => {
                    return (
                        <span
                            key={index}
                            className={styles.text}
                            style={{ color: (count == index) ? ('white') : ('') }}
                        >
                            {item}
                        </span>
                    )
                })
            }
        </div>
    );
};

export default TextAnimationScreen;




// import React, { useRef } from 'react';

// const TextAnimationScreen = () => {
//     const h1Ref = useRef(null);

//     const changeBG = () => {
//         // console.log(h1Ref.current);
//         h1Ref.current.style.backgroundColor = "red";
//     };

//     return (
//         <div>
//             <h1
//                 className={styles.h1}
//                 onMouseOver={changeBG}
//                 ref={h1Ref}
//             >
//                 Helo SMIT!
//             </h1>
//         </div>
//     );
// };

// export default TextAnimationScreen;