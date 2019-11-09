import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, AuthInterface } from './dto/auth.dto';
import { CustomResponse, customMessage } from '../common/common.methods';
import { validate } from 'class-validator';
import { async } from 'rxjs/internal/scheduler/async';
@Controller('api/auth')
export class AuthController {
  response: CustomResponse = new CustomResponse([]);
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() request: AuthDto): CustomResponse {
    const ty = validate(request, {
        validationError: {
            target: true,
            value: true,
        },
    }).then (res => console.log('res', res )).catch( err => console.log('err', err));

    if (!request.userName || !request.password) {
      return new CustomResponse({}, customMessage.incorrectRequest, false);
    }
    this.authService.authService(request);
    return this.response;
  }
}
