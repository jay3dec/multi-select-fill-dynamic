import { TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call getFullname method', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.firstName = "Sam";
    app.lastName = "Johnson";
    expect(app['getFullName']()).toEqual('Sam Johnson');
  })

  it('should call getFullname method', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.firstName = "Sam";
    app.lastName = "Johnson";
    expect((app as any).getFullName()).toEqual('Sam Johnson');
  })

  it('should call getFullname method', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.firstName = "Sam";
    app.lastName = "Johnson";
    //@ts-ignore
    expect(app.getFullName()).toEqual('Sam Johnson');
  })
  
});
