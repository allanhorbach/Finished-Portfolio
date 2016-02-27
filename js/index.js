(function(){
      var words = [
            'Talk is Cheap',
          'Show me the code',
          'Thinkful. Where the magic happens'
          ], i = 0;
      setInterval(function(){
          $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 3000);
        
  })();