import React, { useEffect } from "react";


const Nathan = () => {

    const handleKeyDown = (event) => {
        const sectionIds = [
            "section1",
            "section2",
            "section3",
            "section4",
            "section5",
            "section6",
            "section7",
            "section8",
          ];
      
          // Si l'utilisateur appuie sur "Alt" + un chiffre de 1 à 7, faites défiler vers la section correspondante
          const sectionNumber = parseInt(event.key);
          if (event.altKey && sectionNumber >= 1 && sectionNumber <= 8) {
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
    <div className="p-4 ml-8 mr-8">
      <h1 className="text-4xl font-bold text-center mt-4 mb-6" role="button" tabIndex="0">
        Les démarcheurs de rue ou comment utiliser les biais cognitifs pour lever des fonds
      </h1>
      <p className="text-sm text-gray-600">
                    Par <strong className="font-semibold">SANS Nathan</strong>. Dernière mise à jour :{" "}
                    <time dateTime="2025-01-09" className="italic">
                        8 janvier 2025
                    </time>
                    .
                </p>
      <article>
        <section id="section1" className="mt-6" role="button" tabIndex="0">
            <h2 className="text-2xl font-semibold mt-6" >Introduction</h2>
            <p >
                &nbsp;&nbsp;&nbsp;&nbsp;En effet, qui ne s’est jamais fait arrêter pour aider son prochain, une espèce en voie de disparition ou encore sauver un pays entier. Cette méthode s'appelle le démarchage de rue, une pratique qui consiste à inviter des personnes à participer monétairement tous les mois pour aider ces causes.
            </p>
            <p>
                Si la légalité peut être questionnée ici, nous nous intéresserons plus sur la méthode utilisée, et plus précisément sur quels biais cognitifs il s’appuie.
            </p>
        </section>

        <section id="section2" className="mt-6" role="button" tabIndex="0">
            <h2 className="text-2xl font-semibold mt-6">Le Biais de l'Autorité</h2>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Et l’utilisation des biais cognitifs se fait avant même que la personne prenne la parole, en effet ce premier biais est celui de l’autorité. En effet, ils sont assez reconnaissables de loin, une tenue flashy arborant un insigne de grande association caritative. Cette tenue n'est pas du tout anodine, elle nous permet en un regard de savoir qui ils sont, mais aussi et surtout de leur donner cette autorité qui nous laisse penser qu’on a en face des experts. Ainsi, lorsque la discussion commencera, on aura tout de suite une certaine confiance envers la personne.
            </p>
        </section>  

        <section id="section3" className="mt-6" role="button" tabIndex="0">
            <h2 className="text-2xl font-semibold mt-6">Le Biais de Sympathie et de Réciprocité</h2>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Puis l’échange va commencer, ici c’est le biais de sympathie et le biais de réciprocité, qui vont être utilisés. La personne va venir échanger de manière sympathique, avec une petite blague, ou en donnant l'impression de s'intéresser à la personne. Pour ce faire, il demandera le nom de la personne ou comment va la personne. Si ça peut paraître anodin, cela permet de briser la glace et d’augmenter les personnes qui pourraient répondre. On va plus facilement accepter d’écouter ce qu’ils ont à nous dire pour éviter de blesser la personne vu qu’elle est sympathique.
            </p>
        </section>
        
        <section id="section4" className="mt-6" role="button" tabIndex="0">
            <h2 className="text-2xl font-semibold mt-6">Le Biais d'Aversion à la Perte</h2>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Après un petit échange pour mettre en place le biais de sympathie et le biais de réciprocité, la conversation va entrer dans le vif du sujet, c'est-à-dire contribuer avec une valeur monétaire pour une cause. À ce moment, c'est le biais d’aversion à la perte. Ils vont nous expliquer que grâce à notre participation on pourrait aider cette cause, et surtout que sans cette participation on ne pourra pas fournir cette aide. Ici, le but est de jouer sur la corde sensible du piéton, mais aussi de jouer avec ce biais pour faire peur à ce piéton, de rater cette aide et aussi de se retrouver dans cette situation.
            </p>
        </section>
        
        <section id="section5" className="mt-6" role="button" tabIndex="0">
            <h2 className="text-2xl font-semibold mt-6">L'Effet de Cadrage</h2>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Lors de cette conversation, ils vont aussi utiliser l'effet de cadrage, en tournant leur phrase de telle sorte à ce qu’on soit plus favorable à participer. Par exemple, avec "Avec seulement 1€ par jour, vous pouvez changer une vie.". Ici, on va jouer avec “seulement”, pour inciter que ce n’est pas grand chose, puis “1€ par jour” qui paraît tout à fait acceptable. C’est une petite somme par rapport à la journée, mais on a environ 30 euros pour le mois et 366 euros pour l’année. Puis la phrase se finit quand même avec quelque chose de fort, “vous pouvez changer une vie”. Tous ces mots, bien qu’ils semblent anodins, sont calculés pour faciliter la participation.
            </p>
        </section>
        
        <section id="section6" className="mt-6" role="button" tabIndex="0">
            <h2 className="text-2xl font-semibold mt-6">Le Biais de Preuve Sociale</h2>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Enfin, pour finir, il y a le biais de preuve sociale. En effet, une fois le démarchage bien avancé, la personne va vous proposer de signer pour participer. Et cette feuille n’a rien d'anodin aussi, elle retrace toutes les personnes ayant pu participer. Ainsi, avec juste cette feuille, on voit que des personnes ont déjà participé. Et ainsi, le sentiment de vouloir appartenir à la norme se fait sentir et on veut participer pour être comme les autres.
            </p>
        </section> 
        
        <section id="section7" className="mt-6" role="button" tabIndex="0"  >
            <h2 className="text-2xl font-semibold mt-6">Le Biais de Simple Exposition</h2>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Et même si la personne ne vient pas vous parler, il y a là aussi un biais cognitif. Celui de la simple exposition, le fait de les voir de manière répétée vous habituer à leur présence et le jour où ils vous accepteront, vous serez plus enclin à écouter ce qu’ils ont à dire et même à participer.
            </p>
        </section>

        <section id="section8" className="mt-6" role="button" tabIndex="0"  >
            <h2 className="text-2xl font-semibold mt-6">Conclusion</h2>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Ainsi, on peut voir qu’il existe de nombreuses méthodes pour utiliser ces différents biais afin d’obtenir un résultat voulu. Cependant, même si l’on peut avoir l’impression d’être contrôlé, il faut garder à l’esprit que chacun de ces points peut tout à fait être une pure coïncidence. Ce n’est pas parce que quelqu’un vous parle de manière sympathique ou s’inquiète de votre santé qu’il applique forcément une méthode pour obtenir quelque chose de vous. Il est donc important de connaître ces biais, mais également de garder l’esprit ouvert et de ne pas tout juger trop vite.
            </p>
        </section>

      </article>
    </div>
  );
};

export default Nathan;
