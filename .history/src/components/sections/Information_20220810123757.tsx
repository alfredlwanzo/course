import Image from 'next/image'
import React from 'react'
import SubscribeButton from '../buttons/SubscribeButton'

const InformationSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-3">
      <div className="border-l-8 border-l-gray-900">
    <p className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl md:text-center">
      Investissez à vous
    </p>
    <p className="md:text-center text-xl text-gray-900 max-w-4xl mx-auto mt-3 md:mt-5">
      Nous avons mis du temps à préparer le contenue de cette formation.
      Nous voulons qu’une personne ayant participé à ce Bootcamp
      puisse être capable de produire une application de A à Z sans
      beaucoup de difficultés. Notre objectif est de créer de meilleurs
      développeurs Full-stack.
    </p>
    </div>
    <div className="mt-5">
      <Image
        src="/assets/images/affiche3.jpg"
        alt=""
        width={1658}
        height={469}
        className=""
      />
      <div className="flex justify-center mt-4">
        <SubscribeButton label="C'est parti!" />
      </div>
    </div>
  </div>
  )
}

export default InformationSection