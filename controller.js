"use strict";


function ToDoController() {
    const vm = this;
    vm.list = [
        {
            task: "Check kiddo's homework",
            complete: true
        },
        {
            task: "Complete homework",
            complete: false
        },
        {
            task: "Workout",
            complete: false
        },
        {
            task: "Help someone",
            complete: true
        },
    ];

    vm.completeTask = () => {
        vm.list[index].completd = true;
    }

    vm.removeTask = () => {
        vm.list.splice(index, 1);
    }

    vm.addTask = () => {
        console.log(vm.item);
        vm.list.push({
            task: vm.list.task,
            completed: false
        });
        vm.item ={};
    }
}

angular
    .module("todoApp")
    .controller("TodController", TodoController);