import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post.models';
import {environment} from '../../../../environments/environment';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import 'rxjs-compat/add/operator/map';

const API_URL = environment.apiUrl;

@Injectable()
export class PostApi {
  constructor(
    private http: HttpClient
  ) {
  }

  public getAllPosts(): Observable<any> {
    return this.http
      .get<Post[]>(API_URL + '/posts')
      .pipe(
        catchError((error: any) => of(`Bad Promise: ${error}`))
      );
  }

  public createPost(post: Post): Observable<any> {
    return this.http
      .post<Post>(API_URL + '/posts/', post)
      .pipe(
        catchError((error: any) => of(`Bad Promise: ${error}`))
      );
  }

  public getPostById(postId: number): Observable<any> {
    return this.http
      .get<Post>(API_URL + '/posts/' + postId)
      .pipe(catchError((error: any) => of(`Bad Promise: ${error}`)));
  }

  public updatePost(post: Post) {
    // will use this.http.put()
  }

  public deletePostById(postId: number) {
    // will use this.http.delete()
  }
}
