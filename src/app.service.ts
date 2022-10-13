import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllPosts(): string {
    return 'Eminem22 World!';
  }
}
