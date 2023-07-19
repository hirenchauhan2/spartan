import { Component } from '@angular/core';
import { HlmToggleDirective } from '@ng-spartan/ui/toggle/helm';
import { BrnToggleDirective } from '@ng-spartan/ui/toggle/brain';
import { HlmIconComponent } from '@ng-spartan/ui/icon/helm';
import { provideIcons } from '@ng-icons/core';
import { radixFontItalic } from '@ng-icons/radix-icons';

@Component({
  selector: 'spartan-toggle-small',
  standalone: true,
  imports: [BrnToggleDirective, HlmToggleDirective, HlmIconComponent],
  providers: [provideIcons({ radixFontItalic })],
  template: `
    <button size="sm" brnToggle hlm>
      <hlm-icon size="sm" name="radixFontItalic" />
    </button>
  `,
})
export class ToggleSmallPreviewComponent {}

export const smallCode = `
import { Component } from '@angular/core';
import { HlmToggleDirective } from '@ng-spartan/ui/toggle/helm';
import { BrnToggleDirective } from '@ng-spartan/ui/toggle/brain';
import { HlmIconComponent } from '@ng-spartan/ui/icon/helm';
import { provideIcons } from '@ng-icons/core';
import { radixFontItalic } from '@ng-icons/radix-icons';

@Component({
  selector: 'spartan-toggle-small',
  standalone: true,
  imports: [BrnToggleDirective, HlmToggleDirective, HlmIconComponent],
  providers: [provideIcons({ radixFontItalic })],
  template: \`
    <button size="sm" brnToggle hlm>
      <hlm-icon size="sm" name="radixFontItalic" />
    </button>
  \`,
})
export class ToggleSmallPreviewComponent {}

`;