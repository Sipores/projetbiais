import React from "react";
import Formulaire from "../formulaire"

const Home = () => {
  return (
    <div className="p-4 flex flex-col items-center text-center">
      {/* Titre centré */}
      <h1 className="text-4xl font-bold mb-4" role="button" tabIndex="0">Les Biais Cognitifs</h1>

      {/* Présentation en deux paragraphes centrés */}
      <div className="max-w-xl">
        <p className="mb-4" role="button" tabIndex="0">
          Les biais cognitifs sont des distorsions systématiques dans la façon
          dont nous percevons, interprétons et prenons des décisions. Ils
          influencent notre jugement sans que nous en ayons toujours conscience.
        </p>
        <p className="mb-4" role="button" tabIndex="0">
          Comprendre ces biais est essentiel pour améliorer notre pensée
          critique et éviter les pièges mentaux dans notre vie quotidienne.
          Découvrons ensemble les mécanismes qui façonnent notre perception du
          monde.
        </p>
        <p className="mb-4" role="button" tabIndex="0">
            Ici chaqu'un/e de nos membre vas vous parler de certain biais cognitifs,
             ou comment ils peuvent être utliser ou présent dans notre vie.
        </p>
      </div>
      <br/>
      <Formulaire/>
      <br/>

    </div>
  );
};

export default Home;
