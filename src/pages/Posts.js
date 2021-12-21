import React from 'react'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const Container = styled.main`
   display: flex;
   flex-direction: column;
   background: red;
`

function Posts() {
   return (
      <Container>
         <Helmet title="Post"></Helmet>
         <h2>Posts</h2>
         <h3>{format(new Date(), "'Today is a' eeee")}</h3>
         <h3>
            {formatDistance(subDays(new Date(), 3), new Date(), {
               addSuffix: true,
            })}
         </h3>
         <h3>{formatRelative(subDays(new Date(), 3), new Date())}</h3>
      </Container>
   )
}

export default Posts
