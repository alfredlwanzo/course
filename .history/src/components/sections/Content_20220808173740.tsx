import React from 'react'
import {CheckIcon} from "@heroicons/react/outline"

const ContentSection = () => {
  return (
    <article className="max-w-3xl mx-auto px-3 sm:px-6">
        <div>
            <h2>Chapitre 1 :  Développer des API pour votre application avec Nodejs</h2>
            <ul className="list-inside list-decimal pl-4">
                <li><CheckIcon className='inline-block h-8 w-8'/>Introduction général à nodejs</li>
                <li>Structure de contrôle</li>
                <li>Structure de données</li>
                <li>Introduction à Express.js</li>
                <li>Premier API REST avec Express</li>
                <li>Notion sur Mongodb</li>
                <li>Express et Mongodb + Prisma</li>
                <li>Notion sur le Graphql</li>
                <li>Apollo-graphql + mongoose</li>
            </ul>
        </div>
    </article>
  )
}

export default ContentSection