import React, { useState, useEffect } from 'react'
import '../css/History.css';
import { useParams } from 'react-router-dom'

const History = () => {
  const [histories, setHistories] = useState([]);
  const [open, setOpen] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const getcategory1 = async () => {
      const res = await fetch(`http://localhost:5000/api/v1/history/his/${id}`);
      const getcat = await res.json();
      console.log('getdata', getcat);
      setHistories(await getcat.histories1);
    }
    getcategory1();
  }, [])
  return (


    <div>
      {

        histories.map((histories) => {
          return (
            <div className="col-md-12">
              <p className="bg-dark text-white fw-bolder mt-3 py-2 px-3">{histories.full_name}</p>
              <p className="px-3">{histories.message}</p>
            </div>
          )

        })
      }
       {/* <p className="bg-dark text-white fw-bolder mt-3 py-3 px-3">{histories.full_name}</p>
          <p className="px-3">{histories.message}</p> */}

    </div>





  )
}

export default History