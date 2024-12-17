import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, NgClass, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  // Liste des tâches, chaque tâche est un objet avec un nom et un état (terminée ou non)
  tasks: { name: string, completed: boolean }[] = [
    { name: 'Apprendre Angular', completed: false },
    { name: 'Créer une liste de tâches', completed: false },
    { name: 'Tester l’application', completed: false }
  ];

  newTask: string = ''; // Variable pour la nouvelle tâche

  // Méthode pour ajouter une tâche à la liste
  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, completed: false }); // Ajouter une tâche avec l'état 'non terminée'
      this.newTask = ''; // Réinitialiser l'input
    }
  }

  // Méthode pour supprimer une tâche de la liste
  removeTask(index: number) {
    this.tasks.splice(index, 1); // Supprimer l'élément à l'index spécifié
  }

  // Méthode pour marquer une tâche comme terminée
  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed; // Inverse l'état de 'completed'
  }
}
