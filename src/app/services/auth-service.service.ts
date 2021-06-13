import { Injectable } from '@angular/core';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public api = config.API_URL
  constructor() { }
}
