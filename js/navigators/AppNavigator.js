import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';

import {addListener} from '../utils/redux';
import { AppNavigator } from '../navigators/config';
import BankCardScreen from '../components/bankCard';
import { fetchDict } from '../actions';

export const AppNavigator = StackNavigator({
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
    Contract: {screen: ContractScreen},
    ContractDetail: {screen: ContractDetailScreen},
    Publish: {screen: PublishScreen},
    Setting: { screen: SettingScreen },
    BankCard: { screen: BankCardScreen },
    Message: {screen: MessageScreen},
    Option: {screen: OptionScreen},
    PublishBorrowInfo: {screen: PublishBorrowInfoScreen},
    InvestorDetail: {screen: InvestorDetailScreen},
    InvestorList: {screen: InvestorListScreen},
    VerifySucceed: {
        screen: VerifysucceedScreen, navigationOptions: ({
            title: '�������',
        })
    },
    Contacts: {
        screen: ContactsScreen, navigationOptions: ({
            title: '������ϵ��',
        })
    },
    BindingPhone: {
        screen: BindingPhoneScreen, navigationOptions: ({
            title: '�����п�',
        })
    },
    Banks: {
        screen: BanksScreen, navigationOptions: ({
            title: '֧������',
        })
    },
    BindingCard: {
        screen: BindingCardScreen, navigationOptions: ({
            title: '�����п�',
        })
    },
    FaceRecognition: {
        screen: FaceRecognitionScreen, navigationOptions: ({
            title: '����ʶ��',
        })
    },
    Verify: {
        screen: VerifyScreenScreen, navigationOptions: ({
            title: 'ʵ����֤',
        })
    },
}, {
  initialRouteName: 'Home',
  /* The header share config  */
  navigationOptions: {
    gesturesEnabled: true,
    headerStyle:{
      backgroundColor:'white',
      elevation:1,
    },
    headerTitleStyle:{
      color: "#222",
      fontSize: 18,
    }
  },
  headerMode: 'float',
  transitionConfig: (() => ({
    //��Ϊios �ĵ�������Ĭ���Ǵ����ң����ԣ���������һ�¶�����ʹ��react-navigation�Ѿ�ʵ�ֵĴ����ҵĶ�����
    //����Android����������Ҫ���붯��
    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
  })),
  cardStyle:({
    // backgroundColor:'#F4F7F9', //ͳһ������汳����ɫ
  }),
});

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  componentWillMount() {
    console.log('----');
    const { dispatch } = this.props;
    dispatch(fetchDict());
  }

  render() {
    const {dispatch, nav} = this.props;
    return (
        <AppNavigator
            navigation={addNavigationHelpers({
              dispatch,
              state: nav,
              addListener,
            })}
        />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
