import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  constructor(private http: HttpClient) { }

  getMp3StreamTitle(streamingUrl:any, interval:any, offset = 0) {
    /* const needle = 'StreamTitle=';
    const ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36';

    const headers = new HttpHeaders({
      'Icy-MetaData': '1',
      'User-Agent': ua
    });

    this.http.get(streamingUrl, { headers, responseType: 'text', observe: 'response' })
      .subscribe(
        (res) => {
          const icyMetaInterval = res.headers.get('icy-metaint');
          const buffer = Buffer.from(res.body as ArrayBuffer);

          if (buffer.includes(needle)) {
            const titleIndex = buffer.indexOf(needle) + needle.length;
            const titleEndIndex = buffer.indexOf(';', titleIndex);
            const title = buffer.toString('utf8', titleIndex, titleEndIndex);
            console.log(title);
          } else {
            this.getMp3StreamTitle(streamingUrl, interval, offset + Number(icyMetaInterval));
          }
        },
        (error) => {
          console.error(`Error: ${error.message}`);
        }
      ); */
  }
}
