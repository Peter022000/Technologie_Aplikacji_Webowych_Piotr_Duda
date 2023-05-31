import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicOfOthersComponent } from './music-of-others.component';

describe('MusicOfOthersComponent', () => {
  let component: MusicOfOthersComponent;
  let fixture: ComponentFixture<MusicOfOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicOfOthersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicOfOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
