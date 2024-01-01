import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotArticleComponent } from './not-article.component';

describe('NotArticleComponent', () => {
  let component: NotArticleComponent;
  let fixture: ComponentFixture<NotArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
