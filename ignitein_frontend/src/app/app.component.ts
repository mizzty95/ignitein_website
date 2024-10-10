import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectTabsComponent } from './components/project-tabs/project-tabs.component';
import { ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    GalleryComponent,
    AboutComponent,
    ProjectsComponent,
    ServicesComponent,
    ProjectTabsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'ignitein_frontend';
  isSticky: boolean = false;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    const scrollWatcher =
      this.el.nativeElement.querySelector('#primary-header');

    const navObserver = new IntersectionObserver((entries) => {
      this.isSticky = !entries[0].isIntersecting; // Set the `isSticky` flag based on whether the watcher is in view
    });

    navObserver.observe(scrollWatcher); // Start observing the scroll watcher
  }
}
