import { Injectable } from '@nestjs/common';
import { IClient } from 'src/interfaces/client.interface';

@Injectable()
export class ClientsService {
  private readonly clients: Array<IClient> = [];

  create(cat: IClient) {
    this.clients.push(cat);
  }

  findAll(): Array<IClient> {
    return this.clients;
  }

  findOne(id: number): IClient {
    return this.clients[id];
  }

  update(id: number, cat: IClient): IClient {
    this.clients[id] = cat;
    return this.clients[id];
  }

  remove(id: number): Array<IClient> {
    this.clients.splice(id);
    return this.clients;
  }
}
