import React from 'react'
import { isEmpty, random } from 'lodash-es'
import { Helmet } from 'react-helmet'

function Home() {
   return (
      <>
         <Helmet title="Home"></Helmet>
         <main style={{ padding: '1rem 0' }}>
            <h2>Home!!!!!!!!</h2>
            {random(5) % 2 === 0 && <h1>print something!</h1>}
            {isEmpty(true) && <h2>hello!</h2>}
         </main>
      </>
   )
}

export default Home
