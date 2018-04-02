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
            title: '立即借款',
        })
    },
    Contacts: {
        screen: ContactsScreen, navigationOptions: ({
            title: '紧急联系人',
        })
    },
    BindingPhone: {
        screen: BindingPhoneScreen, navigationOptions: ({
            title: '绑定银行卡',
        })
    },
    Banks: {
        screen: BanksScreen, navigationOptions: ({
            title: '支持银行',
        })
    },
    BindingCard: {
        screen: BindingCardScreen, navigationOptions: ({
            title: '绑定银行卡',
        })
    },
    FaceRecognition: {
        screen: FaceRecognitionScreen, navigationOptions: ({
            title: '人脸识别',
        })
    },
    Verify: {
        screen: VerifyScreenScreen, navigationOptions: ({
            title: '实名认证',
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
    //因为ios 的导航动画默认是从左到右，所以，这里配置一下动画，使用react-navigation已经实现的从左到右的动画，
    //适配Android，不过，需要导入动画
    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
  })),
  cardStyle:({
    // backgroundColor:'#F4F7F9', //统一定义界面背景颜色
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
