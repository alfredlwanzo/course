import Image from 'next/image'
import React from 'react'

const IllustrationsSection = () => {
  return (
    <div className="">
        <div className="grid grid-cols-2">
            <div>
            <Image src="/assets/images/project.jpeg" alt="" height={1002} width={644}/>
            </div>
            <div>
            <Image src="/assets/images/projet2.jpeg" alt="" height={552} width={736}/>
            <Image src="/assets/images/projet3.jpeg" alt="" height={552} width={736}/>
            </div>
        </div>

    </div>
  )
}

export default IllustrationsSection