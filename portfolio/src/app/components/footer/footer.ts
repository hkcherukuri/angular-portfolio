import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  private router = inject(Router);

  async navigateTo(path: string, fragment?: string) {
    await this.router.navigate([path]);
    if (fragment) {
      setTimeout(() => {
        const el = document.getElementById(fragment);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }
}
