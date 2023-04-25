import { Injectable } from '@nestjs/common';

export type User = {
  id: Number;
  name: string;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id:1,
            name: "Anil",
            username: "anil0791",
            password:"123456",
        },
        {
            id:2,
            name: "Ajay",
            username: "ajay0791",
            password:"123456",
        },
    ];

    async findOne(username: string): Promise<User | undefined > {
        return this.users.find(user => user.username === username);
    }
}
