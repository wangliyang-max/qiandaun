<template>
    <li>
        <label>
            <!--这里勾选和取消勾选可以使用change和click作为事件处理-->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo, $event)"
                ref='inputTitle'>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: "MyItem",
    //声明接收todo
    props: ['todo'],
    methods: {
        handleCheck(id) {
            // this.checkTodo(id);
            // this.$bus.$emit('checkTodo',id)
            pubsub.publish('checkTodo',id)

        },
        handleDelete(id) {
            if (confirm(`确定删除编号为${id}的todo吗`)) {
                // this.deleteTodo(id);
                // this.$bus.$emit('deleteTodo', id)
                pubsub.publish('deleteTodo', id)
            }
        },
        // 编辑
        handleEdit(todo) {
            if (todo.hasOwnProperty('isEdit')) {
                todo.isEdit = true
            } else {
                this.$set(todo, 'isEdit', true)
            }

// 有一个问题是，vue是执行完这个函数之后才进行模板的重新解析的，也就是说input框还没出现，就执行focus()，这时候是不起作用的
            // this.$refs.inputTitle.focus()

            // nextTick指定的结点会在Dom更新之后执行
            this.$nextTick(function (){
                this.$refs.inputTitle.focus()
            })
        },
        handleBlur(todo,e) {
            todo.isEdit = false
            if (!e.target.value.trim()) return alert("输入不能为空")
            this.$bus.$emit('updateTodo',todo.id, e.target.value)
            // pubsub.publish('updateTodo', todo.id, e.target.value)
        }
    }
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background: #ddd;
}

li:hover button {
    display: block;
}
</style>