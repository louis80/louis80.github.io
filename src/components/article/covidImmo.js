import { Link } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import LineGraphShort from './covidImmoFigure';

function CovidImmo() {
    return (
    <div>
        <div>
            <div className='header-image'></div>
            <div className='header-title' style={{maxWidth:'1140px', 'margin-left': 'auto', 'margin-right': 'auto', 'padding-left': '2rem', 'padding-right': '2rem'}}  >
            TITRE DE l'ARTICLE 
            </div>
        </div>
        <div className='container-page' >

            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link href="/">
                    <HomeIcon fontSize='small'/>
                </Link>
                <Link href="/">
                Article
                </Link>
                <Typography color="textPrimary"> Titre article covid immo </Typography>
            </Breadcrumbs>
            
            <p className="introduction" style={{marginTop:'2rem'}}>
            Depuis le début de la crise Covid, les analyses se multiplient dans de nombreux domaines pour anticiper à quoi ressemblera “le monde d’après”. Le marché de l’immobilier est lui aussi affecté par la crise, et son futur apparaît aujourd’hui incertain. Sans prétendre prédire l’évolution du cours de ce marché, cet article vise à en expliquer les déterminants essentiels, et les principaux enjeux. 
            </p>

            {/*---------------------------------------------------------------------------------*/}
            <h2 className='sub-title' style={{marginTop:'4rem'}}> I. Les spécificités du marché de l’immobilier </h2>
            <p className="text" style={{marginTop:'2rem'}}>
            Le marché de l’immobilier est régi par les lois de tout marché économique : le prix des biens immobiliers résulte d’une rencontre entre l’offre et la demande de la part des ménages. 
            Pour essayer d’anticiper les prix futurs de ce marché, il faut par conséquent analyser les différents déterminants de ces deux facteurs de formation des prix.
            </p>
            <p className="text bold" style={{marginTop:'1rem'}}>
            La demande dépend à la fois de la capacité d’achat des agents, et de leur volonté d’achat.
            </p>
            <p className="text" style={{marginTop:'1rem'}}>
            La capacité d’achat correspond au pouvoir d’achat immobilier individuel. 
            Ce dernier est déterminé par le revenu des agents, mais également par leurs conditions de crédit.
            En effet, en raison du montant élevé des biens immobiliers, un tel achat requiert dans 80 % des cas un crédit bancaire. 
            Par conséquent, la capacité d’achat des ménages peut être modifiée tant par une politique fiscale (par exemple une hausse des impôts pour rembourser la dette « Covid ») que par une politique monétaire (une baisse des taux d’intérêt par exemple).
            </p>
            <p className="text" style={{marginTop:'1rem'}}>
            Il ne faut pas négliger également la volonté d’achat des agents, qui va dépendre de leurs anticipations. 
            En effet, un achat immobilier représente pour les ménages un investissement majeur, ils vont donc adapter leur stratégie d’achat selon leur anticipation du cours du marché, c’est-à-dire de la valeur des biens immobiliers.
            Dès lors, si les prix stagnent ou commencent à baisser, les agents vont retarder leur achat, anticipant un prix plus intéressant dans quelques mois.
            Peut ainsi apparaître une « prophétie auto-réalisatrice » : parce qu’ils anticipent que les prix vont baisser suite à la crise les agents retardent leur achat, cette baisse de la demande provoquant effectivement une baisse des prix immobiliers.
            </p>

            <p className="text bold" style={{marginTop:'2rem'}}>
            L’offre obéit quant à elle à certaines spécificités du marché immobilier. Les biens immobiliers sont en effet soumis à une double contrainte : les délais de construction d’une part, la régulation afférente au marché d’autre part.
            </p>
            <p className="text" style={{marginTop:'1rem'}}>
            Les délais de construction rendent l’offre de biens immobiliers rigide à court terme, puisque même si la demande augmente subitement les producteurs ne peuvent y répondre immédiatement.
            </p>
            <p className="text" style={{marginTop:'1rem'}}>
            La régulation immobilière tend également à rigidifier l’offre de logements, puisque les constructions doivent respecter les règles d’urbanisme, limitant parfois l’offre de constructions nouvelles.
            En ce sens, la loi ELAN adoptée en 2018 vise à simplifier les normes pour permettre de construire davantage de logements et plus vite.
            </p>
            <p className="text" style={{marginTop:'1rem'}}>
            Enfin, les offreurs de biens immobiliers sont également influencés par leurs anticipations, puisqu’ils peuvent réduire leurs projets de construction s’ils anticipent une baisse de la demande, due par exemple à une importante baisse des revenus.
            </p>

            <p style={{marginLeft:'4rem', marginTop:'2rem'}} className="text bold">Commercialisation de logements neufs en France</p>
            <div style={{margin:'4rem', marginTop:'1rem', marginBottom:'1rem'}}> <LineGraphShort/> </div>
            <p style={{marginLeft:'4rem'}} className="text source">Source : www.statistiques.developpement-durable.gouv.fr</p>
            
        </div>
    </div>
    );
}

export default CovidImmo;