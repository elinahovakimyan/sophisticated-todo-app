import React, {Component} from 'react'
import store from '../store'
import { addTodo } from '../actions'
import { Form, Icon, Input, Button, Modal, Select } from 'antd';


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
    this.setState({ visible: false });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        dispatch(addTodo(values))
        this.handleCancel();
        this.props.form.resetFields();
      }
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  
  onChangetitle = (e) => {
    this.setState({ title: e.target.value });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { page, visible } = this.state;

    return (
        <div>
          <Button type="primary" icon="plus" onClick={this.showModal} size="large" className="modalBtn">
            Add a "TO-DO"
          </Button>
          <Modal
            visible={visible}
            title="Title"
            onSubmit={this.handleSubmit}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" size="large" onClick={this.handleCancel}>Close</Button>,
            ]}
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
                        onChange={this.onChangetitle}
                        ref={node => this.titleInput = node}
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
  }
}

const AddTodo = Form.create()(ModalForm);

export default AddTodo