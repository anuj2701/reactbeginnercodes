// ************HOOKS*****************
import React, { useState } from 'react';


const App = () => {
    const state = useState();
    let newTime = new Date().toLocaleTimeString();
    const [ctime, setTime] = useState(newTime);

    const updateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setTime(newTime)


    }
    setInterval(updateTime, 1000)
    return (
        <>
            <h1 className='heading'>{newTime}</h1>
            <div className='but'>
                <button className='btn' onClick={updateTime}>Click me</button>
            </div>


        </>
    )
};
// ************HOOKS*****************








// SlotMachine
// import React from 'react';
// // import Sdata from './Sdata';
// // import Card from './Card';

// const SlotM = (prop) => {
//     let x = prop.x;
//     let y = prop.y;
//     let z = prop.z;

//     if (x === y && y === z) {
//         return (
//             <>
//                 <div className='slot_inner'>
//                     <h1>
//                         {x} {y} {z}

//                     </h1>
//                     <h1>This is Matching.</h1>
//                     <hr />


//                 </div>

//             </>
//         );
//     } else {
//         return (
//             <>
//                 <div className='slot_inner'>
//                     <h1>
//                         {x} {y} {z}

//                     </h1>
//                     <h1>This is  Not Matching.</h1>
//                     <hr />


//                 </div>

//             </>
//         )
//     }


// }

// const App = () => {
//     return (<>
//         <h1 className="heading_style">
//             🎰 Welcome to
//             <span > Slot Machine 🎰 </span>
//         </h1>
//         <div className='slot_machine'>
//             <SlotM x="😃" y="😃" z="😃" />
//             <SlotM x='😋' y='😋' z='😀' />
//             <SlotM x='😃' y='😃' z='😍' />
//         </div>

//     </>);

// }





// Netflix App
//
//
//
// const App = () => {
//     return (
//         <>
//             <h1 className="headingstyle">List of Top 5 NETFLIX SERIES</h1>
//             <div className="card1">
//                 <Card imgsrc={Sdata[0].imgsrc}
//                     title={Sdata[0].title}
//                     sname={Sdata[0].sname}
//                     link={Sdata[0].link}
//                 />
//             </div>
//             <div className="card2">
//                 <Card imgsrc={Sdata[1].imgsrc}
//                     title={Sdata[1].title}
//                     sname={Sdata[1].sname}
//                     link={Sdata[1].link}
//                 />
//             </div>
//             <div className="card3">
//                 <Card imgsrc={Sdata[2].imgsrc}
//                     title={Sdata[2].title}
//                     sname={Sdata[2].sname}
//                     link={Sdata[2].link}
//                 />
//             </div>
//             <div className="card4">
//                 <Card imgsrc={Sdata[3].imgsrc}
//                     title={Sdata[3].title}
//                     sname={Sdata[3].sname}
//                     link={Sdata[3].link}
//                 />
//             </div>
//         </>


//     );
// }
export default App;

