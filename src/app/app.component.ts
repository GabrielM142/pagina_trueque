import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  submitForm(name: string, email: string, phone: string, company: string, msg: string) {
    const text = `Hola! Soy ${name}${company ? ' de ' + company : ''}.\nTel: ${phone || 'no indicado'}\nEmail: ${email}\n\n${msg || 'Me interesa conocer mas sobre Trueque CRM.'}`;
    window.open(`https://wa.me/593996145553?text=${encodeURIComponent(text)}`, '_blank');
  }
}
