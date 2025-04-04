import React from 'react'
import '../css/table.css'

const Map1=()=>{
    const pro=[
        {pId:1,name:"Mobile",pPrice:25000,pDate:"8/4/2025",pAddress:"Kolkata"},
        {pId:2,name:"Head Phone",pPrice:15000,pDate:"12/5/2025",pAddress:"Mumbai"},
        {pId:3,name:"Smart Watch",pPrice:14000,pDate:"19/8/2025",pAddress:"Chennai"},
        {pId:4,name:"Laptop",pPrice:60000,pDate:"17/3/2025",pAddress:"Berhampore"},
    ]

    return(
        <div className='table'>
            <h1>PRODUCT TABLE</h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>PRODUCT ID</th>
                        <th>PRODUCT NAME</th>
                        <th>PRODUCT PRICE</th>
                        <th>PRODUCT DATE</th>
                        <th>PRODUCT ADDRESS</th>
                    </tr>
                </thead>
                <tbody>
                   {pro.map(pro=>(
                        <tr key={pro.pId}>
                            <td>{pro.pId}</td>
                            <td>{pro.name}</td>
                            <td>{pro.pPrice}</td>
                            <td>{pro.pDate}</td>
                            <td>{pro.pAddress}</td>
                        </tr>
                   ))}
                </tbody>
            </table>
        </div>
    )
}

export default Map1