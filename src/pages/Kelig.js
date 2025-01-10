import React, {useEffect} from "react";


const Kelig = () => {

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
        <article
            role="article"
            aria-labelledby="essay-title"
            className="p-4 ml-8 mr-8"
        >
            <header className="mb-6">
                <h1
                    id="essay-title"
                    className="text-3xl font-bold text-gray-900 mb-2"
                    
                    tabIndex="0"
                >
                    Le Biais de Confirmation : Quand Nos Croyances Guident Nos Réalités
                </h1>
            </header>

            <section id="section1" aria-labelledby="introduction" className="mb-6"  tabIndex="0">
                <h2 id="introduction" className="text-2xl font-semibold text-gray-800 mb-4">
                    Introduction
                </h2>
                <p className="mb-4">
                    Nous avons tous tendance à rechercher des informations qui confortent nos croyances et à ignorer
                    celles qui les remettent en question. Ce phénomène, connu sous le nom de biais de confirmation, est
                    profondément ancré dans nos processus mentaux. Il affecte nos relations personnelles, notre façon de
                    consommer des informations et même nos choix politiques.
                </p>
            </section>

            <section id="section2" aria-labelledby="understanding-bias" className="mb-6"  tabIndex="0">
                <h2 id="understanding-bias" className="text-2xl font-semibold text-gray-800 mb-4">
                    Comprendre le Biais de Confirmation
                </h2>
                <p className="mb-4">
                    Le biais de confirmation est une stratégie cognitive qui nous pousse à accorder une plus grande
                    importance aux informations confirmant nos croyances préexistantes. Ce phénomène découle en partie
                    de notre aversion naturelle à l'incertitude et au doute.
                </p>
                <p className="mb-4">
                    Prenons un exemple simple : imaginez une personne qui croit que le café est mauvais pour la santé.
                    Elle se souviendra plus facilement des articles mettant en avant les dangers de la caféine et aura
                    tendance à ignorer les études soulignant ses bienfaits, même si ces dernières sont scientifiquement
                    valides.
                </p>
            </section>

            <section id="section3" aria-labelledby="impact-politics" className="mb-6"  tabIndex="0">
                <h2 id="impact-politics" className="text-2xl font-semibold text-gray-800 mb-4">
                    L'Impact sur la Politique
                </h2>
                <p className="mb-4">
                    En politique, le biais de confirmation est particulièrement visible et joue un rôle central dans la
                    polarisation des opinions. Les individus cherchent des sources d’information alignées sur leurs
                    idées, renforçant ainsi leurs convictions. Cela crée des groupes fortement divisés qui peinent à
                    trouver un terrain d'entente.
                </p>
                <p className="mb-4">
                    Les réseaux sociaux amplifient ce phénomène. Les algorithmes recommandent des contenus similaires à
                    ceux que nous avons déjà consultés, créant ainsi des « bulles de filtres ». En conséquence, il
                    devient difficile d’être exposé à des points de vue divergents, renforçant le clivage idéologique.
                </p>
            </section>

            <section id="section4" aria-labelledby="personal-example" className="mb-6"  tabIndex="0">
                <h2 id="personal-example" className="text-2xl font-semibold text-gray-800 mb-4">
                    Un Exemple Personnel
                </h2>
                <p className="mb-4">
                    J’ai été victime du biais de confirmation dans plusieurs aspects de ma vie. Professionnellement, je
                    me souviens d’une fois où je devais choisir entre deux approches pour résoudre un problème au
                    travail. Au lieu d’évaluer objectivement les deux options, je me suis concentré sur les données qui
                    confirmaient ma préférence initiale, ce qui a conduit à une solution sous-optimale.
                </p>
                <p className="mb-4">
                    Dans ma vie personnelle, il m’est arrivé d’alimenter mes croyances en me basant uniquement sur des
                    sources confirmant mon opinion. Par exemple, en recherchant des documentaires qui validaient mes
                    idées sans questionner leur objectivité, je m’enfermais dans une vision étroite des choses.
                </p>
            </section>

            <section id="section5" aria-labelledby="overcoming-bias" className="mb-6"  tabIndex="0">
                <h2 id="overcoming-bias" className="text-2xl font-semibold text-gray-800 mb-4">
                    Comment le Reconnaître et le Surmonter
                </h2>
                <p className="mb-4">
                    Le premier pas pour contrer le biais de confirmation est d’en prendre conscience. Admettre que nos
                    croyances peuvent être influencées par ce biais nous aide à mieux examiner nos décisions.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                        <strong>Chercher activement des points de vue opposés :</strong> Lire des articles ou regarder
                        des vidéos qui ne partagent pas votre opinion peut élargir votre compréhension.
                    </li>
                    <li>
                        <strong>Jouer l’avocat du diable :</strong> Posez-vous la question : « Et si j’avais tort ? »
                        Cette approche stimule une pensée critique.
                    </li>
                    <li>
                        <strong>Diversifier vos sources d’information :</strong> Consultez plusieurs médias pour obtenir
                        une vision plus équilibrée.
                    </li>
                </ul>
            </section>

            <footer aria-labelledby="essay-conclusion" className="pt-6 border-t border-gray-300"  tabIndex="0">
                <h2 id="essay-conclusion" className="text-2xl font-semibold text-gray-800 mb-4">
                    Conclusion
                </h2>
                <p>
                    Le biais de confirmation est omniprésent et influence la façon dont nous interprétons le monde. S’il
                    peut être réconfortant de voir nos croyances validées, ce biais peut aussi limiter notre
                    compréhension. En apprenant à reconnaître et à surmonter cette tendance, nous pouvons ouvrir notre
                    esprit à une vision plus complète et nuancée de la réalité.
                </p>
            </footer>
        </article>
    );
};

export default Kelig;
