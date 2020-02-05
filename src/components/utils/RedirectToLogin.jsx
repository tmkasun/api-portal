/*
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import AuthManager from '../data/AuthManager';

// import Configurations from 'Config';
const Configurations = {
    app: {
        context: '/apiportal'
    }
}

const page = Configurations.app.context + '/services/auth/login';

/**
 *
 * Just doing the redirection, If you want to trigger redirection to login page , Import this util method and use.
 * Note: Don't use this method inside a render method. It will cause to cancel the initial request in Chrome
 * and re-trigger same request
 * Sample usage:
 * import { doRedirectToLogin } from 'AppComponents/Shared/RedirectToLogin'
 *
 * componentDidMount() {
 *      doRedirectToLogin();
 * }
 * @export
 */
export function doRedirectToLogin() {
    AuthManager.discardUser();
    window.location = page;
}

/**
 * This component is created to unify the login process from react UI.
 * If we need to change the login process in the future, Changing here will reflect
 * all the login redirection done in other places of the code
 * @class RedirectToLogin
 */
class RedirectToLogin extends React.Component {
    /**
     *
     * @inheritdoc
     * @memberof RedirectToLogin
     */
    componentDidMount() {
        doRedirectToLogin();
    }

    /**
     *
     * @inheritdoc
     * @returns {React.Component}
     * @memberof RedirectToLogin
     */
    render() {
        return (
            `You will be redirected to ${page}`
        );
    }
}

export default RedirectToLogin;
