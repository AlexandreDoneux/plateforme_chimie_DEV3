import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary

          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            <b>Configurations de l'appareil</b>
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Capacité : 64 Go
          <br/>

Dimensions et poids2
<br/>
Largeur : 75,7 mm
<br/>
Hauteur : 150,9 mm
<br/>
Épaisseur : 8,3 mm
<br/>
Poids : 194 g
<br/>

Écran Liquid Retina HD
<br/>
LCD Multi-Touch tout écran de 6,1 pouces (diagonale) avec technologie IPS
<br/>
Résolution de 1 792 x 828 pixels à 326 ppp
<br/>
Contraste 1 400:1 (standard)
<br/>
<br/>


L’écran de l’iPhone 11 a des angles arrondis qui suivent la ligne élégante de l’appareil et s’inscrivent dans un rectangle standard. Si l’on mesure ce rectangle, l’écran affiche une diagonale de 6,06 pouces (la zone d’affichage réelle est moindre).
Résistance aux éclaboussures, à l’eau et à la poussière3
<br/>
Indice de protection IP68 (jusqu’à 2 mètres de profondeur pendant 30 minutes maximum) défini par la norme 60529 de la CEI
<br/>

Puce A13 Bionic
<br/>
CPU 6 cœurs avec 2 cœurs de performance et 4 cœurs à haute efficacité énergétique
<br/>
GPU 4 cœurs
<br/>
Neural Engine 8 cœurs
<br/>
<br/>

Double appareil photo 12 Mpx : grand-angle et ultra grand-angle
<br/>
Grand-angle : ouverture ƒ/1,8<br/>
Ultra grand-angle : ouverture ƒ/2,4 et champ de vision de 120°<br/>
Zoom optique arrière 2x<br/>
Zoom numérique jusqu’à 5x<br/>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary

          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}><b>Réparabilité</b></Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Selon ifixit.com : <b>6/10</b>
            <br/>
            indicedereparabilite.fr : <b>4.6/10</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary

          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            <b>
            Pollution 
            </b>
            
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
Tonnes de CO2 produit lors de la fabrication : <b>83 kg</b>

<br></br>
<br/>

Répartition de la production de CO2 : <br/>


81 % : production, fabrication, transport et assemblage des différentes pièces (à quoi s’ajoute le packaging) <br/>
16 % : des émissions seraient liées à l’utilisation <br/>
2 % : des émissions seraient liées au transport du produit fini <br/>
Moins de 1 % des émissions seraient liées à la “fin de vie” du produit (transport des points de collecte aux sites de recyclage, et énergie nécessaire à la séparation et au déchiquetage des éléments). <br/>

<br/>
<br/>
          Plus de 27 "fournisseurs présumés" d'Apple sont responsables d'atteintes plus ou moins graves aux écosystèmes, en profitant des contrôles lacunaires en Chine, devenue l'atelier informatique du monde en raison de sa main-d'oeuvre très bon marché, a accusé le rapport.
          <br></br>
          <br></br>
          Apple a annoncé aujourd'hui que le nombre de fournisseurs engagés à utiliser 100 % d'énergie propre a plus que doublé au cours de l'année écoulée, accélérant les progrès vers l'objectif ambitieux de rendre sa chaîne d'approvisionnement et ses produits neutres en émissions d'ici 2030. Au total, 175 fournisseurs d'Apple transition vers les énergies renouvelables, et l'entreprise et ses fournisseurs produiront plus de 9 gigawatts d'énergie propre dans le monde. Ces actions éviteront l'émission de 18 millions de tonnes de CO2e par an, soit l'équivalent de la mise hors circulation de plus de quatre millions de voitures par an.
          <br></br>
          Apple estime n’avoir généré que 22,6 millions de tonnes de CO2 en 2020
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary

          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            <b>
            Éthique de travail
            </b>
           
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

          En effet, Apple a toujours été critiqué pour ses liens avec des contractants ou fournisseurs chinois employant des enfants dans leurs chaînes de production. Cependant, Ethisphere estime que l'entrée en scène d'Apple se distingue, par exemple, de la révélation, fin 2020, que son fournisseur chinois Suyin Electronics faisait travailler des enfants dans la fabrication de produits électroniques. Selon plusieurs rapports sur le sujet - parus entre décembre 2020 et janvier 2021 - Apple aurait mis plus de trois ans à mettre fin à ses relations avec Suyin Electronics, alors que le fabricant de l'iPhone savait que son fournisseur employait des jeunes de 14 ans à peine.
        <br/>
        <br/>

Entre autres choses, l'été dernier, les employés d'Apple ont lancé AppleToo, un site Web pour recueillir des témoignages de discrimination et de harcèlement sur le lieu de travail. Selon les critiques, grâce à la culture du secret d'Apple, l'on ne remarque même pas que la culture d'entreprise de la firme de Cupertino affecte souvent les employés. Ainsi, AppleToo devrait permettre de révéler au grand jour ces incidents que les dirigeants d'Apple sont accusés de taire. Le groupe a déclaré : « assez. Nous avons épuisé toutes les voies internes. Nous avons discuté avec nos dirigeants. Nous sommes allés jusqu'aux responsables des affaires. Mais rien n'a changé ». 
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary

          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            <b>
            Durée de vie
            </b>
            
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>
                Hardware :
            </b>
            <br/>
            moyenne Apple : entre 3 et 6 ans 

            <br/>
            <br/>

            <b>
                Software :
            </b>
            <br/>
            Plus de mises à jour après en moyenne <b>trois ans et 4 mois</b>.

          Ventes de produits Apple comme appareils actifs sur le marché, on estime que les iPhones durent, en moyenne, quatre ans et trois mois entre les mains du consommateur.

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
