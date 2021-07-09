import React from 'react'
import '../components/styles/Layout.scss'
import BottomNavBar from './BottomNavBar'
export default function Layout(props) {
    const {children} = props
    return (
        <div className='layout'>
            {children}
            <BottomNavBar/>
        </div>
    )
}
