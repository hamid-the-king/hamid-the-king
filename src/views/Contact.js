import { ShakeLittle,ShakeHard,ShakeCrazy, ShakeSlow, ShakeHorizontal } from 'reshake'
import {useState} from "react";
// import {ShakeCrazy} from "reshake/src";
// import {ShakeHard} from "reshake/src";


const Contact=()=>{
    const [shake,setShake]=useState(<ShakeLittle fixed>Coming Soon. . .</ShakeLittle>)


    const onEnter=()=>{
        setShake(<ShakeCrazy >Coming Soon. . .</ShakeCrazy>)
    }
    const onOut=()=>{
        setShake(<ShakeLittle fixed>Coming Soon. . .</ShakeLittle>)
    }
    return (

        <div className={'d-flex justify-content-center align-items-center about-wrapper'}>
            <div onMouseLeave={onOut} onMouseEnter={onEnter}   className={' text-center about  text-danger '}>



                {
                    shake
                }
            </div>
        </div>
    )
}
export default  Contact
