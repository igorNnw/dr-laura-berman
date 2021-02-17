$(document).ready(function(e) {
  

  var results = {
    tags: [],
  }
function sendDataToServer(survey) {
  var data = survey.data;
  switch(data.gender) {
    case "item1":
      data.gender = "Male";
      break;
    case "item2":
      data.gender = "Female";
      break;
    case "item3":
      data.gender = "Non-binary";
      break;
  }
  
  var collector = {name: data.name, email: data.email, gender: data.gender, phone: data.phone};
  
  console.log(survey.data);
  calculateSpirital(data);
  calculateSexualMastery(data);
  calculateFindingLove(data);
  
  
  $("article.page").fadeOut(500);
  $("#resultContainer").fadeIn(500);
  
  setTimeout(function(){
  	sendToMailChimp(collector);
  }, 500);
}

 
  var survey = new Survey.Model(surveyJSON);
  $("#surveyContainer").Survey({
	model: survey,
    onComplete: sendDataToServer
  });

  
  function calculateSpirital(data) {
  	var cnt = 0;
    var showOn = 2;
    var q = [data.q3, data.q4, data.q5, data.q6];
    q.forEach(function(val){
      if(val == "item1" || val == "item2") {
      	cnt++;
      }
    });
    if(cnt > showOn){
    	$("#spiritual").show();
      	results.tags.push("spiritual");
    }
    
  }
  
  function calculateSexualMastery(data) {
  	var cnt = 0;
    var showOn = 2;
    var q = [data.q12, data.q13, data.q14, data.q15];
    q.forEach(function(val){
      if(val == "item1" || val == "item2" || val == "item4") {
      	cnt++;
      }
    });
    if(cnt > showOn){
    	$("#sexual_mastery").show();
      	results.tags.push("sexual_mastery");
    }
  
  }
  
  function calculateFindingLove(data) {
  	var cnt = 0;
    var showOn = 3;
    var q = [data.q21, data.q22, data.q23, data.q24, data.q25];
    q.forEach(function(val){
      if(val == "item1" || val == "item2") {
      	cnt++;
      }
    });
    if(cnt > showOn){
    	$("#finding_love").show();
      	results.tags.push("finding_love");
    }
  
  }
  
  
  function sendToMailChimp(info) {
  	
    $('<input>').attr({
                type: 'hidden',
                name: 'EMAIL',
                value: info.email
    }).appendTo('.hiddenForm');
    
    
    $('<input>').attr({
                type: 'hidden',
                name: 'NAME',
                value: info.name
    }).appendTo('.hiddenForm');
    
    if(info.gender) {
    	$('<input>').attr({
                type: 'hidden',
                name: 'GENDER',
                value: info.gender
    	}).appendTo('.hiddenForm');
    }
    
    if(info.phone) {
    	$('<input>').attr({
                type: 'hidden',
                name: 'PHONE',
                value: info.phone
    	}).appendTo('.hiddenForm');
    }
    
    if(results.tags.length > 0) {
    	$('<input>').attr({
                type: 'hidden',
                name: 'QCATEGORY',
                value: results.tags.join(",")
    	}).appendTo('.hiddenForm');
    
    }
    
    $('.hiddenForm').submit(function(e) {
      	e.preventDefault();
  		var $this = $(this);
        $.ajax({
            type: "GET", // GET & url for json slightly different
            url: "https://drlauraberman.us3.list-manage.com/subscribe/post-json?c=?",
            data: $this.serialize(),
            dataType    : 'json',
            contentType: "application/json; charset=utf-8",
            error       : function(err) { console.log(err); },
            success     : function(data) {
                console.log(data);
            }
        });
  		return false;
	});
    
    
    $('.hiddenForm').submit();
  }
  
  

});