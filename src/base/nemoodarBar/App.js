import React from "react";
import BarChart from "react-bar-chart";
import {useSelector} from "react-redux";
// import "./styles.css";

export default function App() {
    const {em}=useSelector(store=>store)
    // console.log(em.employees,'hh')
    let newArr=em.employees.map((item,index)=>{
        return (
            {
                text:item.date,
                value:item.count
            }
        )
    })
    console.log(newArr,'jj')
    const data = newArr;

    const margin = { top: 40, right: 0, bottom: 30, left: 200 };

    return (
        <div className="App">
            <div style={{ width: "1%" }}>
                <BarChart

                    ylabel="Count"
                    width={em.employees.length*50}
                    height={500}
                    margin={margin}
                    data={data}
                   bgColor='red'
                />
            </div>
        </div>
    );
}
