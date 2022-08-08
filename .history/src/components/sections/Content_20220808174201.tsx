import React from 'react'
import {CheckIcon} from "@heroicons/react/outline"

const ContentSection = () => {
  return (
    <article className="max-w-3xl mx-auto px-3 sm:px-6">
        <div>
            <h2 className="text-3xl">Chapitre 1.  Développer des API pour votre application avec Nodejs</h2>
            <ul className="list-inside pl-5">
                <li className='text-xl '><CheckIcon className='inline-block h-8 w-8 mr-3 text-green-400'/>Introduction général à nodejs</li>
                <li className='text-xl '>Structure de contrôle</li>
                <li className='text-xl '>Structure de données</li>
                <li className='text-xl '>Introduction à Express.js</li>
                <li className='text-xl '>Premier API REST avec Express</li>
                <li className='text-xl '>Notion sur Mongodb</li>
                <li className='text-xl '>Express et Mongodb + Prisma</li>
                <li className='text-xl '>Notion sur le Graphql</li>
                <li className='text-xl '>Apollo-graphql + mongoose</li>
            </ul>
        </div>
    </article>
  )
}

export default ContentSection