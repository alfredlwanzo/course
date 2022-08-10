import Image from 'next/image'
import React from 'react'

const IllustrationsSection = () => {
  return (
    <div className="max-w-4xl">
        <div className="grid grid-cols-2">
            <div>
            <Image src="/assets/images/project.jpeg" alt="" height={1002} width={644}/>
            </div>
            <div>
            <Image src="/assets/images/project2.jpeg" alt="" height={552} width={736}/>
            <Image src="/assets/images/project3.jpeg" alt="" height={552} width={736}/>
            </div>
        </div>

    </div>
  )
}

export default IllustrationsSection