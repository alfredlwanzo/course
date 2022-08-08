import React from "react";
import PairProgramming from "../icons/PairProgramming";

const HomeSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-0">
        <div>
          <div className="bg-gray-700 bg-opacity-25 w-max py-1 px-2 rounded-full">
            <h6 className="font-bold"> Du 1 septembre au 25 octobre 2022.</h6>
          </div>
          <h1 className="text-6xl font-extrabold uppercase">
            Bootcamp pour devenir fullstack developpeur
          </h1>
          <p className="text-xl">
            Ce bootcamp est une machine pour vous transformer en un
            Développeur Full-Stack. Vous aller apprendre plusieurs notions
            difficiles de trouver à nos universités. Avec 6 projets réels à
            developper nous espèrons que vous allez aimer l’aventure. <span className="font-comfortaa font-bold">Innov</span> (notre équipe) prépare déjà les séances avec totale concentration, dans le
            but de vous fournir du contenu riche et surtout simple à comprendre.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <PairProgramming className=" w-auto h-80" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
