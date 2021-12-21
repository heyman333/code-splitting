import React from 'react'
import { Helmet } from 'react-helmet'
import Lottie from 'react-lottie'
import * as animationData from '../../public/test-lottie.json'

const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData: animationData,
   rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
   },
}

function About() {
   return (
      <>
         <Helmet title="About"></Helmet>
         <main style={{ padding: '1rem 0' }}>
            <h2>About</h2>
            <Lottie options={defaultOptions} />
         </main>
      </>
   )
}

export default About
