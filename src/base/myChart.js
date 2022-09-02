import React from 'react';

import SparkLineTable from './components/SparkLineTable.jsx';
import {useSelector} from "react-redux";
import {Table} from "reactstrap";

const MyChart=()=>{

const {em}=useSelector(store=>store)
console.log(em)
    return (
       <>



           <SparkLineTable >
               <Table dark variant="dark"  bordered hover responsive striped  className={'my-4'}>
                   <thead className={'table-light'}>
                   <tr>
                       <th>#</th>
                       <th>Date</th>
                       <th>Count</th>
                       <th>Past</th>

                       <th>Current</th>

                       <th>Future</th>
                   </tr>
                   </thead >
                   <tbody id="tbody-sparkline">

                   {
                       em.employees.map((item,index)=>{
                           console.log(index)
                           {   }

                           return(
                               <tr>
                                   <th>{index+1}</th>
                                   <td>{item.date}</td>
                                   <td>{item.count}</td>
                                   <td data-sparkline={`${index%2===0 ? item.count*-index:item.count*index}, ${ item.count*index }, ${ item.count*-index }, ${index%2===0?item.count*-index:item.count*index} `} />

                                   <td data-sparkline={`${ item.count*-index }, ${index%2===0 ? item.count*-index:item.count*index}, ${ item.count*index }, ${ item.count*index }`} />

                                   <td data-sparkline={` ${ item.count*-index }, ${ item.count*index }, ${index%2===0?-item.count*index:item.count*index}, ${index%2===0?item.count*index:item.count*-index}  ; column`} />
                               </tr>
                           )
                       })
                   }
                   </tbody>
               </Table>
           </SparkLineTable>




       </>
    )
}
export default MyChart