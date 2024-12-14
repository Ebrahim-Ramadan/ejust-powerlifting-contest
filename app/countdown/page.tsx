import {Countdown} from '@/components/Countdown'
import React, { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
<Countdown/>

    </Suspense>
    )
}
