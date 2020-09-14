import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdealsComponent } from './postdeals.component';

describe('PostdealsComponent', () => {
  let component: PostdealsComponent;
  let fixture: ComponentFixture<PostdealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostdealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
