import React from 'react'
import TopBanner from '../../components/TopBanner'
import Review from '../../components/Review'
import Book from '../../components/Book'

function Testimonials() {
  return (
    <>
    <TopBanner pageName={"Testimonials"} />
    <Review />
    <Book />
    </>
  )
}

export default Testimonials