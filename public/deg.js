/*

*/ function $(id) {
            return document.getElementById(id);
         
         }

         $('actualPros').addEventListener('submit', async event => {
           
           event.preventDefault();
      var proxType = (localStorage.getItem("proxType") ||  localStorage.setItem("proxType","Ultraviolet"))
       if (proxType == 'Ultraviolet'){window.navigator.serviceWorker.register('./sw.js', {
                       scope: __uv$config.prefix
            }).then(() => {

           var url = $('url').value.trim()
              
           if (url.indexOf('.') > 1){
              if (url.substr(0, 4) != "http") {
                 url = "https://" + url;
              }
              
           } else {
             url = 'https://google.com/search?q='+url
           
           }
            //window.location.href = window.location.origin + '/service/' + __uv$config.encodeUrl(url);    
         if (true && navigator.userAgent.includes("Firefox") == false) {
    var oklol = window.open("about:blank", "_blank")
      if (!oklol || oklol.closed) {
        var confirmE = confirm("Click ok")
        if (confirmE == true){
          location.href='https://classroom.google.com/'
        } else {
          window.location.href = window.location.origin + '/service/' + __uv$config.encodeUrl(url); // Geo Gebra
        }
       
    } else {
        const doc = oklol.document
        const iframe = doc.createElement("iframe")
        const style = iframe.style
        const link = doc.createElement("link")

        doc.title = "Google Classroom"
        link.rel = "icon";
        link.href = "https://ssl.gstatic.com/classroom/favicon.png";
        iframe.src = window.location.origin + '/service/' + __uv$config.encodeUrl(url);  
        style.position = "fixed"
        style.top = style.bottom = style.left = style.right = 0
        style.border = style.outline = "none"
        style.width = style.height = "100%"

        doc.body.appendChild(iframe)

        
    }
  } else {
                     window.location.href = window.location.origin + '/service/' + __uv$config.encodeUrl(url); // Geo Gebra

  }
            });
          
          } else if (proxType == 'Rhodium'){
            var urlz = $('url').value.trim()
              
           if (urlz.indexOf('.') > 1){
              if (urlz.substr(0, 4) != "http") {
                 urlz = "https://" + url;
              }
              
           } else {
             urlz = 'https://google.com/search?q='+urlz
           
           }
            //window.location.href = window.location.origin + '/client/' + urlz;  
         if (true && navigator.userAgent.includes("Firefox") == false) {
    var oklol = window.open("about:blank", "_blank")
      if (!oklol || oklol.closed) {
        var confirmZ = confirm("Click ok")
        if (confirmZ == true){
          location.href='https://classroom.google.com/'
        } else {
          window.location.href = window.location.origin + '/service/' + __uv$config.encodeUrl(url); // Geo Gebra
        }
    } else {
        const doc = oklol.document
        const iframe = doc.createElement("iframe")
        const style = iframe.style
        const link = doc.createElement("link")

        doc.title = "Google Classroom"
        link.rel = "icon";
        link.href = "https://ssl.gstatic.com/classroom/favicon.png";
        iframe.src = window.location.origin + '/client/' + urlz;  
        style.position = "fixed"
        style.top = style.bottom = style.left = style.right = 0
        style.border = style.outline = "none"
        style.width = style.height = "100%"

        doc.body.appendChild(iframe)

        
    }
  }
          }
         
  
 
    });
