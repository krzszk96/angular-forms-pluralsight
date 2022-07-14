import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettings } from 'src/app/data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {

  originalusersettings: UserSettings = {
    name: '',
    emailOffers: true,
    interfaceStyle: '',
    subscriptionType: '',
    notes: ''
  };

  usersettings: UserSettings = {
    ...this.originalusersettings
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit', form.valid);
    
  }

}
