import { AngularFirestore, AngularFirestoreCollection, QueryFn } from '@angular/fire/firestore';
import { Query } from '@angular/core';
import { Observable } from 'rxjs';

// <T extends { id: string }>: this means that our generic type T, need to have at least an ID property.

export abstract class Firestore<T extends { id: string }> {

    protected collection: AngularFirestoreCollection<T>;

    constructor(protected db: AngularFirestore) { }

    protected setCollection(path: string, queryFn?: QueryFn): void {
        this.collection = path ? this.db.collection(path, queryFn) : null;
    }

    private handleItem(item: T, operation: string): Promise<T> {
        return this.collection
            .doc<T>(item.id)[operation](item).then(() => item);
    }

    getAll(): Observable<T[]> {
        return this.collection.valueChanges();
    }

    create(item: T): Promise<T> {
        item.id = this.db.createId();
        return this.handleItem(item, 'set');
    }

}
