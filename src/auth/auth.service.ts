import { Injectable } from '@nestjs/common';
import { AuthDto, AuthInterface } from './dto/auth.dto';

@Injectable()
export class AuthService {
  authService(data: AuthDto): object {
    console.log(data);
    return {app: 'Ghruonti API'};
  }
}
