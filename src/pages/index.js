import React, { useEffect, useState } from 'react'
import Spinner from 'react-spinkit'
import '../components/index/styles/index.scss'
import Projects from './projects'
export default function Index() {
  const [isLoading,setIsLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      
    setIsLoading(!isLoading)
    }, 5000);
  },[])
  return (
    isLoading ?
      <Projects />
      :
      <div className='index'>
        <Spinner name='double-bounce' color='#FFFFFF' className='index__spinner' />
        <h4>Loading...</h4>
      </div>

  )
}
