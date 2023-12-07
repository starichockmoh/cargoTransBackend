import { Injectable } from '@nestjs/common';
import { IRequest } from 'src/interfaces/request.interface';

@Injectable()
export class RequestsService {
  private readonly requests: Array<IRequest> = [];

  create(cat: IRequest) {
    this.requests.push(cat);
  }

  findAll(): Array<IRequest> {
    return this.requests;
  }

  findOne(id: number): IRequest {
    return this.requests[id];
  }

  update(id: number, cat: IRequest): IRequest {
    this.requests[id] = cat;
    return this.requests[id];
  }

  remove(id: number): Array<IRequest> {
    this.requests.splice(id);
    return this.requests;
  }
}
