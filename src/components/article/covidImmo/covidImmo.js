import React from 'react';

import { Link } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';

import { CommercialisationLogementsNeufs, EvolSocioParis, InflationCreationMonetaire, RatioDebtImmoIncome } from './covidImmoFigure';

import img_1 from './img/graph1.PNG';
import img_2 from './img/graph2.PNG';
import img_3 from './img/graph3.PNG';
import img_4 from './img/graph4.PNG';

class CovidImmo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width_: window.innerWidth };
    }

    handleResize = e => {
        this.setState({ width_: window.innerWidth });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    render() {

        //function CovidImmo() {
        return (
            <div>
                <div>
                    <div className='header-image top-img-article-immo'></div>
                    <div className='header-title' style={{ maxWidth: '1140px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '2rem', paddingRight: '2rem' }}  >
                    </div>
                </div>
                <div className='container-page' >

                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        <Link href="/">
                            <HomeIcon fontSize='small' />
                        </Link>
                        <Typography color="textPrimary"> Article </Typography>
                        <Typography color="textPrimary"> Impacts du Covid-19 sur le marché de l'immobilier </Typography>
                    </Breadcrumbs>

                    <h1 className='title' style={{ marginTop: '3rem' }}> Impacts du Covid-19 sur le marché de l'immobilier </h1>
                    <p className="introduction" style={{ marginTop: '2rem' }}>
                        Depuis le début de la crise Covid, les analyses se multiplient dans de nombreux domaines pour anticiper à quoi ressemblera “le monde d’après”. Le marché de l’immobilier est lui aussi affecté par la crise, et son futur apparaît aujourd’hui incertain. Sans prétendre prédire l’évolution du cours de ce marché, cet article vise à en expliquer les déterminants essentiels, et les principaux enjeux.
                    </p>

                    {/*---------------------------------------------------------------------------------*/}
                    <h2 className='sub-title' style={{ marginTop: '3rem' }}> I. Les spécificités du marché de l’immobilier </h2>
                    <p className="text" style={{ marginTop: '2rem' }}>
                        Le marché de l’immobilier est régi par les lois de tout marché économique : le prix des biens immobiliers résulte d’une rencontre entre l’offre et la demande de la part des ménages.
                        Pour essayer d’anticiper les prix futurs de ce marché, il faut par conséquent analyser les différents déterminants de ces deux facteurs de formation des prix.
                    </p>
                    <p className="text bold" style={{ marginTop: '1rem' }}>
                        La demande dépend à la fois de la capacité d’achat des agents, et de leur volonté d’achat.
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        La capacité d’achat correspond au pouvoir d’achat immobilier individuel.
                        Ce dernier est déterminé par le revenu des agents, mais également par leurs conditions de crédit.
                        En effet, en raison du montant élevé des biens immobiliers, un tel achat requiert dans 80 % des cas un crédit bancaire.
                        Par conséquent, la capacité d’achat des ménages peut être modifiée tant par une politique fiscale (par exemple une hausse des impôts pour rembourser la dette « Covid ») que par une politique monétaire (une baisse des taux d’intérêt par exemple).
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        Il ne faut pas négliger également la volonté d’achat des agents, qui va dépendre de leurs anticipations.
                        En effet, un achat immobilier représente pour les ménages un investissement majeur, ils vont donc adapter leur stratégie d’achat selon leur anticipation du cours du marché, c’est-à-dire de la valeur des biens immobiliers.
                        Dès lors, si les prix stagnent ou commencent à baisser, les agents vont retarder leur achat, anticipant un prix plus intéressant dans quelques mois.
                        Peut ainsi apparaître une « prophétie auto-réalisatrice » : parce qu’ils anticipent que les prix vont baisser suite à la crise les agents retardent leur achat, cette baisse de la demande provoquant effectivement une baisse des prix immobiliers.
                    </p>

                    <p className="text bold" style={{ marginTop: '2rem' }}>
                        L’offre obéit quant à elle à certaines spécificités du marché immobilier. Les biens immobiliers sont en effet soumis à une double contrainte : les délais de construction d’une part, la régulation afférente au marché d’autre part.
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        Les délais de construction rendent l’offre de biens immobiliers rigide à court terme, puisque même si la demande augmente subitement les producteurs ne peuvent y répondre immédiatement.
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        La régulation immobilière tend également à rigidifier l’offre de logements, puisque les constructions doivent respecter les règles d’urbanisme, limitant parfois l’offre de constructions nouvelles.
                        En ce sens, la loi ELAN adoptée en 2018 vise à simplifier les normes pour permettre de construire davantage de logements et plus vite.
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        Enfin, les offreurs de biens immobiliers sont également influencés par leurs anticipations, puisqu’ils peuvent réduire leurs projets de construction s’ils anticipent une baisse de la demande, due par exemple à une importante baisse des revenus.
                    </p>

                    <p style={{ marginLeft: '4rem', marginTop: '2rem' }} className="text bold">Commercialisation de logements neufs en France</p>
                    {this.state.width_ > 1080 ?
                        <div style={{ margin: '4rem', marginTop: '1rem', marginBottom: '1rem' }}> <CommercialisationLogementsNeufs /> </div>
                        :
                        <img src={img_1} class="card-img img-article h-100" alt="image-article"></img>
                    }
                    <p style={{ marginLeft: '4rem' }} className="text source">Source : www.statistiques.developpement-durable.gouv.fr</p>

                    <p className="text" style={{ marginTop: '1rem' }}>

                    </p>
                    <p className="text" style={{ marginTop: '2rem' }}>
                        Cette rigidité de l’offre à court terme permet de parler d’un marché dépendant de la demande à court terme.
                        Par exemple, le modèle économétrique mobilisé par la Caisse des dépôts montre que la hausse des prix depuis 2015 s’explique largement par de meilleures capacités d’emprunt.
                    </p>
                    {/*---------------------------------------------------------------------------------*/}
                    <h2 className='sub-title' style={{ marginTop: '4rem' }}> II. Les enjeux liés au marché de l’immobilier </h2>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        Les enjeux du marché spécifique qu’est l’immobilier sont souvent négligés dans le débat public. Pourtant, ces derniers sont multiples.
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        L’évolution des prix de l’immobilier affecte directement le pouvoir d’achat des ménages, principalement par le biais des évolutions des loyers qu’ils paient. Or, ce dernier a ensuite une influence sur la mise en place des politiques économiques. Ainsi, la faible progression des coûts liés à l’immobilier en Allemagne a d’autant facilité les réformes structurelles mises en place au début des années 2000 pour gagner en compétitivité, puisque la faible progression des salaires était rendue plus acceptable par un pouvoir d’achat moins limité par les dépenses immobilières.
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        Le marché immobilier est également un facteur clé dans la progression des inégalités sociales, entre ceux déjà détenteurs d’un bien immobilier et ceux qui n’en possèdent pas.
                        En effet, les personnes disposant d’un logement dans une grande ville en France ont vu la valeur de leur bien augmenter au cours des dernières décennies, rendant d’autant plus difficile l’accession à la propriété pour les jeunes ménages primo-accédants. Un rapport du Sénat pointe ainsi que sont particulièrement concernés les “jeunes ménages primo-accédants, les familles, et bien sûr les catégories populaires, celles-ci étant contraintes de s'éloigner des centres-villes pour s'installer dans les périphéries parfois éloignées”.
                        Alors même que les inégalités sociales sont de plus en plus étudiées et débattues dans l’espace public, le facteur des coûts immobiliers reste pourtant peu discuté.
                    </p>

                    <p className="text" style={{ marginTop: '1rem' }}>
                        Les prix de l’immobilier jouent également un rôle dans l’attractivité des villes françaises, entraînant des évolutions sociologiques profondes dans les plus grandes villes de France.
                        Le politologue Jérôme Fourquet montre ainsi que Paris est par exemple devenue majoritairement habitée par des ménages de catégories socio-professionnelles supérieures, en raison de l’évolution des prix immobiliers ayant entraîné un éloignement des classes populaires vers les banlieues.
                    </p>

                    <p style={{ marginLeft: '4rem', marginTop: '2rem' }} className="text bold">Evolution de la population selon la catégorie socioprofessionnelle à Paris</p>
                    {this.state.width_ > 1080 ?
                        <div style={{ margin: '4rem', marginTop: '1rem', marginBottom: '1rem' }}> <EvolSocioParis /> </div>
                        :
                        <img src={img_2} class="card-img img-article h-100" alt="image-article"></img>
                    }
                    <p style={{ marginLeft: '4rem' }} className="text source">Source : Insee, Paris Notaires Services</p>

                    <p className="text" style={{ marginTop: '1rem' }}>
                        La mesure des prix immobiliers est également un sujet en soi, puisque des débats existent sur la manière de prendre en compte ce marché spécifique dans les mesures macro-économiques.
                        Par exemple, l’économiste Philippe Herlin critique la méthodologie employée par l’INSEE pour mesurer l’évolution du pouvoir d’achat des ménages français.
                        Selon lui, le coût du logement est largement minoré par cet institut. Ainsi, pour l’INSEE le coût des logements vaut pour 6% du budget total des ménages et le coût de remboursements bancaires est considéré comme nul.
                        Dès lors, une prise en compte différente du coût du logement entraînerait une réévaluation du pouvoir d’achat des ménages à la baisse.
                    </p>
                    {/*---------------------------------------------------------------------------------*/}
                    <h2 className='sub-title' style={{ marginTop: '4rem' }}> III. Les différents scénarios envisageables d’évolution du marché immobilier </h2>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        Plusieurs scénarios d’évolutions des prix immobiliers peuvent être considérés : un effondrement des prix (1), une baisse des prix (2) et une hausse des prix (3).
                    </p>
                    <p className="text bold" style={{ marginTop: '2rem' }}>
                        1. Un effondrement des prix peu probable
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        Selon les économistes de la Caisse des dépôts, la répétition du scénario de la crise de 2008, où certains marchés immobiliers européens s’étaient effondrés, est peu crédible.
                        En effet, du côté de l’offre on n’observe pas « d’emballement de la construction nationale », au sens où il n’existerait pas de bulle immobilière en France.
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        Du côté de la demande, on observe une certaine résilience qui s’explique par plusieurs facteurs.
                        Une première explication, structurelle, tient en ce que depuis la crise de 2008 l’endettement privé est davantage surveillé par les autorités de régulation.
                        Par exemple, ce dernier figure parmi les nouveaux indicateurs macroéconomiques proposés par la Banque de France.
                        Le scénario espagnol de 2008, ou la crise financière avait révélé l’ampleur du niveau d’endettement privé, semble donc impossible.
                    </p>

                    <p style={{ marginLeft: '4rem', marginTop: '2rem' }} className="text bold">Dette immobilière des ménages rapportée à leur revenu disponible </p>
                    {this.state.width_ > 1080 ?
                        <div style={{ margin: '4rem', marginTop: '1rem', marginBottom: '1rem' }}> {<RatioDebtImmoIncome />} </div>
                        :
                        <img src={img_3} class="card-img img-article h-100" alt="image-article"></img>
                    }
                    <p style={{ marginLeft: '4rem' }} className="text source">Source : OCDE </p>


                    <p className="text" style={{ marginTop: '1rem' }}>
                        Une seconde raison, conjoncturelle, réside dans l’intervention massive de l’État français pour soutenir l’économie. Cette intervention, notamment avec le chômage partiel, a pu largement réduire l’impact de la crise sur la demande.
                    </p>
                    <p className="text bold" style={{ marginTop: '2rem' }}>
                        2. Une baisse des prix possible
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        La baisse des prix ne pourrait s’expliquer par une offre trop abondante par rapport à la demande, puisque rien n’indique que l’offre de logement soit trop élevée en France.
                        Il faut donc se concentrer ici sur les déterminants de la demande.
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        Si l’on n’observe pas d’effondrement, une baisse de la demande reste possible.
                        Elle s’expliquerait tout d’abord par une baisse de revenus, malgré l’intervention de l’État.
                        De plus, une moindre consommation due à un effet « Ricardo-Barro » n’est pas à exclure : face à l’endettement massif de l’État, les agents anticipent que cette dette émise se traduira dans le futur par des hausses d’impôts, donc réduisent leur consommation présente.
                        Enfin, le rôle des anticipations du cours du marché immobilier peut jouer, comme rappelé précédemment avec une anticipation auto-réalisatrice.
                    </p>
                    <p className="text bold" style={{ marginTop: '2rem' }}>
                        3. Une hausse des prix envisageable
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        Une hausse des prix pourrait résulter de deux facteurs : une forte réduction de l’offre de logement, ou une hausse de la demande de biens immobiliers.
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        Une hausse des prix pourrait s’expliquer par une pénurie d'offres, résultant d’une baisse des chantiers de construction suite à la Covid. Toutefois, malgré un faible nombre de permis de construire délivrés ces derniers mois, la majorité des chantiers ont été repoussés et non annulés.
                        Ainsi, un ralentissement durable des chantiers de construction paraît peu concevable.
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        Une hausse de la demande est davantage probable.
                        Selon les économistes Patrick Artus et Olivier Pastré, l’intervention massive des banques centrales pour faire face à la crise pourrait avoir comme conséquence une hausse des prix de l’immobilier. Ces dernières ont en effet réalisé une énorme création monétaire en monétisant les dettes émises par les Etats : la base monétaire de l’OCDE a ainsi augmenté de 70 % en 2020. Or, depuis trente ans la corrélation « classique » entre création monétaire et inflation des biens et services a disparu,
                        au profit d’une nouvelle corrélation entre création monétaire et hausse du prix des actifs financiers et immobiliers.
                    </p>

                    <p style={{ marginLeft: '4rem', marginTop: '2rem' }} className="text bold">Une corrélation plus faible entre monnaie et inflation, mais renforcée entre monnaie et cours de l’immobilier </p>
                    {this.state.width_ > 1080 ?
                        <div style={{ margin: '4rem', marginTop: '1rem', marginBottom: '1rem' }}> {<InflationCreationMonetaire />} </div>
                        :
                        <img src={img_4} class="card-img img-article h-100" alt="image-article"></img>
                    }
                    <p style={{ marginLeft: '4rem' }} className="text source">Source : Insee, Banque de France </p>

                    <p className="text" style={{ marginTop: '1rem' }}>
                        Ces économistes expliquent cette corrélation par le mécanisme de rééquilibrage de portefeuille : la création monétaire implique que les épargnants détiennent initialement trop de monnaie par rapport à leur souhait, ils essaient donc de se débarrasser de cette monnaie en achetant des actifs (actions, obligations, immobilier). A l’équilibre, la structure des portefeuilles est rééquilibrée par la hausse du prix des actifs due à ces achats.
                        Ce mécanisme a pu être observé au Japon dans les années 1980, ou dans l’OCDE dans les années 1990.
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        Ainsi, la politique monétaire expansionniste menée pour faire face à la crise, en augmentant de manière très importante la quantité de monnaie en circulation, entraînerait à moyen terme une hausse des prix immobiliers.
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        Toutefois, face aux craintes d’une possible bulle immobilière, les banques restreignent les crédits en sélectionnant de manière plus exigeante les dossiers d’achats immobiliers.
                        Le Haut conseil de stabilité financière demande désormais aux banques de ne pas prêter au-delà du taux d’endettement de 33%, et sur des durées maximales de 25 ans.
                        Cette mesure aura donc potentiellement deux conséquences : approfondir la segmentation du marché bancaire immobilier entre les ménages disposant de revenus élevés et les autres, et transférer le surplus de monnaie émis par des achats d’actifs non pas immobiliers mais financiers. Ainsi selon l’Autorité des marchés financiers les achats d’actions par les particuliers ont été multipliés par trois au mois de mars.
                        Cette hausse pourrait toutefois s’expliquer également par les opportunités boursières permises par la crise sanitaire.

                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        La plus grande sélectivité dans la sélection des dossiers immobiliers pourrait donc réduire l’ampleur de la hausse des prix immobiliers attendus par Artus et Pastré.
                        Cette sélectivité pourrait également entraîner une évolution des villes concernées par les investissements immobiliers.
                        En effet, les petites et moyennes villes étant plus accessibles financièrement, les dossiers d’investissement dans ces villes auraient plus de chance d’être acceptés.


                    </p>
                    <p className="text bold" style={{ marginTop: '3rem' }}>
                        Conclusion
                    </p>
                    <p className="text" style={{ marginTop: '1rem' }}>
                        Le marché de l’immobilier, contrairement au lieu commun véhiculé de “prix totalement irrationnels”, obéit en réalité à une logique propre.
                        Cette dernière permet d’essayer d’anticiper les évolutions à venir du cours de ce marché, bien que la multiplicité des variables ne rende l’exercice difficile. En particulier, la confiance des ménages est imprévisible, ce qui explique la difficile modélisation des prévisions macro-économiques immobilières.
                    </p>
                    <p className="text" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                        Cette difficulté à anticiper l’évolution de ce marché ne doit pourtant pas dissuader de s’intéresser davantage à l’évolution des prix immobiliers. En effet, ils ont des conséquences multiples dans nos sociétés, souvent méconnues et pourtant essentielles.
                    </p>

                    <p className="text bold" style={{ marginTop: '3rem' }}>
                        Sources
                    </p>

                    <p className="text" style={{ marginTop: '1rem', marginBottom: '1rem' }}> Conjoncture immobilière au 1er trimestre 2020 </p>
                    <p className="text" style={{ marginTop: '1rem', marginBottom: '1rem' }}> Rapport d’information du Sénat “Les communes face à l’inflation des prix de l’immobilier : quels moyens d’action pour réguler le marché ?”, mai 2020 </p>
                    <p className="text" style={{ marginTop: '1rem', marginBottom: '1rem' }}> Note : “Quel impact attendre de la crise actuelle sur le marché immobilier résidentiel français ?”, Caisse des dépôts, 7 juillet 2020 </p>
                    <p className="text" style={{ marginTop: '1rem', marginBottom: '1rem' }}> Pouvoir d’achat. Le grand mensonge, Philippe Herlin, 2018 </p>
                    <p className="text" style={{ marginTop: '1rem', marginBottom: '1rem' }}> L’économie post covid, Patrick Artus et Olivier Pastré, 2020 </p>
                    <p className="text" style={{ marginTop: '1rem', marginBottom: '1rem' }}> L’archipel français, Jérome Fourquet, 2019 </p>
                    <p className="text" style={{ marginTop: '1rem', marginBottom: '1rem' }}> Article “Marché immobilier : tendance et évolution des prix de l’immobilier”, sur le site Notaire.fr, octobre 2020 </p>
                    <p className="text" style={{ marginTop: '1rem', marginBottom: '1rem' }}> Article “Le marché du bâtiment : bilan et perspectives en 2020”, sur le site batimat.com, 6 juillet 2020 </p>

                </div>
            </div>
        );
    }
}

export default CovidImmo;
