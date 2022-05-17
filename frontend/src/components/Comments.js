import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Comments = () => {
	const [comment, setComments] = useState([]);
	const [open, setOpen] = useState(false);
	let { id } = useParams();

	useEffect(() => {
		const getcategory = async () => {
			const res = await fetch(`http://localhost:5000/api/comment/com/${id}`);
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

							<p className="bg-secondary text-white  mt-3 py-2 px-3">{curElem.full_name}</p>

							<p className="px-3" style={{ color: '#0cb4ce' }}>{curElem.message}</p>
						</div>

					)

				})
			}
		</div>
	)
}

export default Comments