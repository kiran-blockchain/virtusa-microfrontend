import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DemoComponent } from './demo.component';

describe('Unit test of Demo Component', () => { 

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [
              RouterTestingModule
            ],
            declarations: [
              DemoComponent
            ],
          }).compileComponents();
    })
    it("should check if demo component exists",()=>{
        const fixture = TestBed.createComponent(DemoComponent);
        const demo = fixture.componentInstance;
        expect(demo.mydata).toEqual('Demo App');
    })
 })