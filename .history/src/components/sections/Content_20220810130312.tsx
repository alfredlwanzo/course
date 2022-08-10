import React from "react";
import { CheckIcon } from "@heroicons/react/outline";
import Image from "next/image";

const ContentSection = () => {
  return (
    <article className="max-w-3xl mx-auto px-3 sm:px-6">
      <blockquote className="bg-gray-900 border-l-8 border-l-primary text-xl text-gray-200 p-4">
        <h6 className="text-primary text-3xl font-extrabold">Contenu de la formation</h6>
        Des projets de A à Z. Du frontend au backend en passant par la conception et l’usage des bonnes pratiques. (flutter, <span className="text-primary">nodejs</span>,  mongodb, <span className="text-primary">google cloud run</span>, docker, ...)
        <Image
        src="/assets/images/affiche3.jpg"
        alt=""
        width={1658}
        height={469}
        className="mt-3"
      />
      </blockquote>
      {/* Chapter 1 */}
      <div className="mt-6">
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
      <blockquote className="border-l-8 border-l-primary p-6 mt-6 bg-gray-100 text-gray-700">
      Avec 6 projets réels à développer,
            nous espèrons que vous allez aimer l’aventure.{" "}
            <span className="font-comfortaa font-bold">Innov</span> (notre
            équipe) prépare les séances avec totale concentration, dans le but
            de vous fournir du contenu riche et surtout simple à comprendre.
      </blockquote>
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
            Développement d’une application de crypto money avec Google Firebase
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
      <blockquote className="border-l-8 border-l-primary p-6 mt-6 bg-gray-100 text-gray-700">
        En participant vous aurez <span className="font-bold text-primary">accès à une vidéo chaque jour</span> pour rappeler les notions apprise pendant le live
      </blockquote>
    </article>
  );
};

export default ContentSection;
