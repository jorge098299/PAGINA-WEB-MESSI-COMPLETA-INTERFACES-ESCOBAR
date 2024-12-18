import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-logros-messi',
  templateUrl: './logros-messi.component.html',
  styleUrls: ['./logros-messi.component.scss'],
})
export class LogrosMessiComponent {
  messiTimeline: any[];

  constructor(private fb: FormBuilder) {
    this.messiTimeline = [
      {
        year: '2004',
        title: 'Debut en el FC Barcelona',
        description: 'Debut profesional en el primer equipo del FC Barcelona contra el Espanyol.',
        image: 'https://www.infobae.com/resizer/v2/RVJCRML2NZD5RLCY6NBCNZPYMM.jpg?auth=a2759fda45a1ee6032b91bbe062495221b2f4ec964232ddfd5900c79213c2735&smart=true&width=992&height=606&quality=85',
        icon: 'pi pi-fw pi-flag' 
      },
      {
        year: '2005',
        title: 'Primer gol en Primera División',
        description: 'Marcó su primer gol con el FC Barcelona en LaLiga.',
        image: 'https://as01.epimg.net/futbol/imagenes/2020/04/30/reportajes/1588249645_363539_1588253170_noticiareportajes_grande.jpg',
        icon: 'pi pi-user' 
      },
      {
        year: '2009',
        title: 'Triplete histórico con el Barcelona',
        description: 'Ganó LaLiga, Copa del Rey y Champions League en una temporada.',
        image: 'https://img2.rtve.es/imagenes/lionel-messi-flamante-balon-oro-2009/1259339549568.jpg',
        icon: 'pi pi-star' 
      },
      {
        year: '2012',
        title: 'Récord de goles en un año natural',
        description: 'Anotó 91 goles en el año 2012, batiendo el récord mundial.',
        image: 'https://i.ytimg.com/vi/WpGyvkmWiLI/maxresdefault.jpg',
        icon: 'pi pi-fw pi-chart-line' 
      },
      {
        year: '2015',
        title: 'Quinto Balón de Oro',
        description: 'Ganó su quinto Balón de Oro, consolidándose como el mejor jugador del mundo.',
        image: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2016/01/11/14525405645460.jpg',
        icon: 'pi pi-fw pi-star' 
      },
      {
        year: '2021',
        title: 'Copa América con Argentina',
        description: 'Ganó su primer título con la selección mayor, venciendo a Brasil en la final.',
        image: 'https://www.elcomercio.com/wp-content/uploads/2024/06/ENDRICK-PALMEIRAS-2024-06-11T130742.867-1024x683.jpg',
        icon: 'pi pi-fw pi-globe' 
      },
      {
        year: '2022',
        title: 'Campeón del Mundo',
        description: 'Ganó la Copa del Mundo con Argentina en Qatar, siendo elegido MVP del torneo.',
        image: 'https://media.tycsports.com/files/2023/02/10/532928/lionel-messi_1440x810_wmk.webp',
        icon: 'pi pi-heart' 
      },
      {
        year: '2023',
        title: 'Inicia etapa en Inter Miami',
        description: 'Se unió a la MLS con el Inter Miami, revolucionando el fútbol estadounidense.',
        image: 'https://e00-mx-marca.uecdn.es/mx/assets/multimedia/imagenes/2023/07/15/16894459482617.jpg',
        icon: 'pi pi-fw pi-map-marker' 
      },
      {
        year: '2024',
        title: 'Leyenda viviente',
        description: 'Continúa siendo referencia y modelo a seguir para generaciones futuras.',
        image: 'https://s1.dmcdn.net/v/XCD_41d4I5D44qlKz/x1080',
        icon: 'pi pi-fw pi-heart' 
      },
    ];
  }
}
