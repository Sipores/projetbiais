import React, { useEffect } from "react";

const About = () => {
  const handleKeyDown = (event) => {
          const sectionIds = [
              "introduction",
              "halo-bias",
              "consequences",
              "overcoming-bias",
              "essay-conclusion"
            ];
        
            // Si l'utilisateur appuie sur "Alt" + un chiffre de 1 à 5, faites défiler vers la section correspondante
            const sectionNumber = parseInt(event.key);
            if (event.altKey && sectionNumber >= 1 && sectionNumber <= 5) {
              const sectionId = sectionIds[sectionNumber - 1]; // Décrémentation de 1 pour correspondre à l'index du tableau
              document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
            }
        };
      
        useEffect(() => {
          window.addEventListener("keydown", handleKeyDown);
      
          return () => {
            window.removeEventListener("keydown", handleKeyDown);
          };
        }, []);

  return (
    <article
            role="article"
            aria-labelledby="essay-title"
            className="p-4 ml-8 mr-8">
            <header className="mb-6">
                <h1 id="essay-title" className="text-3xl font-bold text-gray-900 mb-2" tabIndex="0">
                    L'impact de l'apparence sur la confiance et les jugements sociaux
                </h1>
                <p className="text-sm text-gray-600">
                    Par <strong className="font-semibold">DESABLENS Maëva</strong>. Dernière mise à jour :{" "}
                    <time dateTime="2025-01-09" className="italic">
                        9 janvier 2025
                    </time>
                    .
                </p>
            </header>

            <section aria-labelledby="introduction" className="mb-6" tabIndex="0">
                <h2 id="introduction" className="text-2xl font-semibold text-gray-800 mb-4">
                    Introduction
                </h2>
                <p className="mb-4">
                  Dans notre société, l'apparence va avoir un rôle crucial dans la manière dont nous percevons les autres personnes. 
                  Lorsqu'une personne est bien habillée, soignée et s'exprime facilement, elle va être plus souvent considérée 
                  comme plus compétente et plus responsable. Alors, qu’une personne avec un style plus décontracté ou moins travaillé 
                  peut être jugée différemment, et parfois sans raison valable. 
                  Ce phénomène s'explique par un biais cognitif appelé le "biais de halo", où une caractéristique d'une personne influence 
                  (comme son apparence) la façon dont sont perçues toutes les autres qualités de l'individu. 
                  Ce phénomène à un impact sur nos jugements sociaux et professionnels.
                </p>
            </section>

            <section aria-labelledby="halo-bias" className="mb-6" tabIndex="0">
                <h2 id="halo-bias" className="text-2xl font-semibold text-gray-800 mb-4">
                Le biais de halo : un mécanisme psychologique qui affecte nos perceptions
                </h2>
                <p className="mb-4">
                  Le biai de halo est un phénomène qui est également un concept psychologique. Ce phénomène fait référence 
                  à effectuer des jugements sur une autre personne en nous basant simplement sur une caractéristique spécifique 
                  de celle-ci. Par exemple, une personne bien habillée peut être automatiquement étiquetée comme plus compétente, 
                  plus intelligente et même plus sympathique simplement parce qu’elle a une image plus soignée, sans que cela ait 
                  à voir avec ses compétences ou le fait qu’une personne soit vraiment sympathique.
                </p>
                <p className="mb-4">
                  Les chercheurs ont découvert qu’une personne attirante peut, en général, être considérée comme bonne dans son travail,
                  même si cela n’a aucun rapport avec ses réelles capacités. Cela montre comment l’apparence peut affecter la façon dont
                  quelqu’un voit une autre personne, même si cela n’a rien à voir avec sa véritable personnalité ou ses capacités.

                </p>
            </section>

            <section aria-labelledby="consequences" className="mb-6" tabIndex="0">
                <h2 id="consequences" className="text-2xl font-semibold text-gray-800 mb-4">
                  Les conséquences de ce biais dans la vie quotidienne et professionnelle
                </h2>
                <p className="mb-4">
                  Les conséquences du biais de halo sont nombreuses et se manifestent de manière concrète dans plusieurs aspects
                  de nos vies. Dans les relations sociales, ce biais peut conduire à des stéréotypes injustes. En effet, une personne
                  qui prend soin de son apparence peut être vue comme plus sociable ou plus agréable, alors qu'une personne prenant
                  moins soin de son apparence pourrait être perçue de manière défavorable avec aucune raison valable. Cette tendance
                  à juger les personnes sur leur apparence renforce des stéréotypes sociaux et peut mener à des jugements erronés.
                </p>
                <p className="mb-4">
                  Ce biais est aussi présent dans le milieu professionnel. Par exemple, lors d’un entretien d’embauche, une
                  personne qui sera bien habillée va pouvoir gagner des points supplémentaires grâce à son apparence. Contrairement
                  à un autre candidat moins soigné mais avec potentiellement plus de qualification. Cela conduit à des décisions 
                  biaisées en ne tenant pas compte des vraies compétences des candidats mais de leur image extérieure.
                </p>
                <p className="mb-4">
                  Cette tendance à privilégier l’apparence à d’autres aspects à un impact négatif dans la société en 
                  général. Elle vient contribuer à mettre une pression constante à tout le monde pour être “parfait”, à 
                  l’image de certains idéaux imposés par les médias ou la culture populaire. Ceux qui ne correspondent 
                  pas à ces critères sont souvent perçus comme moins capables ou moins dignes de confiance, ce qui 
                  peut engendrer des inégalités dans différents domaines de la vie.
                </p>
            </section>

            <section aria-labelledby="overcoming-bias" className="mb-6" tabIndex="0">
                <h2 id="overcoming-bias" className="text-2xl font-semibold text-gray-800 mb-4">
                  Comment surmonter ce biais et éviter les jugements hâtifs ?
                </h2>
                <p className="mb-4">
                  Pour faire face à l'impact du biais de halo, il est essentiel d'être conscient de ce biais et de s'efforcer 
                  de l'empêcher. En expliquant aux personnes ce biais, l'éducation peut aider à remettre en question les préjugés
                  et à adopter une attitude plus objective envers les autres personnes..
                </p>
                <p className="mb-4">
                  En ce qui concerne le milieu professionnel, comme les entretiens de recrutement. L'utilisation de critères objectifs 
                  est essentielle pour évaluer les compétences des candidats. En instaurant des entretiens anonymes, par exemple, où 
                  l'apparence ne peut pas être jugée, ce qui diminue l'impact de ce biais.
                </p>
                <p className="mb-4">
                  Cependant, ce qui importe le plus, c'est de remettre en question les normes sociales qui mettent en avant certaines 
                  apparences plutôt que d'autres. Une société plus inclusive, qui accepte toutes les apparences, pourrait aider à 
                  diminuer l'influence de ces critères superficiels.
                </p>
            </section>

            <footer aria-labelledby="essay-conclusion" className="pt-6 border-t border-gray-300" tabIndex="0"   >
                <h2 id="essay-conclusion" className="text-2xl font-semibold text-gray-800 mb-4">
                    Conclusion
                </h2>
                <p>      
                  L'apparence d'une personne a un impact trop important sur notre manière de juger les autres, 
                  parfois de manière injuste. Le biais de halo nous révèle que les préjugés sont fondés sur des 
                  critères superficiels comme l'apparence ou l'éloquence. Pour être plus justes et objectifs dans nos 
                  interactions, il est crucial que nous apprenions à dépasser ces premières impressions et 
                  à évaluer les individus en fonction de leurs véritables qualités et compétences. En faisant cela, 
                  nous pourrions établir une société plus équitable et plus ouverte à la diversité.

                </p>
            </footer>
        </article>
    );
};

export default About;
