import { Injectable } from '@angular/core';
import { Preference } from '../models/user/preference';

@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {
  // preference cache
  set preference(preference: Preference) {
    localStorage.setItem('user/preference', JSON.stringify(preference));
  }

  get preference() {
    const pref = localStorage.getItem('user/preference');
    return pref ? JSON.parse(pref.toString()) : undefined;
  }
}
