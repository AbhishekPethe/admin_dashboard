import React from 'react'
import { menu } from '../data'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className='flex flex-col gap-4 border-gray-700 border-r-2 max-w-fit'>
      {
        menu.map((each, i) => {
          return (
            <div className='flex flex-col gap-3 pr-6' key={i}>
              <p className='text-xs opacity-50 underline max-sm:invisible max-sm:w-0'>
                {each.title.toUpperCase()}
              </p>

              <div className='flex flex-col gap-4 pl-2 '>
              {
                each.listItems.map((listItem , i) => {
                  return (
                    <Link key={i} className='text-lg flex items-center gap-3 ' href={`${listItem.url}`} >
                      <span className='text-2xl'>
                      {listItem.icon}
                      </span>
                      <span className='max-sm:hidden'>
                      {listItem.title}
                      </span>
                    </Link>
                  )
                })
              }
              </div>
            </div>
          )
        })

      }
    </div>
  )
}

export default Menu