"use strict";

$(function () {
  load();
  $('#title').on("keydown", function (e) {
    if (e.keyCode === 13) {
      if ($(this).val() == "") {// return false;
      } else {
        // 先读取本地存储原来的数据
        var local = getDate(); // 把local数组进行更新数据，把最新的数据追加给local数组

        local.push({
          title: $(this).val(),
          done: false
        }); // local.push({ title: $(this).val(), done: false });
        // 把这个数组local，存储给本地

        saveDate(local); // todolist 本地存储数据渲染加载到页面

        load();
      }
    }
  }); // todolist删除操作

  $('ol,ul').on('click', 'a', function () {
    // 先获取本地存储
    var data = getDate(); // 修改数据

    var index = $(this).attr('id');
    data.splice(index, 1); // 保存到本地存储

    saveDate(data); // 重新渲染页面

    load();
  }); // todolist完成任务操作

  $('ol , ul').on('click', 'input', function () {
    // 获取本地数据
    var data = getDate(); // 修改数据

    var index = $(this).siblings('a').attr('id');
    data[index].done = $(this).prop('checked'); // 保存到本地存储

    saveDate(data); // 重新渲染页面

    load();
  }); // 按清除，清除所有数据

  $('#clean').on('click', function () {
    // prompt('是否清除所有数据？');
    var flag = confirm('是否清除所有数据？'); // console.log(flag);

    if (flag) {
      // var data = getDate();
      // data = [];
      // saveDate(data);
      localStorage.removeItem('todolist');
      load();
    } else {
      load();
    }
  }); // 读取本地存储的数据

  function getDate() {
    var data = localStorage.getItem('todolist');

    if (data !== null) {
      // 本地存储的数据是字符串格式，但是我们需要的是对象格式
      // 所以返回的时候，利用parse()将字符串转为json格式
      return JSON.parse(data);
    } else {
      return [];
    }
  } // 保存本地存储数据


  function saveDate(data) {
    // stringify方法是将JSON格式转化为字符串
    localStorage.setItem('todolist', JSON.stringify(data));
  } // 渲染加载数据


  function load() {
    // 读取本地存储的数据
    var data = getDate(); // 先清空里面的内容

    $('ol').empty();
    $('ul').empty();
    var a = 0;
    var b = 0;
    $.each(data, function (i, n) {
      if (n.done) {
        $('ul').prepend('<li><input type="checkbox" checked="checked"><p>' + n.title + '</p><a href="javascript:;" id=' + i + '></a></li>');
        a++;
      } else {
        $('ol').prepend('<li><input type="checkbox"><p>' + n.title + '</p><a href="javascript:;" id=' + i + '></a></li>');
        b++;
      }
    });
    $('#todocount').html(b);
    $('#donecount').html(a);
    var percent = a / (a + b) * 100; // console.log(percent);

    $('.progress-bar').css('width', percent + '%');
  }
});