<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <List :todos="todos"/>
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllDoneTodo="clearAllDoneTodo" />
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import MyHeader from "./components/MyHeader";
import List from "./components/MyList";
import MyFooter from './components/MyFooter';
export default {
  name: "App",
  components: {
    List,
    MyFooter,
    MyHeader
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    //添加的todo
    addTodo(todo) {
      console.log('我是app组件，我收到了数据');
      this.todos.unshift(todo);
    },
    checkTodo(_,id) {
      const todo = this.todos.find(todo => todo.id === id);
      todo.done = !todo.done;
    },
    deleteTodo(_,id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id === id)
          todo.title = title
      })
    },
    checkAllTodo(done) {
      this.todos.forEach(todo => todo.done = done);
    },
    clearAllDoneTodo() {
      this.todos = this.todos.filter(todo => !todo.done)
    }
  },
  watch: {
    // 监视默认监视的只是第一层，如果数组中的对象发生了改变，是监视不到
    todos: {
      deep:true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  mounted() {
    this.pubIdcheck = pubsub.subscribe('checkTodo', this.checkTodo)
    this.pubIddelete = pubsub.subscribe('deleteTodo', this.deleteTodo)
    // this.pubIdupdate = pubsub.subscribe('updateTodo', this.updateTodo)
    this.$bus.$on('updateTodo', this.updateTodo)
  },
  beforeDestroy() {
    pubsub.subscribe(this.pubIdcheck)
    pubsub.subscribe(this.pubIddelete)
    // pubsub.subscribe(this.pubIdupdate)
    this.$bus.$off('updateTodo')
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-edit{
  color: #fff;
    background-color: lightblue;
    border: 1px solid rgb(132, 177, 192);
    margin-right:5px ;
}
.btn-edit:hover {
  color: #fff;
  background-color: lightblue;
}
.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

