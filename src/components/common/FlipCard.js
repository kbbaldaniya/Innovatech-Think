import React from 'react'
import Title from './Title'

const CardData = [{
  bgImg: 'https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg',
  heading: 'Wed Development',
  content: ['Concept', 'Design', '3D Modeling'],
  disc: 'This service is for you',
  startPrice: 123,
  endPrice: 456,
  icon: <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
  <path
    fill="currentColor"
    fillRule="evenodd"
    d="M14 7a1 1 0 00-1 1v8a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1h-4zm3 2h-2v6h2V9z"
    clipRule="evenodd"
  />
  <path
    fill="currentColor"
    d="M6 7a1 1 0 000 2h4a1 1 0 100-2H6zM6 11a1 1 0 100 2h4a1 1 0 100-2H6zM5 16a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z"
  />
  <path
    fill="currentColor"
    fillRule="evenodd"
    d="M4 3a3 3 0 00-3 3v12a3 3 0 003 3h16a3 3 0 003-3V6a3 3 0 00-3-3H4zm16 2H4a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1z"
    clipRule="evenodd"
  />
</svg>
},
{
  bgImg: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg',
  heading: 'App Development',
  content: ['Native', 'Flutter'],
  disc: 'Application development service',
  startPrice: 132,
  endPrice: 465,
  icon: <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    height="1em"
    width="1em"
  >
    <path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 01-2-2V8a2 2 0 012-2h6zm-5.75 14H3a2 2 0 01-2-2V2c0-1.1.9-2 2-2h12a2 2 0 012 2v4a2 2 0 012 2v10a2 2 0 01-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
},
{
  bgImg: 'https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg',
  heading: 'Wed Development',
  content: ['Concept', 'Design', '3D Modeling'],
  disc: 'This service is for you',
  startPrice: 123,
  endPrice: 456,
  icon: <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
  >
    <path d="M15.496 18.381a.052.052 0 00.03-.033l.693-2.217 3.192-4.791a.052.052 0 00.003-.004.052.052 0 00.001-.002.052.052 0 00.001-.002.052.052 0 00.002-.005.052.052 0 000-.003.052.052 0 00.002-.003.052.052 0 000-.004.052.052 0 000-.005.052.052 0 000-.003.052.052 0 000-.003l-.416-6.947a.052.052 0 000-.001.052.052 0 000-.005.052.052 0 000-.002.052.052 0 00-.004-.008.052.052 0 00-.002-.005.052.052 0 00-.002-.004.052.052 0 00-.003-.005.052.052 0 00-.003-.003.052.052 0 000-.001L14.818.016V.014a.052.052 0 00-.005-.003.052.052 0 00-.003-.002.052.052 0 00-.003-.002.052.052 0 00-.002-.001.052.052 0 00-.002-.001.052.052 0 00-.002-.001.052.052 0 000-.001.052.052 0 00-.003 0 .052.052 0 00-.002-.001A.052.052 0 0014.79 0a.052.052 0 00-.004 0 .052.052 0 00-.002 0 .052.052 0 00-.002 0 .052.052 0 00-.003 0 .052.052 0 00-.002 0H9.22a.052.052 0 00-.003 0 .052.052 0 00-.004 0 .052.052 0 00-.004 0 .052.052 0 00-.003.001.052.052 0 00-.003.001.052.052 0 00-.005.002.052.052 0 00-.004.003.052.052 0 00-.004.002.052.052 0 00-.001 0 .052.052 0 00-.003.004.052.052 0 00-.001 0 .052.052 0 00-.003.003L5.01 4.326a.052.052 0 00-.003.005.052.052 0 00-.006.009.052.052 0 00-.002.005.052.052 0 00-.002.008.052.052 0 000 .002.052.052 0 00-.001.003.052.052 0 000 .003l-.417 6.95a.052.052 0 000 .002.052.052 0 000 .005.052.052 0 000 .004.052.052 0 000 .002.052.052 0 000 .005.052.052 0 000 .003.052.052 0 00.002.002.052.052 0 000 .002.052.052 0 00.002.002.052.052 0 00.003.004.052.052 0 000 .003l3.195 4.79.692 2.215v.002a.052.052 0 000 .001.052.052 0 00.001.002.052.052 0 00.002.003.052.052 0 000 .001.052.052 0 00.001.002.052.052 0 000 .001.052.052 0 00.002.001.052.052 0 00.001.003.052.052 0 00.001.001.052.052 0 00.001.001.052.052 0 00.002.002.052.052 0 00.003.004.052.052 0 00.002.001.052.052 0 00.002.002.052.052 0 00.001 0 .052.052 0 00.003.003.052.052 0 00.001 0 .052.052 0 00.002.001.052.052 0 00.002.002.052.052 0 00.001 0 .052.052 0 00.001 0 .052.052 0 00.001.001.052.052 0 00.002 0 .052.052 0 00.001.001.052.052 0 00.001 0 .052.052 0 00.003.001.052.052 0 00.002 0 .052.052 0 000 .001.052.052 0 00.003 0 .052.052 0 00.002 0 .052.052 0 00.003.001.052.052 0 00.001 0 .052.052 0 00.002 0h6.954a.052.052 0 00.02-.004zm-.058-.1H8.889l7.203-2.095zm.618-2.193L8.619 18.25l2.704-5.678zm.068-.08L11.39 12.49l5.14-4.125zm.11-.087l.4-7.542 2.668 2.937zm-7.7 2.27l-.647-2.07 3.232-3.36zm-.698-2.166l-3.094-4.641 6.457 1.143zm11.472-4.858l-2.655-2.92 2.256-3.718zm-7.975 1.236L9.3 5.283l7.188 2.983zm-.102.024l-6.508-1.152 4.475-5.966zm5.285-4.26L9.315 5.175 14.748.15zm.095-.053L14.87.217l4.015 4.15zM4.693 11.14l.403-6.72 4.03.807zm4.474-6.011l-4.015-.803L9.167.178zm.104-.056V.1h5.376zm-.748 13.36v4.143l1.672-1.403zm.057 4.232l1.53.612 1.81.723-1.67-2.737zM12.081 24l3.339-1.335-1.67-1.402zm3.395-1.424v-4.144l-1.67 2.74zm-6.86-4.192L12 23.932l3.383-5.548z" />
  </svg>
}
]

const FlipCard = () => {
  return (
    <>
      <Title title='SERVICES' />
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
                    {obj.icon}
                  </div>
                  <p> {obj.disc} </p>
                  <div className="serv-price-wrap"><span>Price</span>${obj.startPrice}-${obj.endPrice}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default FlipCard
