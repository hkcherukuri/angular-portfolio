import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {

  words = ['Frontend Developer', 'UI/UX Designer', 'Web Enthusiast', 'React Developer'];
  typedText = '';
  wordIndex = 0;
  charIndex = 0;
  deleting = false;

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    const currentWord = this.words[this.wordIndex];

    if (!this.deleting) {
      this.typedText = currentWord.substring(0, this.charIndex++);
      if (this.charIndex > currentWord.length) {
        this.deleting = true;
        setTimeout(() => {}, 1000);
      }
    } else {
      this.typedText = currentWord.substring(0, this.charIndex--);
      if (this.charIndex === 0) {
        this.deleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
      }
    }

    setTimeout(() => this.typeEffect(), this.deleting ? 60 : 120);
  }
}
