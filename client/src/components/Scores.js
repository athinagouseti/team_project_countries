import React, { useState, useEffect } from "react";

const Scores = ({getResults}) => {

    // const handleDelete = () => { 
    //     deleteResult(booking._id).then(() => {
    //         removeBooking(booking._id)
    //     })
    // }

    const [scores, setScores] = useState([])

    useEffect(()=>{
        getResults()
        .then((data)=>{
          setScores(data)
        })
      },[]);

      {/* <button 
      // onClick={handleDelete}
      > Delete Score</button> */}

      const headerRow = scores[0]?.results.map((result) => {
          return <th>Round {result.round}</th>
      })

      const resultRows = scores?.map((score) => {
          const playerCell = <td>{score.name}</td>
          const resultCells = score.results.map((result) => {
              return <td>{result.winner ? "won" : "lost"}</td>
          })
          return (
              <tr>{playerCell}{resultCells}</tr>
          )
      })

    return (
        <div>
            <table> 
                <tr>
                    <th>Player</th>
                    {headerRow}
                </tr>
                {resultRows}
            </table>
        </div>
    )

}

export default Scores