
import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type Staff = any;

@Injectable()
export class StaffService {
  private readonly staff = [
    {
      userId: 1,
      username: 'welson',
      password: 'w123',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'm555',
    },
  ];

  async findOne(username: string): Promise<Staff | undefined> {
    return this.staff.find(user => user.username === username);
  }
}
