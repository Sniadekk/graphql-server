import { Controller } from '@classes';
import mockedData from '@/data';

export default class UserController extends Controller {
  constructor() {

  }

  getUsers(args) {
    return mockedData.users.filter((user) => {
      return Object.keys(args).map(argName => user[argName] === args[argName]);
    });
  }

  getUser(args) {
    return mockedData.users.find(user => user.id === args.id);
  }
}
