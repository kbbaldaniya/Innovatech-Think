import React from 'react'

const FlipCard = ({ CardData }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {CardData?.map((obj) =>
        <div className="content-inner fl-wrap ">
          <div className="content-front">
            <div className="cf-inner">
              <div className="bg" style={{ backgroundImage: `url(${obj.bgImg})` }}></div>
              <div className="overlay"></div>
              <div className="inner">
                <h2>{obj.heading}</h2>
                <ul>
                  {obj.content?.map((con) => <li>{con}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div className="content-back">
            <div className="cf-inner">
              <div className="inner">
                <div className="dec-icon">
                  <i className="fal fa-desktop"></i>
                </div>
                <p> {obj.disc} </p>
                <div className="serv-price-wrap"><span>Price</span>${obj.startPrice}-${obj.endPrice}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FlipCard
