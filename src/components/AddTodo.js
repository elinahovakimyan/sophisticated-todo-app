import React, { Component } from 'react';
import store from '../store';
import { addTodo } from '../actions';
import { Form, Icon, Input, Button, Modal, Select } from 'antd';
import ColView from 'react-icons/lib/fa/columns';
import TableView from 'react-icons/lib/fa/list';
import { Link } from 'react-router-dom';
import { canvasFunction } from './SnowFlakes';

const dispatch = store.dispatch;
const Option = Select.Option;
const TextArea = Input.TextArea;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      confirmDirty: false,
      autoCompleteResult: []
    } 
  }

  handleCancel = () => {
    this.setState({ 
      visible: false 
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        dispatch(addTodo(values));
        this.handleCancel();
        this.props.form.resetFields();
      }
    });
    const canvas = document.getElementById("winter");
    canvas.style.display = "block";
    canvasFunction();
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { page, visible } = this.state;

    return (
        <div>

          <div>
            <Link to="/table">
              <span className="nav-item" id="tableView">
                <TableView/>
              </span>
            </Link>
            <Link to="/">
              <span className="nav-item left-nav" id="colView">
                <ColView/>  
              </span>
            </Link>
          </div>

          <div className="btn-center">
            <Button type="primary" 
                    icon="plus" 
                    onClick={this.showModal} 
                    size="large" 
                    className="modalBtn">
              Add a "TO-DO"
            </Button>
          </div>
          

          <Modal
            visible={visible}
            title="Add your todo"
            onSubmit={this.handleSubmit}
            onCancel={this.handleCancel}
            footer={[]}
          >
            <Form onSubmit={this.handleSubmit}
                  className="add-form">

              <FormItem>
                {getFieldDecorator('theType', {
                  rules: [{ required: true, message: 'Please choose the type' }],
                })(
                  <Select
                    showSearch
                    style={{ width: 250 }}
                    prefix={<Icon type="rocket" />}
                    placeholder="Select the type of your to-do"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option value="work">Work</Option>
                    <Option value="study">Study</Option>
                    <Option value="family">Family</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('title')(
                  <Input
                        placeholder="Enter the title"
                        prefix={<Icon type="rocket" />}
                        ref={node => this.titleInput = node}
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('loc')(
                  <Input
                        placeholder="Location"
                        prefix={<Icon type="environment-o" />}
                        ref={node => this.address = node}
                  />
                )}
              </FormItem>

              <FormItem>
                <label> Description </label>
                {getFieldDecorator('description')(
                  <TextArea rows={4} />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" 
                        htmlType="submit" 
                        className="add-form-button">
                  Add <Icon type="plus" />
                </Button>
              </FormItem>
            </Form>
          </Modal>
        </div>
    );
  };
};

const options = {
  autoStart: false
}

const AddTodo = Form.create()(ModalForm);

export default AddTodo;