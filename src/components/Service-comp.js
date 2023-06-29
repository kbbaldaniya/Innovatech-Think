import React from 'react'
import Title from './common/Title'
import FlipCard from './common/FlipCard'

const CardData = [{
  bgImg: 'https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg',
  heading: 'Wed Development',
  content: ['Concept', 'Design', '3D Modeling'],
  disc: 'This service is for you',
  startPrice: 123,
  endPrice: 456
},
{
  bgImg: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg',
  heading: 'App Development',
  content: ['Native', 'Flutter'],
  disc: 'Application development service',
  startPrice: 132,
  endPrice: 465
},
{
  bgImg: 'https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg',
  heading: 'Wed Development',
  content: ['Concept', 'Design', '3D Modeling'],
  disc: 'This service is for you',
  startPrice: 123,
  endPrice: 456
}
]

const ServiceComp = () => {
  return (
    <>
      <Title title='SERVICES' />
      <FlipCard CardData={CardData} />
    </>
  )
}

export default ServiceComp
