import React from 'react'
import './Destinations.css'

import {MdLocationPin} from 'react-icons/md'
import {BsFillCalendarDateFill, BsFillCreditCardFill} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {TiLocation} from 'react-icons/ti'

import image1 from '../../Assets/image-1.webp'
import image2 from '../../Assets/image-2.jpg'
import image3 from '../../Assets/image-3.jpg'
import image4 from '../../Assets/image-4.jpg'
import image5 from '../../Assets/image-5.webp'
import image6 from '../../Assets/image-6.jpg'
import image7 from '../../Assets/image-7.webp'
import image8 from '../../Assets/image-8.jpg'

const destination = [
  {
    id: 1,
    img: image1,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },
]

const Destinations = () => {
  return (
    <div className='destination section contaienr'>
      <div className="secContainer">
        <div className="">
          <span className="redText">EXPLORE NOW</span>
            <h3>Find Your Dream Destination</h3>
            <p>
              Fill in the fields below to find the best
              spot for your next tour.
            </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex">
            <MdLocationPin className='icon' />
            <input type="text" placeholder='Location' />
          </div>
          <div className="inputField flex">
            <BsFillCreditCardFill className='icon' />
            <input type="text" placeholder='Budget' />
          </div>
          <div className="inputField flex">
            <BsFillCalendarDateFill className='icon' />
            <input type="text" placeholder='Date' />
          </div>

          <button className="btn flex">
             <BiSearchAlt className='icon'/>
            Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex">
            <li className='active'>All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">

          <div className="singleDestination">
            <div className="imgDiv">
              <img src={image1} alt="Destination Image" />

              <div className="descInfo flex">
                <div className="text">
                  <span className="name">
                    Baro baro Island
                  </span>
                  <p className="flex">
                    <TiLocation className="icon"/>
                    Netherlands
                  </p>
                </div>
                <span className="rating">
                  4.6
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Destinations
