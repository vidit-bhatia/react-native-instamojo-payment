import React from 'react';
import { Text } from 'react-native';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

export default class InstamojoPaymentComponent extends React.Component {

  onNavigationChange(webViewState) {
    let hitUrl = webViewState.url;
    console.log(hitUrl);
    if (hitUrl.includes(this.props.redirect_url)) {
      let payment_final_id = hitUrl.split("request_id=").pop();
      let return_data = {
        url: hitUrl,
        payment_final_id: payment_final_id
      };
      if(this.props.callback_on_completion){
        this.props.callback_on_completion(return_data)
      }
    }
  }
  
  render() {
    
    return (
      <WebView
    ref="webView"
    source={{ uri: this.props.instamojo_long_url }}
    onNavigationStateChange={this.onNavigationChange.bind(this)}
    javaScriptEnabled={true}
    domStorageEnabled={true}
    startInLoadingState={true}
    scalesPageToFit={true}
    style={{flex:1}}
    />
  );
  }
}
InstamojoPaymentComponent.propTypes = {
  redirect_url: PropTypes.string.isRequired,
  instamojo_long_url: PropTypes.string.isRequired,
  callback_on_completion:PropTypes.func
};
