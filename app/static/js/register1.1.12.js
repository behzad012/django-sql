$(function(){ 
    
    $( 'button.control' ).click(formControl);
    $( '#btnnum1' ).click();
    $( '#registerForm' ).click(registerForm);
    $( '#updateSearch' ).click(updateSearch);
    $( '#updateForm' ).click(updateForm);
    $( '#Search' ).click(searchForm);
    $( '#deletebtn' ).click(deleteForm);
});


function registerForm(e){
    $( '#registerinfo' ).css('opacity','.3');
    e.preventDefault();
    var settings={
      method: 'post' ,
      url: '/api/members/' ,
      beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
      },
      data: {
        name: $( '#txtRegister1' ).val().toLowerCase().trim(),
        password: $( '#txtRegister2' ).val().trim(),
        email: $( '#txtRegister3' ).val().toLowerCase().trim(),
        register: 'register'
      },
      timeout: 10000,
      cache: false
      
    };
    $.ajax(settings).done(function(data1){
      console.log( JSON.parse(data1) );
      data=JSON.parse(data1);
      $( '#registerinfo' ).css('opacity','1');
      try{
        var $table=$( '<table class="table table-striped"/>' ).append($('<tbody/>'));
        $.each(data,function(i,value){
          $table.append( $( '<tr/>' ).append('<td>'+i+'</td>'+'<td>'+value+'</td>') )
        });
        $( 'div#registerinfo' ).html( '<p class="text-primary">ثبت نام با موفقیت انجام شد</p><h3 class=""> مشخصات کاربر</h3>' ).append($table);
      }catch{
        $( 'div#registerinfo' ).html(JSON.stringify(data));
      }
    }).fail(function(err){
        $( '#registerinfo' ).css('opacity','1');
        $( 'div#registerinfo' ).html( '<h3 class="text-danger">خطا </h3>' ).append('<p>'+err.responseText+'</P>');
    });
  }
  
  

  
  function formControl(){
    $( 'button.control' ).removeClass('active');
    $( this ).addClass('active');
    if( this.id==='btnnum1' ){
      $( 'div.select' ).css('display','none');
      $( 'div#register' ).css('display','block');
    }else if( this.id==='btnnum2' ){
      $( 'div.select' ).css('display','none');
      $( 'div#update' ).css('display','block');
    }else if( this.id==='btnnum3' ){
      $( 'div.select' ).css('display','none');
      $( 'div#search' ).css('display','block');
    }else if( this.id==='btnnum4' ){
      $( 'div.select' ).css('display','none');
      $( 'div#delete' ).css('display','block');
    }
  }


  function updateSearch(){
    $( '#searchinfo' ).css('opacity','.3');
    $( '#userinfo' ).css('display','none');
    $( '#updateinfo' ).css('display','none');
    var settings={
      method: 'get' ,
      url: '/api/members/' ,
      beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
      },
      data: {
        email: $( '#txtupdate' ).val().toLowerCase().trim()
      },
      timeout: 10000,
      cache: false
    };
    $.ajax(settings).done(function(data1){
      data=JSON.parse(data1)
      $( '#searchinfo' ).css('opacity','1');
      $( '#userinfo' ).css('display','block');
      $( 'div#searchinfo' ).html( '<p class="text-primary"> جستجو با موفقیت انجام شد</p>' );
      try{
        var $table=$( '<table class="table table-striped"/>' ).append($('<tbody/>'));
        $.each(data,function(i,value){
          $( '#txtupdate'+i ).val(value.toString());
        });
      }catch{
        $( 'div#searchResult' ).html('<p>'+JSON.stringify(data)+'</P>');
      }
      }).fail(function(err){
        $( '#searchinfo' ).css('opacity','1');
        $( 'div#searchinfo' ).html( '<h3 class="text-danger">خطا </h3>' ).append('<p class="text-danger">آدرس ایمیل نامعتبر است </p>');
      });
  }


  function updateForm(){
    $( '#updateinfo' ).css('opacity','.3');
    var settings={
      method: 'post' ,
      url: '/api/members/' ,
      beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
      },
      data: {
        name: $( '#txtupdate0' ).val().toLowerCase().trim(),
        password: $( '#txtupdate1' ).val().trim(),
        email: $( '#txtupdate2' ).val().toLowerCase().trim(),
        update:'update'
      },
      timeout: 10000,
      cache: false
    };
    $.ajax(settings).done(function(data1){
      data=JSON.parse(data1);
      $( '#updateinfo' ).css('display','block');
      $( '#updateinfo' ).css('opacity','1');
      try{
        var $table=$( '<table class="table table-striped"/>' ).append($('<tbody/>'));
        $.each(data,function(i,value){
          $table.append( $( '<tr/>' ).append('<td>'+i+'</td>'+'<td>'+value+'</td>') )
        });
        $( 'div#updateinfo' ).html( '<p class="text-primary">بروزرسانی با موفقیت انجام شد</p><h3 class=""> مشخصات کاربر</h3>' ).append($table);
      }catch{
        $( 'div#updateinfo' ).html('<p>'+JSON.stringify(data)+'</P>');
      }
    }).fail(function(err){
        $( '#updateinfo' ).css('display','block');
        $( '#updateinfo' ).css('opacity','1');
        var $table=$( '<table class="table table-striped"/>' ).append($('<tbody/>'));
        $.each(err,function(i,value){
          if (typeof(value)=='object') {
            $.each(value.errors,function(i,v){
              $table.append( $( '<tr/>' ).append('<td>'+v.message+'</td>') )
            });
          }
        });
        $( 'div#updateinfo' ).html( '<h3 class="text-danger">خطا </h3>' ).append($table);
     });
  }


  function searchForm(){
    $( '#searchResult' ).css('opacity','.3');
    var settings={
      method: 'get' ,
      url: '/api/search/' ,
      beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
      },
      data: {
        email: $( '#txtsearch' ).val().toLowerCase().trim()
      },
      timeout: 10000,
      cache: false

    };
    $.ajax(settings).done(function(data1){
      data=JSON.parse(data1);
      $( '#searchResult' ).css('opacity','1');
      try{
        var $table=$( '<table class="table table-striped"/>' ).append($('<tbody/>'));
        $.each(data,function(i,value){
          $table.append( $( '<tr/>' ).append('<td>'+i+'</td>'+'<td>'+value+'</td>') )
        });
        $( 'div#searchResult' ).html( '<p class="text-primary"> جستجو با موفقیت انجام شد</p><h3 class=""> مشخصات کاربر</h3>' ).append($table);
      }catch{
        $( 'div#searchResult' ).html('<p>'+data+'</P>');
      }
    }).fail(function(err){
      $( '#searchResult' ).css('opacity','1');
      $( 'div#searchResult' ).html( '<h3 class="text-danger">خطا </h3>' ).append('<p class="text-danger">آدرس ایمیل نامعتبر است </p>');
    });
  }
  
  
  function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
  }


  function deleteForm(){
    $( '#deleteResult' ).css('opacity','.2');
    var settings={
      method: 'post' ,
      url: '/api/members/' ,
      beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
      },
      data: {
        email: $( '#txtdelete' ).val().toLowerCase().trim(),
        delete: 'delete'
        // csrftoken: jQuery("[name=csrfmiddlewaretoken]").val()
      },
      timeout: 10000,
      cache: false
    };
    $.ajax(settings).done(function(data){
      $( '#deleteResult' ).css('opacity','1');
      $( 'div#deleteResult' ).html( '<p class="text-primary">حذف با موفقیت انجام شد</p><p>'+$( '#txtdelete' ).val().toLowerCase().trim()+'</p>' );
    }).fail(function(err){
      $( '#deleteResult' ).css('opacity','1');
      $( 'div#deleteResult' ).html( '<h3 class="text-danger">خطا </h3>' ).append('<p class="text-danger">آدرس ایمیل نامعتبر است </p>');
    });
  }

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  var csrftoken = getCookie('csrftoken');

