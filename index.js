   
   $(document).ready(function()
   {
      $("a[href*='#LayerLeft']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#LayerLeft').offset().top }, 600, 'easeInCubic');
      });
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      $("a[href*='#news']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_news').offset().top }, 600, 'easeInCubic');
      });
      $("#StickyLayer").stickylayer({orientation: 7, position: [0, 25], delay: 0});
      $("a[href*='#waitForItTitle']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_waitForItTitle').offset().top }, 600, 'easeInCubic');
      });
      $("a[href*='#TabIntro']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_TabIntro').offset().top }, 600, 'easeInCubic');
      });
      $("#jQueryTabs1 a").click(function()
      {
         $(this).tab('show');
      });
      $("a[href*='#services-title']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services-title').offset().top }, 600, 'easeInCubic');
      });
      $("a[href*='#footer']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_footer').offset().top }, 600, 'easeInCubic');
      });
   });
   
   $(document).ready(function()
   {
      function waitForItUpdate()
      {
         // change the date here
         var dateFuture = new Date("December 31, 2018 12:00:00");
         var dateNow = new Date();
         var seconds = Math.floor((dateFuture - (dateNow))/1000);
         var minutes = Math.floor(seconds/60);
         var hours = Math.floor(minutes/60);
         var days = Math.floor(hours/24);
   
         hours = Math.round(hours-(days*24));
         minutes = Math.round(minutes-(days*24*60)-(hours*60));
         seconds = Math.round(seconds-(days*24*60*60)-(hours*60*60)-(minutes*60));
                                    
         $('#waitForItDays').html(days);
         $('#waitForItHours').html(hours);
         $('#waitForItMinutes').html(minutes);
         $('#waitForItSeconds').html(seconds);   
      }
      waitForItUpdate();
      setInterval(waitForItUpdate, 1000);
   });
