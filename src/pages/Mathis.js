import React from "react";

const About = () => {
  return (
    <div className="p-4 ml-8 mr-8">
      <h1 className="text-2xl font-bold" role="button" aria-label="Titre" tabIndex="0">Les biais cognitifs et les croyances en pseudo-sciences</h1>
      <p className="text-sm text-gray-600">
                    Par <strong className="font-semibold">LEROUX Mathis</strong>. Dernière mise à jour :{" "}
                    <time dateTime="2025-01-09" className="italic">
                        8 janvier 2025
                    </time>
                    .
                </p>
      <div className="p-4">
      <p role="button" tabIndex="0">Les pseudo-sciences, telles que la lithothérapie, l’astrologie ou encore la voyance,
        captivent de nombreuses personnes, malgré l'absence de preuves scientifiques solides
        pour étayer leurs affirmations. Ce sujet me tient particulièrement à cœur car je
        m’intéresse beaucoup aux pseudo-sciences. Je trouve fascinant de comprendre comment
        ces croyances se construisent et pourquoi elles perdurent, même face à des évidences 
        scientifiques contraires. Ce phénomène s’explique en grande partie par l'influence de 
        divers biais cognitifs, qui façonnent notre perception et nos croyances. Ces mécanismes 
        mentaux, bien qu'utiles pour simplifier la prise de décision, peuvent nous conduire à 
        adhérer à des idées infondées.</p>
      <br/>
      <p role="button" tabIndex="0">L'un des principaux biais en jeu est le <strong>biais de confirmation</strong>. Lorsqu'une personne 
        croit en l'efficacité d'une pratique pseudo-scientifique, elle tend à accorder davantage 
        d'attention aux éléments qui confirment sa croyance, tout en ignorant ou minimisant ceux 
        qui la contredisent. Par exemple, quelqu’un qui porte un bracelet en pierre de lithothérapie 
        et se sent mieux pourrait attribuer son bien-être à la pierre, tout en ignorant d’autres 
        facteurs, comme un bon sommeil ou une amélioration spontanée de sa situation.</p>
      <br/>
      <p role="button" tabIndex="0">Un autre biais est <strong>l'effet Barnum</strong>, Ce biais explique pourquoi des descriptions générales 
        ou vagues semblent spécifiques et personnelles. En astrologie, par exemple, des horoscopes 
        aux formulations floues mais agréables peuvent donner l’impression d’être parfaitement adaptés 
        à une personne. Ce sentiment renforce l’adhésion à cette pratique.</p>
      <br/>
      <p role="button" tabIndex="0"><strong>L’illusion de causalité</strong> joue également un rôle. Les humains ont tendance à établir des liens 
        entre des événements qui se produisent à proximité dans le temps, même si ces relations ne sont 
        pas causales. Si quelqu’un consulte un voyant et, peu après, un événement annoncé se produit, 
        il ou elle peut croire que le voyant avait raison, alors qu'il ne s'agit probablement que d'une coïncidence.</p>
      <br/>
      <p role="button" tabIndex="0"><strong>Le biais d’autorité</strong> est aussi à considérer. Lorsqu'une personne perçoit un praticien de 
        pseudo-science comme une figure d'autorité, elle est plus susceptible de croire en ses affirmations, 
        même si elles ne reposent sur aucun fondement scientifique. L’apparence professionnelle, le 
        jargon technique ou l’assurance du praticien renforcent cette impression.</p>
      <br/>
      <p role="button" tabIndex="0">Enfin,<strong>le biais d'engagement</strong> et de cohérence explique pourquoi les gens peuvent 
        s'accrocher à des croyances, même face à des preuves contraires. Une fois qu'une personne a 
        investi du temps, de l’argent ou des émotions dans une pratique, admettre que celle-ci est 
        infondée peut être difficile. Cette dissonance cognitive pousse à justifier la croyance initiale 
        plutôt qu'à la remettre en question.</p>
      <br/>
      <p role="button" tabIndex="0">Ces biais, combinés, offrent un cadre explicatif puissant pour comprendre pourquoi des individus 
        peuvent se convaincre de l’efficacité des pseudo-sciences et pourquoi ils hésitent à remettre ces 
        croyances en question. Une sensibilisation aux biais cognitifs pourrait contribuer à développer 
        une pensée critique et à encourager une approche plus rationnelle face à ces pratiques.</p>
      </div>
    </div>
  );
};

export default About;
