array = [
    {out1: "Marilyn Monroe", 
     out2: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    {out1: "Mahatma Gandhi", 
     out2: "Be the change that you wish to see in the world."
    },
    {out1: "Mae West", 
     out2: "You only live once, but if you do it right, once is enough"
    },
    {out1: "Nelson Mandela", 
     out2: "Resentment is like drinking poison and waiting for your enemies to die."
    },
    {out1: "Elbert Hubbardt", 
     out2: "Do not take life too seriously. You will not get out alive"
    },
    {out1: " Bernard M. Baruch", 
     out2: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
    },

]

function getdata()
{

var x = Math.floor ( (Math.random() * array.length) );
document.getElementById("outp1").innerHTML = array[x].out1 ;
document.getElementById("outp2").innerHTML = array[x].out2 ;

}