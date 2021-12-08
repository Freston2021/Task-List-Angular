import { Injectable } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subjet = new Subject<any>();

  constructor() {}

  tooggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subjet.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.subjet.asObservable();
  }
}
