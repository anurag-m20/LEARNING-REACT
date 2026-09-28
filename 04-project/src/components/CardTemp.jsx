import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {

  console.log(props.company);

  return (
    <div className="card">
      <div>
        <div className="top">
          <img
            src="https://media.istockphoto.com/id/157375891/photo/scarlet-macaws.webp?a=1&b=1&s=612x612&w=0&k=20&c=pSC_90Q1eNCGlIlz95RhIHAn1FTnMILtlcnQKHqC7aU="
            alt=""
          />

          <button>
            save <Bookmark size={10} />
          </button>
        </div>

        <div className="center">
          <h3>
            {props.company} <span>5 days ago</span>
          </h3>

          <h2>{props.post}</h2>

          <div className="tag">
            <h4>part time</h4>
            <h4>senior level</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <div>
            <h3>$120/hr</h3>
            <p>mumbai,india</p>
          </div>

          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card