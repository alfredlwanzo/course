import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const ContentSection = () => {
  return (
    <article className="max-w-3xl mx-auto px-3 sm:px-6">
        {/* Chapter 1 */}
      <div>
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
    </article>
  );
};

export default ContentSection;
