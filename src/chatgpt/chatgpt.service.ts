import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class ChatgptService {
  private readonly apiKey: string;
  private readonly apiUrl: string;

  constructor(private readonly httpService: HttpService) {
    this.apiKey =  'your-api-key';
    this.apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
  }

  generateResponse(prompt: string): Observable<AxiosResponse> {
    console.log(this.apiKey);
    console.log(this.apiUrl);
    const data = {
      messages: prompt,
      max_tokens: 10,
      n: 1,
      stop: null,
      temperature: 0.8,
    };

    console.log(data);

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };

    return this.httpService.post(this.apiUrl, data, { headers: headers });
  }
}