import React from "react";
import PairProgramming from "../icons/PairProgramming";

const HomeSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-0">
        <div>
          <div className="bg-gray-700 bg-opacity-40 w-max py-1 px-3 rounded-full">
            <h6 className="font-bold text-primary">
              {" "}
              Du 1 septembre au 25 octobre 2022.
            </h6>
          </div>
          <h1 className="text-6xl font-extrabold uppercase mt-2">
            Bootcamp pour devenir fullstack developpeur
          </h1>
          <p className="text-xl mt-2">
            Ce bootcamp est une machine pour vous transformer en un développeur
            Full-Stack. Vous allez apprendre plusieurs notions difficiles à
            trouver dans nos universités. Avec 6 projets réels à développer,
            nous espèrons que vous allez aimer l’aventure.{" "}
            <span className="font-comfortaa font-bold">Innov</span> (notre
            équipe) prépare les séances avec totale concentration, dans le but
            de vous fournir du contenu riche et surtout simple à comprendre.
          </p>
          <div className="mt-9">
            <a href="https://wa.me/+243978154329" target="_blank" rel="noreferrer" className="bg-black text-primary py-4 px-10 text-xl font-semibold rounded-full border-4 border-gray-800 hover:bg-opacity-90">
                Inscrivez-vous maintenant !
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <PairProgramming className=" w-auto h-72 md:h-80" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
