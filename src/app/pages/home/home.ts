import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  MenuController,
} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { addIcons } from 'ionicons';
import { 
  arrowForward, 
  close, 
  search, 
  calendar, 
  people, 
  business, 
  person, 
  chatbubble,
  home,
  folder,
  copy,
  chatbubbles,
  personCircle,
  chevronForward,
  play
} from 'ionicons/icons';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    styleUrls: ['./home.scss'],
    imports: [
      FormsModule,
      IonHeader, 
      IonToolbar, 
      IonButtons, 
      IonButton, 
      IonContent, 
      IonIcon,
      IonCard,
      IonCardContent,
      IonGrid,
      IonRow,
      IonCol,
      IonAvatar,
      IonLabel,
      IonSegment,
      IonSegmentButton
    ]
})
export class HomePage {
  selectedTab = 'news';

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage
  ) {
    addIcons({
      arrowForward,
      close,
      search,
      calendar,
      people,
      business,
      person,
      chatbubble,
      home,
      folder,
      copy,
      chatbubbles,
      personCircle,
      chevronForward,
      play
    });
  }

  startApp() {
    this.router
      .navigateByUrl('/app/tabs/schedule', { replaceUrl: true })
      .then(() => this.storage.set('ion_did_tutorial', true));
  }

  onSegmentChanged(event: any) {
    this.selectedTab = event.detail.value;
  }

  navigateToFeature(feature: string) {
    // Navigate to different features based on the card clicked
    switch(feature) {
      case 'practices':
        this.router.navigate(['/app/tabs/schedule']);
        break;
      case 'events':
        this.router.navigate(['/app/tabs/schedule']);
        break;
      case 'clients':
        this.router.navigate(['/app/tabs/speakers']);
        break;
      case 'institutions':
        this.router.navigate(['/app/tabs/about']);
        break;
      case 'profile':
        this.router.navigate(['/app/tabs/about']);
        break;
      case 'chat':
        this.router.navigate(['/app/tabs/about']);
        break;
      default:
        this.startApp();
    }
  }

  navigateToProfile() {
    this.router.navigate(['/account']);
  }

  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        this.router.navigateByUrl('/app/tabs/schedule', { replaceUrl: true });
      }
    });

    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the home page
    this.menu.enable(true);
  }
}
