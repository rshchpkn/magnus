import { HttpService, Injectable } from '@nestjs/common';

import { ConfigService } from '../config/config.service';

import { LinkedinAuthInput } from './dto/linkedin-auth.input';

@Injectable()
export class LinkedinService {
  private authBaseURL = 'https://www.linkedin.com/oauth/v2';
  private baseURL = 'https://api.linkedin.com/v2';

  constructor(
    private readonly config: ConfigService,
    private readonly http: HttpService,
  ) {
  }

  getToken({code, redirectUri}: LinkedinAuthInput) {
    return this.http.post(`accessToken`, null, {
      baseURL: this.authBaseURL,
      params: {
        client_id: this.config.get('LINKEDIN_CLIENT_ID'),
        client_secret: this.config.get('LINKEDIN_CLIENT_SECRET'),
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
        code,
      },
    })
    .toPromise()
    .catch(err => {
      throw new Error(err.response.data.error_description);
    });
  }

  getMeData(token: string) {
    return this.http.get('me', {
      baseURL: this.baseURL,
      params: {
        projection: '(id,localizedFirstName,localizedLastName,profilePicture(displayImage~:playableStreams))',
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .toPromise()
    .then(({data}) => {
      const [avatarElement] = data.profilePicture['displayImage~'].elements.reverse();
      const [avatarIdentifier] = avatarElement.identifiers;

      return {
        firstName: data.localizedFirstName,
        lastName: data.localizedLastName,
        avatar: avatarIdentifier.identifier,
      };
    })
    .catch(err => {
      throw new Error(err.response.data.error_description);
    });
  }

  getMeEmail(token: string) {
    return this.http.get('emailAddress', {
      baseURL: this.baseURL,
      params: {
        q: 'members',
        projection: '(elements*(handle~))',
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .toPromise()
    .then(({data: {elements}}) => {
      const [element] = elements;
      return element['handle~'].emailAddress;
    })
    .catch(err => {
      throw new Error(err.response.data.error_description);
    });
  }
}
