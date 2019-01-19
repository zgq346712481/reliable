'use strict';

import React from 'react';
import safeGet from 'lodash.get';
import { FormattedMessage } from 'react-intl';
import {
  Form,
  Icon,
  Spin,
  Input,
  Button,
  Select,
  message,
} from 'antd';

import request from '../util/request';

const FormItem = Form.Item;
const Option = Select.Option;

const siteConfigFormItemLayout = {
  wrapperCol: {
    xs: { span: 24 },
    sm: { offset: 4, span: 16 },
  },
};
const buttonFormItemLayout = {
  wrapperCol: {
    xs: { span: 24 },
    sm: { offset: 10, span: 4 },
  },
};

class SiteSetting extends React.Component {
  state = {
  }

  componentDidMount () {
    this.fetchSite();
  }

  fetchSite = async () => {
    this.setState({ loading: true });
    const res = await request('getSite', 'GET');
    this.setState({ loading: false });
    if (!res.success) return;

    const siteConfig = safeGet(res, 'data.site');
    this.setState({
      siteConfig,
    });
  }

  postSite = async (siteConfig) => {
    const res = await request('postSite', 'POST', {
      site: siteConfig,
    });
    if (res.success) {
      await this.fetchSite();
      message.success('Update siteConfig successfully!');
    } else {
      message.error('Update siteConfig failed.');
      console.error('postSite', res);
    }
  }

  updateSite = () => {
    this.props.form.validateFields((err, values) => {
      if (err) return;
      this.postSite(values);
    });
  }

  renderSiteConfig = () => {
    const { getFieldDecorator } = this.props.form;
    const assetsUrl = safeGet(this.state, 'siteConfig.assetsUrl');
    return (
      <div>
        <Form.Item
          {...siteConfigFormItemLayout}
        >
          {getFieldDecorator('assetsUrl', {
            initialValue: assetsUrl,
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item {...buttonFormItemLayout}>
          <Button
            style={{ width: '100%' }}
            type="primary"
            htmlType="submit"
            onClick={this.updateSite}
          >
              <FormattedMessage id='setting.submit' />
          </Button>
        </Form.Item>
      </div>
    );
  }

  render () {
    return (
      <Form>
        <Spin spinning={this.state.loading}>
          {this.renderSiteConfig()}
        </Spin>
      </Form>
    );
  }
}

export default Form.create()(SiteSetting);

