import "./Table.css"


export const Table = ({ details }) => {
    console.log("table", details);
    console.log("cheak",details.marital)

    return <div >


        <table>
            <thead>
                <tr>
                    <th>profile</th>
                    <th>name</th>
                    <th>age</th>
                    <th>addresss</th>
                    <th>depart</th>
                    <th>salary</th>
                    <th>marital</th>
                </tr>

            </thead>
            <tbody>


                {

                    details.map((el) => (
                       
                        <tr>
                            <td> <img id="imkkk" src={el.profile} alt="" /></td>
                            <td> <p className="data"> {el.name}</p></td>
                            <td><p className="data"> {el.age}</p></td>
                            <td><p className="data">{el.address}</p></td>
                            <td><p className="data">{el.depart}</p></td>
                            <td><p className="data">{el.salary}</p></td>
                            <td><p className="data">{el.marital==true ? <p>Yes</p>:<p>No</p> }</p></td>
                            
                        </tr>






                    ))
                }
            </tbody>
        </table>
    </div>
}