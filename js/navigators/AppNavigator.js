import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers, StackNavigator} from 'react-navigation';

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
import PublishScreen from '../components/publish';
import MessageScreen from '../components/message';
import OptionScreen from '../components/optioninfo';
import PublishBorrowInfoScreen from '../components/borrower/publish';
import InvestorListScreen from '../components/investor/list/list';
import InvestorDetailScreen from '../components/investor/detail';
import {addListener} from '../utils/redux';

export const AppNavigator = StackNavigator({
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
    Contract: {screen: ContractScreen},
    ContractDetail: {screen: ContractDetailScreen},
    Publish: {screen: PublishScreen},
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
});

class AppWithNavigationState extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

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
