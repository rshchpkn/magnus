import { IonContent, IonPage, } from '@ionic/react';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedInImage from 'react-linkedin-login-oauth2/assets/linkedin.png';

import environment from '../.env';
import { RootState } from '../store/store';
import { Actions as LinkedInSignInActions } from '../store/auth/actions';
import { getCurrentUser } from '../store/user/selectors';
import { linkedInSignInLoading } from '../store/auth/selectors';

const mapStateToProps = (state: RootState) => ({
  user: getCurrentUser(state),
  loading: linkedInSignInLoading(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUserProfile: (payload: {code: string, redirectUri: string}) => dispatch(LinkedInSignInActions.linkedInSignIn(payload)),
});

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Login: React.FC<Props> = (props: Props) => {
  
  const handleSuccess = (data: any) => {
    props.getUserProfile({
      code: data.code,
      redirectUri: environment.APP_REDIRECT_URI
    });
  };
  
  const handleFailure = (error: any) => {
    return error.errorMessage
  };
  
  
  return (
    <IonPage>
      <IonContent className={'ion-padding ion-text-center'}>
        <div style={{display: 'flex', minHeight: '100%', alignItems: 'center', justifyContent: 'center'}}>
          {props.user && props.user._id ?
            <div>
              <div>{`${props.user.firstName} ${props.user.lastName}`}</div>
              <div>{props.user.email}</div>
              <img src={props.user.avatar} alt=""/>
            </div>
            :
            <div>
              <LinkedIn
                disabled={props.loading}
                clientId={environment.APP_CLIENT_ID}
                redirectUri={environment.APP_REDIRECT_URI}
                scope={'r_liteprofile r_emailaddress'}
                onFailure={handleFailure}
                onSuccess={handleSuccess}
              >
                <img src={linkedInImage} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
              </LinkedIn>
            </div>
          }
        </div>

      </IonContent>
    </IonPage>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
