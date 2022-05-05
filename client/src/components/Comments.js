import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Comments = () => {
  const [comment, setComments] = useState([]);
  const [open, setOpen] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const getcategory = async () => {
      const res = await fetch(`http://localhost:5000/api/v1/comments/com/${id}`);
      const getcat = await res.json();
      // console.log('getdata', getcat);
      setComments(await getcat.comments1);
      // console.log('comments',Comments)
    }
    getcategory();
  })

  return (

    <div>

      {
        comment.map((curElem) => {
          return (
            <div className="col-md-12">

              <p className="bg-dark text-white fw-bolder mt-3 py-3 px-3">{curElem.full_name}</p>

              <p className="px-3">{curElem.message}</p>
            </div>

          )

        })
      }
    </div>
  )
}

export default Comments