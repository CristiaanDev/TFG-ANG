import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { UtilesService } from '../../services/utiles.service';
import { User } from '../../user.interface';

@Component({
  selector: 'app-completar-usuario',
  standalone: true,
  templateUrl: './completar-usuario.component.html',
  imports: [ReactiveFormsModule],
})
export class CompletarUsuarioComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CompletarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User },
    private authService: AuthService,
    private utiles: UtilesService
  ) {
    this.form = this.fb.group({
      gender: [this.data.user.gender || '', Validators.required],
      age: [this.data.user.age || '', Validators.required],
      weight: [this.data.user.weight || '', Validators.required],
      height: [this.data.user.height || '', Validators.required],
      activityLevel: [this.data.user.activityLevel || '', Validators.required],
      goal: [this.data.user.goal || '', Validators.required],
    });
  }

  submit() {
    if (this.form.valid) {
      const newUserData = this.form.value;
      const userId = this.data.user.id;

      // Combine existing user data with new data
      const updatedUser: User = { ...this.data.user, ...newUserData };

      // Update user document in Firestore
      this.authService
        .setDocument(`users/${userId}`, updatedUser)
        .then(() => {
          this.utiles.saveInLocaleStorage('user', updatedUser);
          this.dialogRef.close(updatedUser);
        })
        .catch((error) => {
          console.error('Error al actualizar usuario:', error);
        });
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
