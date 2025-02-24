import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStorageService {
  private favoritesSubject = new BehaviorSubject<any[]>(this.loadFavorites());
  favorites$ = this.favoritesSubject.asObservable();
  private favorites: any[] = this.loadFavorites();

  getFavorites(): any[] {
    return this.favorites;
  }

  addFavorite(book: any): void {
    if (!this.isFavorite(book.id)) {
      this.favorites.push({ ...book, notes: '', rating: 0, tags: [] });
      this.saveFavorites();
      this.favoritesSubject.next(this.favorites);
      alert("Livro favoritado com sucesso!");
    }
  }

  updateFavorite(updatedBook: any): void {
    this.favorites = this.favorites.map(book => book.id === updatedBook.id ? updatedBook : book);
    this.saveFavorites();
    this.favoritesSubject.next(this.favorites);
  }

  removeFavorite(bookId: string): void {
    this.favorites = this.favorites.filter(book => book.id !== bookId);
    this.saveFavorites();
    this.favoritesSubject.next(this.favorites);
    alert("Livro removido dos favoritos com sucesso!");
  }

  isFavorite(bookId: string): boolean {
    return this.favorites.some(book => book.id === bookId);
  }

  private saveFavorites(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  private loadFavorites(): any[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }
}
