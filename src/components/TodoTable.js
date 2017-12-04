import React, {Component} from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'

class TodoTableSheet extends Component {
    state = {
      filteredInfo: null,
      sortedInfo: null,
    };

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    const columns = [{
      title: 'Type',
      dataIndex: 'theType',
      key: 'type',
      filters: [
        { text: 'Work', value: 'work' },
        { text: 'Study', value: 'study' },
        { text: 'Family', value: 'family' }
      ],
      filteredValue: filteredInfo.type || null,
      onFilter: (value, record) => record.theType.includes(value),
      sorter: (a, b) => a.theType.length - b.theType.length,
      sortOrder: sortedInfo.columnKey === 'type' && sortedInfo.order,
    }, {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    }];

    return (
      <div>
        <Table columns={columns} dataSource={this.props.todos} onChange={this.handleChange} className="tableList" />
      </div>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const TodoTable = connect(
  mapStateToProps
)(TodoTableSheet)

export default TodoTable