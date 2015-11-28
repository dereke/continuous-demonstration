var browser = require('browser-monkey');
var mountApp = require('mount-app');
var plastiq = require('plastiq');
var createApp = require('../app');
var demo = require('demonstrator');

var todo = browser.component({
  newTodo: function(){
     return this.find('.new-todo');
   },
count: function(){
     return this.find('.todo-count');
   },
item: function(name){
    return this.find('.todo-list li').containing('label', {text: name});
  }
});

demo.record(todo, '#test');

describe('items', function(){
  beforeEach(function(){
    window.history.replaceState(null, '', '/');
  });
  it('add item', function(){
    mountApp(function(testEl, data){
      plastiq.append(testEl, createApp(), {requestRender: setTimeout});
    });


    return todo.newTodo().typeIn('apples').then(function(){
      return todo.newTodo().submit();
    }).then(function(){
      return todo.count().shouldHave({text: '1 item left'});
    });
  });

  it('completes an item', function(){
    mountApp(function(testEl, data){
      plastiq.append(testEl, createApp(data), {requestRender: setTimeout});
    }, [
      {title: 'apples', completed: false},
      {title: 'oranges', completed: false}
    ]);

    return todo.count().shouldHave({text: '2 items left'}).then(function(){
      return todo.item('apples').find('input[type=checkbox]').click();
    }).then(function(){
      return todo.count().shouldHave({text: '1 item left'});
    });
  });
});
