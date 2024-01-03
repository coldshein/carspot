'use client'

import { Button } from '@radix-ui/themes'
import React from 'react'
import { useRouter } from 'next/navigation'
import { IShowMore } from '@/types'
import { updateSearchParams } from '@/utils'

const ShowMore = ({pageNumber, isNext} : IShowMore) => {
    const router = useRouter();
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
        const newPathName = updateSearchParams('limit', String(newLimit))

        router.push(newPathName, {scroll: false})
    }
  return (
    <div className='w-full flex justify-center items-center py-8'>
        {!isNext && (
            <Button size="4" onClick={handleNavigation}>Show More</Button>
        )}
    </div>
  )
}

export default ShowMore