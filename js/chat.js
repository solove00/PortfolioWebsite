var chatMessages = [
  {
    name: "ms1",
    msg: "Hi there, I'm Shan. <span class='emoji'>&#x1F603</span>",
    delay: 1000,
    align: "left",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms2",
    msg: "Hi, Shan!",
    delay: 1000,
    align: "right",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms3",
    msg: "I'm a designer who focuses on user experience design, visual design, and content strategy.",
    delay: 1000,
    align: "left",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms4",
    msg: "<span class='emoji'>&#x1F44D</span>",
    delay: 2000,
    align: "right",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms5",
    msg: "My experience as a product designer at a manufacturing company has given me great skills that I’ve been able to translate over to the digital product world.",
    delay: 1000,
    align: "left",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms6",
    msg: "I love determining what customers need and how to increase the usability of products. I enjoy collaborating with people from different backgrounds and solving complex problems together.",
    delay: 4000,
    align: "left",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms7",
    msg: "I'd like to know more about you!",
    delay: 4000,
    align: "right",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms8",
    msg: "When I'm not working, you can catch me playing with my dog, traveling, hiking and cooking.",
    delay: 2000,
    align: "left",
    showTime: false,
    time: "19:58"
  },
//   {
//     name: "ms9",
//     msg: "image",
//     image:"/images/aboutdog.png",
//     delay: 1000,
//     align: "left",
//     showTime: false,
//     time: "19:58"
//   },
  {
    name: "ms10",
    msg: "I like sketching and painting for fun.",
    delay: 3000,
    align: "left",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms11",
    msg: "image",
    image:"/images/shanart.png",
    delay: 2000,
    align: "left",
    showTime: false,
    time: "19:58"
  },  
  {
    name: "ms12",
    msg: "Last year I visited Kyoto in Japan and Mayan Ruins in Mexico.",
    delay: 4000,
    align: "left",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms13",
    msg: "image",
    image:"/images/aboutshan.png",
    delay: 2000,
    align: "left",
    showTime: false,
    time: "19:58"
  }, 
  {
    name: "ms14",
    msg: "<a style='text-decoration: underline;' href='mailto:oushanmail@gmail.com?subject=Hi,Shan!'>Let's get in touch!</a>  <i class='fa fa-envelope-o fa-lg'></i> ",
    delay: 2000,
    align: "left",
    showTime: false,
    time: "19:58",
  },
];
  var chatDelay = 0;
  
  function onRowAdded() {
    $('.chat-container').animate({
      scrollTop: $('.chat-container').prop('scrollHeight')
    });
  };
  $.each(chatMessages, function(index, obj) {
    chatDelay = chatDelay + 1000;
    chatDelay2 = chatDelay + obj.delay;
    chatDelay3 = chatDelay2;
    scrollDelay = chatDelay;
    chatTimeString = " ";
    msgname = "." + obj.name;
    msginner = ".messageinner-" + obj.name;
    spinner = ".sp-" + obj.name;
    if (obj.showTime == true) {
        chatTimeString = "<span class='message-time'>" + getTime() + "</span>";
    }

    if(obj.msg==="image")
    {   
        imageString = "<img class='message-image' src='" + obj.image + "'/>";
        $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden>" + imageString + "</div></li>");
    }
    else
    {
        $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span></div></li>");
    }
    $(msgname).delay(chatDelay).fadeIn();
    $(spinner).delay(chatDelay2).hide(1);
    $(msginner).delay(chatDelay3).fadeIn();
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;

  });

  function getTime() {
    var timeNow = new Date();
    var hours   = timeNow.getHours();
    var minutes = timeNow.getMinutes();
    var timeString = "" + ((hours < 10) ? "0" : "") + hours;
    timeString  += ((minutes < 10) ? ":0" : ":") + minutes;
    return timeString;
    //document.htmlClock.timeField.value = timeString;
    //timerID = setTimeout("showTime()", 1000);
  }