import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {ACTION_SET_EMPLOYEES} from "../redux/slices/employeeSlice";
import MyChart from "../base/myChart";
import Loder from "../base/loder";

const Home=()=>{
    const {em}=useSelector(store=>store)
    const [loading,setLoading]=useState(true);
    const dispatcher=useDispatch()


    const fetchData=async ()=>{
        try{
            const {data}=await axios({
                url:'https://api.jsonstorage.net/v1/json/2047cafe-6385-4583-bdb6-0c21e80f4a0c/19822c69-bd4e-4732-b138-00af16c597ab'
            })

            dispatcher(ACTION_SET_EMPLOYEES(data.employees))
            setLoading(false)
            // console.log(em.employees)

        }catch (e){
            if(e){
                console.log(e)
            }
        }
    }

    useEffect( ()=>{
        fetchData()
    },[])
   return (
  <>

      {
           loading? <Loder/>:<MyChart/>
      }


 </>
   )
}
export default  Home