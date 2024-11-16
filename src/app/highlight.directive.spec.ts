import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HighlightDirective', () => {
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    // Créez un élément fictif pour simuler ElementRef
    elementRef = new ElementRef(document.createElement('div'));
    // Simulez Renderer2 (vous pouvez utiliser un mock si nécessaire)
    renderer = jasmine.createSpyObj('Renderer2', ['addClass', 'removeClass']);
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});
