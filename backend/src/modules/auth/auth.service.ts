import { Injectable } from '@nestjs/common';

import { LinkedinAuthInput } from './dto/linkedin-auth.input';
import { LinkedinService } from './linkedin.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly linkedinService: LinkedinService,
  ) {
  }

  async linkedinSignIn(input: LinkedinAuthInput) {
    const {data: {access_token: token}} = await this.linkedinService.getToken(input);

    const [data, email] = await Promise.all([
      this.linkedinService.getMeData(token),
      this.linkedinService.getMeEmail(token),
    ]);

    return {
      ...data,
      _id: 'qwerty',
      email,
    };
  }
}
