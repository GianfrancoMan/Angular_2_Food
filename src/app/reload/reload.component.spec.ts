import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadComponent } from './reload.component';
import { AppModule } from '../app.module';

describe('ReloadComponent', () => {
  let component: ReloadComponent;
  let fixture: ComponentFixture<ReloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
