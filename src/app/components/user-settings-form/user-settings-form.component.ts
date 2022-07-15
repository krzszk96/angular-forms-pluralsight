import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettings } from 'src/app/data/user-settings';
import { DataService } from 'src/app/services/data.service';

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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.dataService.postUserSettingsForm(this.usersettings).subscribe(
      result => {
        console.log('success: ', result);        
      },
      error => {
        console.log( 'error: ', error);
      }
    );
  }

}
