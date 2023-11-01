import React from 'react'
import { sidebarLinks } from '../../../data/dashboard-links'
import {logout} from '../../../services/operations/authAPI'
import { useSelector } from 'react-redux'
import SidebarLink from './SidebarLink' 

const Sidebar = () => {
    const { user , loading: profileLoading} = useSelector( (state) => state.profile)
    const {loading: authLoading} = useSelector( (state) => state.auth)

    if(profileLoading || authLoading){
        return (
            <div className='spinner grid place-items-center'>
            
            </div>
        )
    }
  return (
    <div>
      <div>
      <div>
      {
        sidebarLinks.map( (link, index) => {
          if(link.type && user?.accountType !== link.type) return null;

          return (
            <SidebarLink/>
          )
        })
      }
      </div>
      </div>
    </div>
  )
}

export default Sidebar
