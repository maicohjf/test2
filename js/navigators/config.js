import {addNavigationHelpers, StackNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import LoginScreen from '../components/login';
import HomeScreen from '../components/home';
import InvestorScreen from '../components/investor';
import ProfileScreen from '../components/profile';
import VerifyScreenScreen from '../components/verify/realname';
import FaceRecognitionScreen from '../components/verify/realname/faceRecognition';
import BindingCardScreen from '../components/verify/bindingcard';
import BindingPhoneScreen from '../components/verify/bindingcard/bindingPhone';
import BanksScreen from '../components/verify/bindingcard/banks';
import ContactsScreen from '../components/verify/contacts';
import VerifysucceedScreen from '../components/verify/verifysucced';
import ContractScreen from '../components/contract';
import ContractDetailScreen from '../components/contract/detail';
import PublishScreen from '../components/publish/list/index';
import SettingScreen from '../components/setting';
import MessageScreen from '../components/message';
import OptionScreen from '../components/optioninfo';
import PublishBorrowInfoScreen from '../components/borrower/publish';
import InvestorListScreen from '../components/investor/list/list';
import InvestorDetailScreen from '../components/investor/detail';
import BuyBorrowerScreen from '../components/buyBorrower';
import InvestorinfoScreen from '../components/investorinfo';

import LoanCityScreen from '../components/city/loanCity';
import PublishDetailScreen from '../components/publish/detail/detail';

export const AppNavigator = StackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Contract: {screen: ContractScreen},
  ContractDetail: {screen: ContractDetailScreen},
  Publish: {screen: PublishScreen},
  Setting: {screen: SettingScreen},
  Message: {screen: MessageScreen},
  Option: {screen: OptionScreen},
  PublishBorrowInfo: {screen: PublishBorrowInfoScreen},
  InvestorDetail: {screen: InvestorDetailScreen},
  InvestorList: {screen: InvestorListScreen},
  BuyBorrower: {screen: BuyBorrowerScreen},
  Investorinfo: {screen: InvestorinfoScreen},
  LoanCity: {screen: LoanCityScreen},
  PublishDetail: {screen: PublishDetailScreen},
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
    headerStyle: {
      backgroundColor: 'white',
      elevation: 1,
    },
    headerTitleStyle: {
      color: "#222",
      fontSize: 18,
      // position:'absolute',
      // left:0,
      // right:0,
      // textAlign:'center',
    }
  },
  headerMode: 'float',
  transitionConfig: (() => ({
    //因为ios 的导航动画默认是从左到右，所以，这里配置一下动画，使用react-navigation已经实现的从左到右的动画，
    //适配Android，不过，需要导入动画
    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
  })),
  cardStyle: ({
    backgroundColor: '#F4F7F9', //统一定义界面背景颜色
  }),
});
