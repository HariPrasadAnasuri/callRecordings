import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {AudioService} from './audio.service';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  files: any = [
// tslint:disable-next-line: max-line-length
    { fileUrl: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      file_name: 'Perfect',
      artist: ' Ed Sheeran'
    },
    { fileUrl: 'http://192.168.1.2:8080/getRecordings',
      file_name: 'Hari Call',
      artist: 'The Beatles'
    },
    {
      fileUrl: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      file_name: 'Man Atkeya Beparwah',
      artist: 'Nusrat Fateh Ali Khan'
    },
    { fileUrl: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      file_name: 'Penny Lane',
      artist: 'The Beatles'
    },
    { fileUrl: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      file_name: 'Perfect',
      artist: ' Ed Sheeran'
    },
    {
// tslint:disable-next-line: max-line-length
      fileUrl: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      file_name: 'Man Atkeya Beparwah',
      artist: 'Nusrat Fateh Ali Khan'
    },
    { fileUrl: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      file_name: 'Penny Lane',
      artist: 'The Beatles'
    },
    { fileUrl: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      file_name: 'Perfect',
      artist: ' Ed Sheeran'
    },
    {
// tslint:disable-next-line: max-line-length
      fileUrl: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      file_name: 'Man Atkeya Beparwah',
      artist: 'Nusrat Fateh Ali Khan'
    },
    { fileUrl: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      file_name: 'Penny Lane',
      artist: 'The Beatles'
    },
    { fileUrl: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      file_name: 'Perfect',
      artist: ' Ed Sheeran'
    },
    {
// tslint:disable-next-line: max-line-length
      fileUrl: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      file_name: 'Man Atkeya Beparwah',
      artist: 'Nusrat Fateh Ali Khan'
    }
  ];

  host: string;

  constructor(private http: HttpClient) {
    this.host =  'http://192.168.29.49:7000';
  }
  getRecordings(): Observable<any> {
    /*return this.http.get(this.endpoint).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );*/
    const endPoint = this.host + "/recordings";
    return this.http.get<any>(
      endPoint, { observe: 'response' });
  }

  markFileAsDelete(id) {
    const endPoint = this.host + "/recordings/"+ id +"/remove";
    return this.http.get<any>(
      endPoint, { observe: 'response' });
  }

  markFileAsImportant(id) {
    const endPoint = this.host + "/recordings/"+ id +"/important";
    return this.http.get<any>(
      endPoint, { observe: 'response' });
  }

  markFileAsVisited(id) {
    const endPoint = this.host + "/recordings/"+ id +"/visited";
    return this.http.get<any>(
      endPoint, { observe: 'response' });
  }

  getFiles() {
    /*this.getRecordings().subscribe(obj => {
      return of(obj);
    });*/
    return this.getRecordings();
    /*return of(this.files);*/
  }
}
