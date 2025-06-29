import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { MenuController } from '@ionic/angular/standalone';

import { HomePage } from './home';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl', 'navigate']);
    const storageSpy = jasmine.createSpyObj('Storage', ['get', 'set']);
    const menuSpy = jasmine.createSpyObj('MenuController', ['enable']);

    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: Storage, useValue: storageSpy },
        { provide: MenuController, useValue: menuSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
