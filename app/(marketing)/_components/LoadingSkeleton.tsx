import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div>
      Loading...
        <Skeleton className="h-24 w-96" />
    </div>
  )
}

export default LoadingSkeleton