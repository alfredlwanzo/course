import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const ContentSection = () => {
  return (
    <article className="max-w-3xl mx-auto px-3 sm:px-6">
      <blockquote className="bg-black border-l-8 border-l-primary text-gray-100 p-4">
        <h6 className="text-primary">Contenu</h6>
        Nous avons mis du temps pour préparer ce contenue riche, nous allons une approche de rentre de notion complexe, facile à comprendre. Nous voulons qu’une personne après avoir participer à cette formation de Full-stack developer, soit capable de produire une application de A à Z sans beaucoup de difficultés. Notre Objectif est de créer de meilleurs développeurs Full-stack indépendant.
      </blockquote>
      {/* Chapter 1 */}
      <div className="mt-4">
        <h2 className="text-3xl font-medium">
          Chapitre 1. Développer des API pour votre application avec Nodejs
        </h2>
        <ul className="list-inside pl-5 mt-4">
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Introduction général à nodejs
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Structure de contrôle
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Structure de données
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Introduction à Express.js
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Premier API REST avec Express
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Notion sur Mongodb
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Express et Mongodb + Prisma
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Notion sur le Graphql
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Apollo-graphql + mongoose
          </li>
        </ul>
      </div>
      {/* Chapitre 2 */}
      <div className="mt-6">
        <h2 className="text-3xl font-medium">
          Chapitre 2. Mise en pratique de développement serveur
        </h2>
        <ul className="list-inside pl-5 mt-4 ">
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            REST-API d’E-commerce avec express et mongodb
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Graphql-API d’application de gestion avec apollo-server et mongodb
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Dockerfile
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Déploiement sur Google cloud Run
          </li>
        </ul>
      </div>
      {/* Chapitre 3 */}
      <div className="mt-6">
        <h2 className="text-3xl font-medium">
          Chapitre 3. Développement mobile avec Flutter
        </h2>
        <ul className="list-inside pl-5 mt-4 ">
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Introduction au langage Dart
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Introduction à flutter
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Composants (Widgets)
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            State management (Provider)
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Flutter et Firebase
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Flutter et SQLite pour le stockage local
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Flutter pour le Media (Camera, Image, vidéo, audio)
          </li>
        </ul>
      </div>
       {/* Chapitre 4 */}
       <div className="mt-6">
        <h2 className="text-3xl font-medium">
          Chapitre 4. Mise en pratique complète, Section de clonage de projets existant
        </h2>
        <ul className="list-inside pl-5 mt-4 ">
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Développement d’une application d’E-commerce avec REST-API
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Développement d’une application de Twitter avec Google Firebase
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Développement d’une librairie client pour graphql
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Développement d’une application de Gestion commerciale avec Graphql avec AWS AppSync
          </li>
          <li className="text-xl ">
            <CheckIcon className="inline-block h-8 w-8 mr-3 text-green-400" />
            Déploiement sur playstore
          </li>
        </ul>
      </div>
      <blockquote className="border-l-4 border-l-green-400 p-6 mt-6 bg-gray-200 text-xl text-gray-700">
        En participant vous aurez <span className="font-bold">accès à une vidéo chaque jour</span> pour rappeler les notions apprise pendant le live
      </blockquote>
    </article>
  );
};

export default ContentSection;
