import { Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtGuard } from './../auth/guard';
import { GetUser } from '../auth/decorator';

@Controller('users')
@UseGuards(JwtGuard)
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  editUser() {}
}
